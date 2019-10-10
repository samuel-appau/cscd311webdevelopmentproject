var express=require("express");

var ActionController=require("./controller/ActionController");
var app=express();


app.set("view engine","ejs");

//static files
app.use(express.static("./public"));
//fire controller
ActionController(app);


app.listen(3000);

console.log("You are listening on port 3000");