import { useLanguage } from '../../context/LanguageContext';
import './Filters.scss';

function Filters({ languages, selectedLanguage, onLanguageChange, sortBy, onSortChange }) {
  const { t } = useLanguage();

  return (
    <div className="filters">
      <label>
        <span>{t.common.language}</span>
        <select value={selectedLanguage} onChange={(event) => onLanguageChange(event.target.value)}>
          <option value="all">{t.common.all}</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>{t.projects.sort}</span>
        <select value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
          <option value="updated">{t.projects.newest}</option>
          <option value="stars">{t.projects.stars}</option>
          <option value="name">{t.projects.name}</option>
        </select>
      </label>
    </div>
  );
}

export default Filters;
