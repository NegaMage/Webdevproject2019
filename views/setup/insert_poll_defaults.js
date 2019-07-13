var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { class:"Bulbasaur", votes:0},
    { class:"Charmander", votes:0},
    { class:"Squirtle", votes:0},
    { class:"Pikachu", votes:0}
  ];
  dbo.collection("votes").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});