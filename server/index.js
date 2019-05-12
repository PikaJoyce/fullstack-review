const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const getHelpers = require('../helpers/github.js')
const db = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log(req.body) // {username: ' PikaJoyce'}

  // GET request to the API fetching data back, now we need a function (the callback) that handles
  // creating an entry in the mongoDB
  getHelpers.getReposByUsername(req.body.username, (res) => {
    var repo = {
      id: 0,
      userName: "",
      repoURL: "",
      repoName: ""
    }
    for (var i = 0; i < res.length; i++) {
      repo.id = res[i].id
      repo.userName = res[i].owner.login
      repo.repoURL = res[i].owner.repos_url
      repo.repoName = res[i].name
      db.save(repo)
    }
  })
  res.end();
})

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // console.log(req.body) // {username: ' PikaJoyce'}
  db.getHandler((err, data) => {
    if (err) {
      console.log("Error on server: ", err)
    } else {
      res.send(data)
      res.end();
    }
  })
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});