import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.scss';

const initialValues = {
  name: '',
  email: '',
  message: ''
};

function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  useScrollReveal();

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = t.contact.required;
    }

    if (!values.email.trim()) {
      nextErrors.email = t.contact.required;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      nextErrors.email = t.contact.invalidEmail;
    }

    if (!values.message.trim()) {
      nextErrors.message = t.contact.required;
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setValues(initialValues);
    }
  };

  return (
    <section className="contact section page-section">
      <div className="container contact__grid">
        <div>
          <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />
          <div className="contact__links reveal">
            <a href="https://github.com/Viktoria-kk" target="_blank" rel="noreferrer">
              GitHub: Viktoria-kk
            </a>
            <a href="mailto:viktoria@example.com">{t.common.email}: viktoria@example.com</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              {t.contact.linkedin}
            </a>
            <span>{t.contact.location}</span>
          </div>
        </div>

        <form className={`contact__form reveal ${sent ? 'sent' : ''}`} onSubmit={handleSubmit} noValidate>
          <label>
            {t.contact.name}
            <input name="name" value={values.name} onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}
          </label>

          <label>
            {t.contact.email}
            <input name="email" type="email" value={values.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </label>

          <label>
            {t.contact.message}
            <textarea name="message" rows="6" value={values.message} onChange={handleChange} />
            {errors.message && <span>{errors.message}</span>}
          </label>

          <Button type="submit">{t.contact.send}</Button>
          {sent && <p className="contact__success">{t.contact.sent}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
