import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'favoriteRepos';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (repoId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(repoId)
        ? currentFavorites.filter((id) => id !== repoId)
        : [...currentFavorites, repoId]
    );
  };

  return { favorites, toggleFavorite };
}
