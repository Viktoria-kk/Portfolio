import { useLanguage } from '../../context/LanguageContext';
import Button from '../Button/Button';
import TypingText from '../TypingText/TypingText';
import './Hero.scss';

const floatingItems = ['<>', '{}', '()', 'const', 'React', 'Node.js', 'JavaScript'];

function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero__decor" aria-hidden="true">
        {floatingItems.map((item, index) => (
          <span key={item} style={{ '--delay': `${index * 0.7}s` }}>
            {item}
          </span>
        ))}
      </div>

      <div className="hero__inner container">
        <div className={`hero__content ${language === 'ka' ? 'hero__content--ka' : ''} reveal visible`}>
          <p className="hero__eyebrow">React / Node.js / UI</p>
          <h1>
            {t.home.hello}
            <small>
              <TypingText phrases={t.home.phrases} />
            </small>
          </h1>
          <p>{t.home.intro}</p>
          <div className="hero__buttons">
            <Button to="/projects">{t.common.viewProjects}</Button>
            <Button to="/contact" variant="secondary">
              {t.common.contactMe}
            </Button>
          </div>
        </div>

        <div className="hero__panel reveal visible">
          <div className="hero__window">
            <div className="hero__dots">
              <span />
              <span />
              <span />
            </div>
            <pre>{t.home.codeSnippet}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
