import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.scss';

const skills = [
  { name: 'HTML', level: 86 },
  { name: 'CSS / SCSS', level: 82 },
  { name: 'JavaScript', level: 74 },
  { name: 'React', level: 72 },
  { name: 'Node.js', level: 45 },
  { name: 'GitHub', level: 68 }
];

const technologies = ['React', 'JavaScript', 'SCSS', 'Axios', 'React Router', 'Node.js', 'Git', 'GitHub'];

function About() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <section className="about section page-section">
      <div className="container">
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

        <div className="about__grid">
          <article className="about__card reveal">
            <h3>{t.about.title}</h3>
            <p>{t.about.intro}</p>
          </article>
          <article className="about__card reveal">
            <h3>{t.about.education}</h3>
            <p>{t.about.educationText}</p>
          </article>
          <article className="about__card reveal">
            <h3>{t.about.current}</h3>
            <p>{t.about.currentText}</p>
          </article>
        </div>

        <div className="about__split">
          <section className="about__panel reveal">
            <h3>{t.about.skills}</h3>
            <div className="skill-list">
              {skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <div>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <progress value={skill.level} max="100" />
                </div>
              ))}
            </div>
          </section>

          <section className="about__panel reveal">
            <h3>{t.about.journey}</h3>
            <div className="timeline">
              {t.about.timeline.map((item) => (
                <article key={item.title}>
                  <span>{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="about__lists">
          <section className="about__panel reveal">
            <h3>{t.about.technologies}</h3>
            <div className="tag-list">
              {technologies.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="about__panel reveal">
            <h3>{t.about.languages}</h3>
            <div className="tag-list">
              {t.about.languageItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="about__panel reveal">
            <h3>{t.about.interests}</h3>
            <div className="tag-list">
              {t.about.interestItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
