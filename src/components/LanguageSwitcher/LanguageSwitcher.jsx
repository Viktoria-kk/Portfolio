import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitcher.scss';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" aria-label="Language switcher">
      <button
        type="button"
        className={language === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={language === 'ka' ? 'active' : ''}
        onClick={() => setLanguage('ka')}
      >
        KA
      </button>
    </div>
  );
}

export default LanguageSwitcher;
