var app = angular.module("FinalApp");

app.service("PostResource",function($resource){
  return $resource("https://jsonplaceholder.typicode.com/posts/:id",{id: "@id"},{update: {method:"PUT"}});
})
