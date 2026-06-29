import { useEffect, useState } from 'react';
import { fetchProgrammingQuote } from '../../services/quoteService';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './ProgrammingQuote.scss';

function ProgrammingQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadQuote() {
      try {
        const quoteData = await fetchProgrammingQuote();
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
  }, []);

  return (
    <section className="quote-card reveal">
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
