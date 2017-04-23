## get-repo-stargazers-count

Extract stargazers count for specified repository written in javascript.

---

### Install

```
$ npm install --save-dev get-repo-stargazers-count
```


### Usage
```js
const repoStarsCount = require('get-repo-stargazers-count');

repoStarsCount.forGithub('gulp')
      .then(result => {
        // do something with result
      })
      .catch(err => {
        // handle error
      })

### License

MIT
