var app = angular.module("FinalApp");

app.controller("MainController",["$scope","$resource","PostResource",function($scope,$resource,PostResource){
  Users = $resource("https://jsonplaceholder.typicode.com/users/:id",{id: "@id"});
  $scope.posts = PostResource.query();
  $scope.users = Users.query();

  $scope.removePost = function(post){
    PostResource.delete({id: post.id});

    $scope.posts = $scope.posts.filter(function(ele){
      return ele.id !== post.id;
    })
  }
}]);


app.controller("PostController",["$scope","PostResource","$routeParams",function($scope,PostResource,$routeParams){
  $scope.post = PostResource.get({id: $routeParams.id});
  $scope.postId = $routeParams.id;
}]);


app.controller("NewPostController",["$scope","PostResource",function($scope,PostResource){
  $scope.post = {};
  $scope.title = "Crear post";
  $scope.savePost = function(){
    PostResource.save({data: $scope.post},function(data){
      console.log(data);
    });
  }
}]);

app.controller("EditPostController",["$scope","PostResource","$routeParams","$location",function($scope,PostResource,$routeParams,$location){
  $scope.post = PostResource.get({id: $routeParams.id});
  $scope.title = "Editar Post";
  $scope.savePost = function(){
    PostResource.update({id: $scope.post.id},{data: $scope.post},function(data){
      console.log(data);
      $location.path("/post/"+$scope.post.id);
    });
  }
}]);
