const mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true
})

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("We're connected to DB!")
});

// "Blueprints"
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  userName: String,
  html_url: String,
  repoName: String
});

// compile schema to model
let Repo = mongoose.model('Repo', repoSchema);

// Complete the save function in database / index.js.This function will save the relevant data from the GitHub API in the mongo database.

// Ensure there are no duplicate repos.If you happen to import the same repo twice, it should only show up once in your database.See the tips section about considering unique columns.

// Need document instance
let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var repo = new Repo(repo)
  repo.save(repo, function (err) {
    if (err) {
      return console.log("There was an error storing to the database")
    } else {
      return console.log("Successfully posted")
    }
  })
}

var getHandler = (cb) => {
  Repo.find((err, docs) => {
    if (err) {
      console.log("There's an error fetching data: ", err)
    } else {
      cb(null, docs)
    }
  }).limit(25)
}

module.exports.save = save;
module.exports.getHandler = getHandler;