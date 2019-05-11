const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  ID: Number,
  URL: String,
  RepoURL: String,
  Username: String
});

let Repo = mongoose.model('Repo', repoSchema);

// Complete the save function in database / index.js.This function will save the relevant data from the GitHub API in the mongo database.

// Ensure there are no duplicate repos.If you happen to import the same repo twice, it should only show up once in your database.See the tips section about considering unique columns.

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

}


module.exports.save = save;