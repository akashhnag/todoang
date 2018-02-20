module.exports=function(app,urlencodedParser,todo){

app.get('/todo',function(req,res){
    res.render('todo.ejs');          
});

app.get("/todo/items",function(req,res){
  todo.find({},function(err,data){
      if(err) throw err;
      res.json(data);
  })
})

app.post('/todo/item',urlencodedParser,function(req,res){
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
