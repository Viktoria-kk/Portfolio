import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.scss';

const highlightBubbles = ['UI', 'Node.js', 'SQL', 'Figma', 'ML', 'Python', 'JS'];

function About() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <section className="about section page-section">
      <div className="container">
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

        <div className="about-hero reveal">
          <div className="about-hero__text">
            <span className="about-kicker">{t.about.education}</span>
            <h3>{t.about.educationText}</h3>
            <p>{t.about.intro}</p>
          </div>
          <div className="about-hero__notes" aria-label="Current learning highlights">
            {highlightBubbles.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="learning-path reveal">
          <div className="learning-path__line" />
          {t.about.timeline.map((item) => (
            <article key={item.title}>
              <span>{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <section className="skills-garden reveal">
          <div className="skills-garden__intro">
            <span className="about-kicker">{t.about.skills}</span>
            <h3>{t.about.current}</h3>
            <p>{t.about.currentText}</p>
          </div>

          <div className="skills-garden__groups">
            {t.about.skillGroups.map((group) => (
              <article key={group.title}>
                <h4>{group.title}</h4>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tech-ribbon reveal">
          <span className="about-kicker">{t.about.technologies}</span>
          <div className="tech-orbit">
            {t.about.techGroups.map((group) => (
              <article key={group.title}>
                <h4>{group.title}</h4>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="about-bottom reveal">
          <section>
            <h3>{t.about.languages}</h3>
            <ul>
              {t.about.languageItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>{t.about.interests}</h3>
            <ul>
              {t.about.interestItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
