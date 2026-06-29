import { formatDate } from '../../utils/formatDate';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../Button/Button';
import './ProjectCard.scss';

function ProjectCard({ repository, isFavorite, onToggleFavorite, onOpen }) {
  const { t } = useLanguage();

  return (
    <article className="project-card reveal" onClick={() => onOpen(repository)}>
      <button
        className={`project-card__favorite ${isFavorite ? 'active' : ''}`}
        type="button"
        aria-label={isFavorite ? t.projects.removeFavorite : t.projects.favorite}
        onClick={(event) => {
          event.stopPropagation();
          onToggleFavorite(repository.id);
        }}
      >
        ★
      </button>
      <h3>{repository.name}</h3>
      <p>{repository.description || t.projects.descriptionFallback}</p>
      <div className="project-card__meta">
        <span>{repository.language || 'Code'}</span>
        <span>{t.common.stars}: {repository.stargazers_count}</span>
        <span>{t.common.updated}: {formatDate(repository.updated_at)}</span>
      </div>
      <Button href={repository.html_url} variant="ghost" onClick={(event) => event.stopPropagation()}>
        {t.common.github}
      </Button>
    </article>
  );
}

export default ProjectCard;
