const excludedRepositoryNames = ['Viktoria-kk', 'Re-educate-hw', '10x-homework-1', 'CV'];
const excludedLanguages = ['Python'];

export function shouldDisplayRepository(repository) {
  const isExcludedByName = excludedRepositoryNames.includes(repository.name);
  const isExcludedByLanguage = excludedLanguages.includes(repository.language);

  return !isExcludedByName && !isExcludedByLanguage;
}
