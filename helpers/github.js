const request = require('request');
const config = require('../config.js');

// Complete the getReposByUsername function in helpers / github.js.In this function, you'll use the request npm module to fetch a user's repositories from the GitHub API

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request.get(options, function (err, response, body) {
    if (err) {
      return err
    }
    var parsed = JSON.parse(body)
    // parsed.length = # of repos

    callback(parsed)
  })
}

module.exports.getReposByUsername = getReposByUsername;