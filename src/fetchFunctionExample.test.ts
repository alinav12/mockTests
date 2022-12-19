import {fetchGithubUser} from './fetchFunctionExample';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('fetchGithubUser', () => {
  it('fetch correctly', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({login: 'alinav12', public_repos: 9}),
    );

    const userReps = await fetchGithubUser('alinav12');
    expect(userReps).toEqual(9);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://api.github.com/users/alinav12`);
  });
});
