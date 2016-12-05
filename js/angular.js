angular.module("toDoApp",[])
.controller("toDoController", function($scope){
  $scope.todos = [];
  $scope.totalToDo = function(){
     return $scope.todos.length;
  }
  $scope.addToDo = function(){
  if($scope.input == undefined){
    $scope.error ="Please enter a task";
  }else {  $scope.todos.push({"text":$scope.input,"done":false});
         $scope.error ="";
    $scope.input = "";
         }
  }
  $scope.clearCompleted = function(){
    for(var i = $scope.todos.length-1;i>=0;i--){
      if($scope.todos[i].done == true){
        $scope.todos.splice(i,1);
      }
      
    }
  }
});