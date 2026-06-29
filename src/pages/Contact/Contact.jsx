import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.scss';

const contactLinks = [
  {
    key: 'github',
    value: 'Viktoria-kk',
    href: 'https://github.com/Viktoria-kk'
  },
  {
    key: 'email',
    value: 'vika.kazarova.vk@gmail.com',
    href: 'mailto:vika.kazarova.vk@gmail.com'
  },
  {
    key: 'linkedin',
    value: 'viktoria-kazarovi',
    href: 'https://www.linkedin.com/in/viktoria-kazarovi/'
  }
];

function Contact() {
  const { language, t } = useLanguage();
  useScrollReveal();

  return (
    <section className="contact section page-section">
      <div className="contact__decor" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container contact__inner">
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="contact__panel reveal">
          <div className={`contact__intro ${language === 'ka' ? 'contact__intro--ka' : ''}`}>
            <h3>{t.contact.connectTitle}</h3>
          </div>

          <div className="contact__links">
            {contactLinks.map((link) => (
              <a key={link.key} href={link.href} target={link.key === 'email' ? undefined : '_blank'} rel={link.key === 'email' ? undefined : 'noreferrer'}>
                <span>{link.key === 'email' ? t.common.email : link.key === 'linkedin' ? t.contact.linkedin : t.common.github}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
