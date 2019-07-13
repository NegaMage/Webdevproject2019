var express=require("express");
var ejs=require("ejs");
const bodyParser=require('body-parser');
var app=express();
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

app.use(bodyParser.urlencoded({extended:true}));
const PORT=3001;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/",function (req,res) {
	res.render("startpage.html");
});

//voting part
app.all("/votepage", function(req,res){
	res.render("votepage.html");
})
app.all("/vote0", function(req, res){
	var database=[];
	mongo.connect(url, (err, client) => {
	  	if (err) {
	    console.error(err)
	    return
	  	}
	  	db=client.db("mydb");
	  	const votecoll=db.collection("votes");

		votecoll.find({class:"Bulbasaur"}).toArray((err, item)=>{
			temp=item;
			var solve=item[0].votes+1
			item[0].votes=solve;
			votecoll.updateOne({class:'Bulbasaur'},{'$set': {'votes': solve}}, (err, item)=>{
			})
		})	
	})
	res.redirect("/voteres");
})
app.all("/vote1", function(req, res){
	var database=[];
	mongo.connect(url, (err, client) => {
	  	if (err) {
	    console.error(err)
	    return
	  	}
	  	db=client.db("mydb");
	  	const votecoll=db.collection("votes");

		votecoll.find({class:"Charmander"}).toArray((err, item)=>{
			temp=item;
			var solve=item[0].votes+1
			item[0].votes=solve;
			votecoll.updateOne({class:'Charmander'},{'$set': {'votes': solve}}, (err, item)=>{
			})
		})	
	})
	res.redirect("/voteres");
})
app.all("/vote2", function(req, res){
	var database=[];
	mongo.connect(url, (err, client) => {
	  	if (err) {
	    console.error(err)
	    return
	  	}
	  	db=client.db("mydb");
	  	const votecoll=db.collection("votes");

		votecoll.find({class:"Squirtle"}).toArray((err, item)=>{
			temp=item;
			var solve=item[0].votes+1
			item[0].votes=solve;
			votecoll.updateOne({class:'Squirtle'},{'$set': {'votes': solve}}, (err, item)=>{
			})
		})	
	})
	res.redirect("/voteres");
})
app.all("/vote3", function(req, res){
	var database=[];
	mongo.connect(url, (err, client) => {
	  	if (err) {
	    console.error(err)
	    return
	  	}
	  	db=client.db("mydb");
	  	const votecoll=db.collection("votes");

		votecoll.find({class:"Pikachu"}).toArray((err, item)=>{
			temp=item;
			var solve=item[0].votes+1
			item[0].votes=solve;
			votecoll.updateOne({class:'Pikachu'},{'$set': {'votes': solve}}, (err, item)=>{
			})
		})	
	})
	res.redirect("/voteres");
})
app.get("/voteres", function(req, res){
	mongo.connect(url, (err, client)=>{
		if(err){
			console.error(err)
			return
		};
		db=client.db("mydb");
		const voteres=db.collection("votes");
		var pollres=[];
		voteres.find({}).toArray((err, item)=>{
			pollres=item;
			res.render("voteres.ejs", {poll: pollres});
		})
	})
})

//news part
app.all("/addnews", function(req, res){
	res.render("addnews.js");
});
app.all("/newspage", function(req,res){
	res.render("newspg.html");
	city=req.body.city;
	res.render(newsqry.js, {cityn:city})
});
app.all("/newsqry", function(req,res){
	console.log("entered data");
	console.log(req.body);
	cityq=req.body.city;
	mongo.connect(url, (err, client) => {
	  	if (err) {
	    console.error(err)
	    return
	  	}
	  	db=client.db("mydb");
	  	const newspaper=db.collection("news");
	  	newspaper.find({city:cityq}).toArray((err, item)=>{
	  		if(typeof item[0] == 'undefined'){
	  			res.render("newsfail.html");
	  			return;
	  		}
			res.render("newsqry.ejs", {news:item});
		})	
	})
});

app.listen(PORT,()=>{
	console.log("server started on port:",PORT);
});