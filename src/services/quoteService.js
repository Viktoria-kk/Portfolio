import axios from 'axios';

const fallbackQuotes = [
  'First, solve the problem. Then, write the code.',
  'Code is like humor. When you have to explain it, it is bad.',
  'Make it work, make it right, make it fast.',
  'Programs must be written for people to read.'
];

export async function fetchProgrammingQuote() {
  try {
    const response = await axios.get('https://api.github.com/zen', {
      timeout: 8000,
      headers: {
        Accept: 'text/plain'
      }
    });

    return {
      text: response.data
    };
  } catch (error) {
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

    return {
      text: randomQuote
    };
  }
}
