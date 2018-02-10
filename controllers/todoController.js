var bodyParser=require('body-parser');//include body-parser

var urlencodedParser=bodyParser.urlencoded({extended: false});//encode body parser

var mongoose=require('mongoose');//include mongoose

mongoose.connect('mongodb://meratodo:meratodo@ds247007.mlab.com:47007/meratodo');//connect database

var schema=new mongoose.Schema({
  item:String
});//build schema

var todo=mongoose.model('Todo',schema);//build model

module.exports=function(app){

app.get('/todo',function(req,res){
  todo.find({}, function(err,data){
    if (err) throw err;
    res.render('todo.ejs',{todos:data});
  });
});

app.post('/todo',urlencodedParser,function(req,res){
  var new_item=todo(req.body).save(function(err,data){
    if (err) throw err;
    res.json(data);
  });
});

app.delete('/todo/:item',function(req,res){
  todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});
};
