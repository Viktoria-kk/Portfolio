import { useEffect } from 'react';
import { formatDate } from '../../utils/formatDate';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../Button/Button';
import './ProjectModal.scss';

function ProjectModal({ repository, onClose, isFavorite, onToggleFavorite }) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!repository) {
    return null;
  }

  return (
    <div className="project-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="project-modal__content" onClick={(event) => event.stopPropagation()}>
        <button className="project-modal__close" type="button" onClick={onClose} aria-label={t.common.close}>
          ×
        </button>
        <span className="project-modal__eyebrow">{t.projects.modalTitle}</span>
        <h2>{repository.name}</h2>
        <p>{repository.description || t.projects.descriptionFallback}</p>
        <div className="project-modal__grid">
          <div>
            <span>{t.common.language}</span>
            <strong>{repository.language || 'Code'}</strong>
          </div>
          <div>
            <span>{t.common.stars}</span>
            <strong>{repository.stargazers_count}</strong>
          </div>
          <div>
            <span>{t.common.updated}</span>
            <strong>{formatDate(repository.updated_at)}</strong>
          </div>
        </div>
        <div className="project-modal__actions">
          <Button href={repository.html_url}>{t.common.github}</Button>
          <Button variant="secondary" onClick={() => onToggleFavorite(repository.id)}>
            {isFavorite ? t.projects.removeFavorite : t.projects.favorite}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
