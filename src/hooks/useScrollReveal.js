import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((element) => observer.observe(element));
    };

    const mutationObserver = new MutationObserver(observeElements);
    observeElements();
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
