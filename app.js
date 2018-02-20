var express=require('express');
var bodyParser=require('body-parser');//include body-parser
var urlencodedParser=bodyParser.urlencoded({extended: false});//encode body parser
var mongoose=require('mongoose');//include mongoose
var todoController=require('./controllers/todoController');
var app=express();

//setup database
mongoose.connect('mongodb://meratodo:meratodo@ds247007.mlab.com:47007/meratodo');//connect database

var schema=new mongoose.Schema({
  item:String
});//build schema

var todo=mongoose.model('Todo',schema);//build model

//setting template engine
app.set('view engine','ejs');

//static files
app.use('/', express.static('public'));

//body parser setup
app.use(bodyParser.json());

//activate controllers
todoController(app,urlencodedParser,todo);

//listening port 8080
app.listen(3000,function(){
 console.log("listening to port 8080");
});



