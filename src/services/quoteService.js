import axios from 'axios';

const fallbackQuotes = [
  'First, solve the problem. Then, write the code.',
  'Simplicity is the soul of efficiency.',
  'Programs must be written for people to read.',
  'The best error message is the one that never shows up.',
  'Make it work, make it right, make it fast.'
];

const georgianFallbackQuotes = [
  'კარგი კოდი ჯერ ადამიანისთვის იწერება და შემდეგ კომპიუტერისთვის.',
  'პატარა ნაბიჯებით დიდი პროექტები იქმნება.',
  'სუფთა ლოგიკა სუფთა ინტერფეისივით მნიშვნელოვანია.',
  'ყოველი შეცდომა სწავლის კიდევ ერთი შესაძლებლობაა.'
];

const quoteClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com',
  timeout: 8000
});

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function isProfessionalProgrammingQuote(quote) {
  const text = quote?.quote?.trim();

  if (!text || text.length < 24 || text.length > 150) {
    return false;
  }

  const lowerText = text.toLowerCase();
  const hasProgrammingKeyword = ['code', 'program', 'software', 'debug', 'computer', 'system', 'simple'].some((word) =>
    lowerText.includes(word)
  );
  const avoidsAwkwardPhrases = !['violence', 'stupid', 'idiot', 'telephone'].some((word) => lowerText.includes(word));

  return hasProgrammingKeyword && avoidsAwkwardPhrases;
}

export async function fetchProgrammingQuote(language = 'en') {
  if (language === 'ka') {
    return {
      text: getRandomItem(georgianFallbackQuotes)
    };
  }

  try {
    const response = await quoteClient.get('/trashify/hacker-quotes/master/quotes.json');
    const usableQuotes = response.data.filter(isProfessionalProgrammingQuote);
    const selectedQuote = getRandomItem(usableQuotes.length ? usableQuotes : response.data);

    return {
      text: selectedQuote.quote
    };
  } catch (error) {
    return {
      text: getRandomItem(fallbackQuotes)
    };
  }
}
