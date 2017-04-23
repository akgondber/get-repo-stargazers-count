const dunc = require('./');

dunc.forGithub('reafvvfdvct')
    .then(result => {
      console.log(`React stars ${result}`);
    })
    .catch(err => {
      console.log(`Extracting err ${err}`);
    });
