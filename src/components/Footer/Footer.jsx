import { useLanguage } from '../../context/LanguageContext';
import './Footer.scss';

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p>© {year} Viktoria. {t.home.phrases[4]}.</p>
        <div>
          <a href="https://github.com/Viktoria-kk" target="_blank" rel="noreferrer">
            {t.common.github}
          </a>
          <a href="mailto:viktoria@example.com">{t.common.email}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
