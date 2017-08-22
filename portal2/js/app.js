var app = angular.module("FinalApp",["lumx","ngRoute","ngResource"]);
app.config(function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when("/",{
      controller: "MainController",
      templateUrl: "templates/home.html"
    })
    .when("/post/:id",{
      controller: "PostController",
      templateUrl: "templates/post.html"
    })
    .when("/posts/new",{
      controller: "NewPostController",
      templateUrl: "templates/post_form.html"
    })
    .when("/post/edit/:id",{
      controller: "EditPostController",
      templateUrl: "templates/post_form.html"
    })
});
