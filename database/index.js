const mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true
})

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("We're connected to DB!")
});

//  EXAMPLE :
// var Tank = mongoose.model('Tank', yourSchema);

// var small = new Tank({ size: 'small' });
// small.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

var promise = mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true,
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  ID: Number,
  URL: String,
  RepoURL: String,
  Username: String,
  avtarURL: String
});

let Repo = mongoose.model('Repo', repoSchema);

// Complete the save function in database / index.js.This function will save the relevant data from the GitHub API in the mongo database.

// Ensure there are no duplicate repos.If you happen to import the same repo twice, it should only show up once in your database.See the tips section about considering unique columns.


let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // Repo.save(repo, function (err) {
  //   if (err) {
  //     return console.log("There was an error storing to the database")
  //   } else {
  //     return console.log(repos)
  //   }
  // })

  console.log("FROM DB: ", repos)
}


module.exports.save = save;