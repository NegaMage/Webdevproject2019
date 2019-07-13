var express=require("express");
const bodyParser=require('body-parser');
var app=express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  	if (err) throw err;
  	var dbo = db.db("mydb");
  	var myobj=[
  		{city:"Whiterun", headline:"New Thane appointed by Jarl" },
      {city:"Whiterun", headline:"Dragon killed by strange elf" },
      {city:"Whiterun", headline:"Dragon spotted at Helgen" },
      {city:"Whiterun", headline:"Nazeem dies painfully, Thane Arahaeldir declares celebrations" },
      {city:"Winterhold", headline:"Half the city falls of cliff, villagers in mourning" },
  		{city:"Winterhold" ,headline:"College under fire for dragon attack" },
      {city:"Riften" ,headline:"Maven Black-Briar accused of ties with the Dark Brotherhood" },
  		{city:"Riften" ,headline:"Thieves' guild at it again" },
  		{city:"Solitude" ,headline:"Traitor publicly executed" },
      {city:"Riverwood" ,headline:"Robbery at Lucan's" },
      {city:"Riverwood" ,headline:"Dragon spotted at Helgen, general unrest" },
      {city:"Morthal" ,headline:"Fire burns down house" },
      {city:"Morthal" ,headline:"Dragon sightings bring fear, unrest" },
      {city:"Dawnstar" ,headline:"Citizen murdered in broad daylight!" },
      {city:"Dawnstar" ,headline:"Shrine of Talos to stay open" },
      {city:"Markarth" ,headline:"Hall of Dead closed closed by priests." },
      {city:"Windhelm" ,headline:"Dunmer forced into slums, Ulfric remains silent." },
      {city:"Windhelm" ,headline:"Ulfric Stormcloak leads rebellion amid lack of supplies" }
  	];
  	dbo.collection("news").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  	});
});