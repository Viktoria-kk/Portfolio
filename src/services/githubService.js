import axios from 'axios';

const githubClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000
});

export async function fetchRepositories() {
  const response = await githubClient.get('/users/Viktoria-kk/repos', {
    params: {
      sort: 'updated',
      direction: 'desc',
      per_page: 100
    }
  });

  return response.data;
}
