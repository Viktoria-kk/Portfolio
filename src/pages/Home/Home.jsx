import Hero from '../../components/Hero/Hero';
import ProgrammingQuote from '../../components/ProgrammingQuote/ProgrammingQuote';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Home.scss';

function Home() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <>
      <Hero />
      <section className="home-intro section">
        <div className="container home-intro__grid">
          <div>
            <SectionTitle title={t.home.introTitle} subtitle={t.home.intro} />
            <div className="home-intro__actions reveal">
              <Button to="/about" variant="secondary">
                {t.nav.about}
              </Button>
              <Button to="/projects">{t.nav.projects}</Button>
            </div>
          </div>
          <ProgrammingQuote />
        </div>
      </section>
    </>
  );
}

export default Home;
