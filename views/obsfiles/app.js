var express=require("express");
const bodyParser=require('body-parser');
var app=express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

app.use(bodyParser.urlencoded({extended:true}));
const PORT=3001;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/",function (req,res) {
	res.render("simple.html");
	res.render(create_poll_collection.js);
	res.render(insert_poll_defaults.js);
});

// voting part
var votelist=[{class:"Bulbasaur", votes:0},{class:"Charmander", votes:0},{class:"Squirtle", votes:0},{class:"Pikachu", votes:0}];
var votetoken;
var city;
app.all("/votepage",function(req,res){
	res.render("vote.ejs");
});
app.post("/vote0", function(req,res){
	votelist[0].votes++;
	votetoken=0;
	res.redirect("/votepageres", {token:votetoken});
});
app.post("/vote1", function(req,res){
	votelist[1].votes++;
	votetoken=1;
	res.redirect("/votepageres", {token:votetoken});
});
app.post("/vote2", function(req,res){
	votelist[2].votes++;
	votetoken=2;
	res.redirect("/votepageres", {token:votetoken});
});
app.post("/vote3", function(req,res){
	votelist[3].votes++;
	votetoken=3;
	res.redirect("/votepageres");
});
app.get("/votepageres", function(req,res){
	res.render("voteres.ejs", {listo:votelist, votetok:token});
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
	city=req.body.city;
	res.render("newsqry.js", {cityn:city});
});



app.listen(PORT,()=>{
	console.log("server started on port:",PORT);
});