import { useMemo, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filters from '../../components/Filters/Filters';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import { useLanguage } from '../../context/LanguageContext';
import { useRepositories } from '../../hooks/useRepositories';
import { useFavorites } from '../../hooks/useFavorites';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.scss';

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [sortBy, setSortBy] = useState('updated');
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();
  const { repositories, languages, loading, error } = useRepositories();
  const { favorites, toggleFavorite } = useFavorites();
  useScrollReveal();

  const filteredRepositories = useMemo(() => {
    return repositories
      .filter((repo) => {
        const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLanguage = selectedLanguage === 'all' || repo.language === selectedLanguage;
        return matchesSearch && matchesLanguage;
      })
      .sort((first, second) => {
        if (sortBy === 'stars') {
          return second.stargazers_count - first.stargazers_count;
        }

        if (sortBy === 'name') {
          return first.name.localeCompare(second.name);
        }

        return new Date(second.updated_at) - new Date(first.updated_at);
      });
  }, [repositories, searchTerm, selectedLanguage, sortBy]);

  return (
    <section className="projects section page-section">
      <div className="container">
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="projects__toolbar reveal">
          <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder={t.projects.search} />
          <Filters
            languages={languages}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {loading && <LoadingSpinner />}
        {error && <p className="state-message">{t.common.error}</p>}
        {!loading && !error && filteredRepositories.length === 0 && (
          <p className="state-message">{t.projects.noResults}</p>
        )}

        <div className="projects__grid">
          {filteredRepositories.map((repository) => (
            <ProjectCard
              key={repository.id}
              repository={repository}
              isFavorite={favorites.includes(repository.id)}
              onToggleFavorite={toggleFavorite}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          repository={selectedProject}
          onClose={() => setSelectedProject(null)}
          isFavorite={favorites.includes(selectedProject.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </section>
  );
}

export default Projects;
