import { useEffect, useState } from 'react';
import { fetchProgrammingQuote } from '../../services/quoteService';
import { useLanguage } from '../../context/LanguageContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './ProgrammingQuote.scss';

function ProgrammingQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    let isMounted = true;

    async function loadQuote() {
      setLoading(true);
      setQuote(null);

      try {
        const quoteData = await fetchProgrammingQuote(language);
        if (isMounted) {
          setQuote(quoteData);
        }
      } catch (quoteError) {
        if (isMounted) {
          setQuote({ text: 'Programs must be written for people to read.' });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadQuote();

    return () => {
      isMounted = false;
    };
  }, [language]);

  return (
    <section className="quote-card reveal">
      <h2>{t.home.quoteTitle}</h2>
      {loading && <LoadingSpinner />}
      {quote && (
        <blockquote>
          <p>&ldquo;{quote.text}&rdquo;</p>
        </blockquote>
      )}
    </section>
  );
}

export default ProgrammingQuote;
