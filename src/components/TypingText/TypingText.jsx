import { useEffect, useState } from 'react';
import './TypingText.scss';

function TypingText({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const isComplete = letterCount === currentPhrase.length;
    const isEmpty = letterCount === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting && isComplete) {
          setDeleting(true);
          return;
        }

        if (deleting && isEmpty) {
          setDeleting(false);
          setPhraseIndex((index) => (index + 1) % phrases.length);
          return;
        }

        setLetterCount((count) => count + (deleting ? -1 : 1));
      },
      isComplete ? 1200 : 70
    );

    return () => clearTimeout(timeout);
  }, [deleting, letterCount, phraseIndex, phrases]);

  return <span className="typing-text">{phrases[phraseIndex].slice(0, letterCount)}</span>;
}

export default TypingText;
