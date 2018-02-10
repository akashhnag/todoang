var express=require('express');

var todoController=require('./controllers/todoController');

var app=express();

//setting template engine
app.set('view engine','ejs');

//static files

app.use('/', express.static('public'));


//listening port 8080
app.listen(8080,function(){
 console.log("listening to port 8080");
});


//activate controllers
todoController(app);
