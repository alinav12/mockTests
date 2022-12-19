export const fetchGithubUser = async (userName: string) => {
  try {
    const url = `https://api.github.com/users/${userName}`;
    const response = await fetch(url);
    const data = await response.json();
    const repNum = data['public_repos'];
    return repNum;
  } catch (e) {
    console.log(e);
  }
};

// fetchGithubUser('alinav12');
