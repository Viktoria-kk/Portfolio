import { useEffect, useMemo, useState } from 'react';
import { fetchRepositories } from '../services/githubService';
import { shouldDisplayRepository } from '../utils/repositoryFilters';

export function useRepositories() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadRepositories() {
      try {
        const data = await fetchRepositories();
        if (isMounted) {
          setRepositories(data.filter(shouldDisplayRepository));
          setError('');
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRepositories();

    return () => {
      isMounted = false;
    };
  }, []);

  const languages = useMemo(() => {
    const uniqueLanguages = repositories
      .map((repo) => repo.language)
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));

    return [...new Set(uniqueLanguages)];
  }, [repositories]);

  return { repositories, languages, loading, error };
}
