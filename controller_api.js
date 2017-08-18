var app = angular.module("CustomDirective",[]);

app.directive("backImg",function(){
  return function(scope,element,attrs){
    attrs.$observe("backImg",function(value){
      element.css({
        "background":"url("+value+")",
        "background-size": "cover",
        "background-position": "center"
      });
    });
  }
});

app.controller("AppCtrl",["$scope","$http",function($scope,$http){
    $http.get("https://api.github.com/users/donatobhr/repos")
    .then(function(success){
        var data = success.data;
        $scope.repos = data;

    },function(error){
      console.log(error.data);
    })
}])
