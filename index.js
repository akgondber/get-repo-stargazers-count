const got = require('got');

const SEARCH_GITHUB_URL = 'https://api.github.com/search/repositories';
const HEADERS = {
  'User-Agent': 'Mozilla/5.0'
};

exports.forGithub = packageName => {
  return new Promise((resolve, reject) => {
    got(SEARCH_GITHUB_URL, {
      headers: HEADERS,
      query: {
        q: `${packageName} language:javascript`,
        page: 1,
        per_page: 1 /* eslint camelcase: "off" */
      }
    }).then(response => {
      const items = JSON.parse(response.body).items;
      if (items.length === 0) {
        return reject(new Error('Repo not found'));
      }
      return resolve(items[0].stargazers_count);
    }).catch(err => {
      return reject(err);
    });
  });
};
