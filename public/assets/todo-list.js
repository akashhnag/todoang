var myapp=angular.module("myapp",[]);
myapp.controller("todoController",function($scope,$http,$window){
  
  $http.get("/todo/items").then(function(res){
    $scope.todos=res.data;
  });

  var refresh=function(){
    $http.get("/todo/items").then(function(res){
      $scope.todos=res.data;
      $window.location.reload();
  })
  }
  
  $scope.add=function(){
      var data={item:$scope.item};    
      $http.post("/todo/item",data).then(function(res){
        $scope.todos=res.data;
        $window.location.reload();
      });  
  };
  var todo;
  $scope.del=function(todo){
    var item = todo.item.replace(/ /g, "-");
    var send="/todo/"+item;
    $http.delete(send).then(function(res){
      $window.location.reload();
    });
  }

});