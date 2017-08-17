var app = angular.module("MyFirstApp",[]);
app.filter("removeHtml",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'');
	}
});
app.run(function($rootScope){
	$rootScope.nombre = "donat"
});
app.controller("FirstController",["$scope","$http",function($scope,$http){
	$scope.nombre = "Donato Ben";
	// $scope.nuevoComentario = {

	// };
	// $scope.comentarios = [
	// 	{
	// 		comentario: "Buen tutorial",
	// 		username: "Codigofacilito"
	// 	},
	// 	{
	// 		comentario: "Malísimo el tutorial",
	// 		username: "Donato"
	// 	}
	// ];

	// $scope.agregarComentario = function(){
	// 	$scope.comentarios.push($scope.nuevoComentario);
	// 	$scope.nuevoComentario = {};
	// }

	// $scope.posts = [];
	// $scope.newPost = {};
	// $scope.loading = true;
	// $http.get("https://jsonplaceholder.typicode.com/posts")
	// 	.then(function(success){
	// 		$scope.posts = success.data;
	// 		$scope.loading = false;
	// 	},function(err){
	// 		console.log(err);
	// 		$scope.loading = false;
	// 	});
	//
	//
	// $scope.addPost = function(){
	// 	$http.post("https://jsonplaceholder.typicode.com/posts",{
	// 		title: $scope.newPost.title,
	// 		body:  $scope.newPost.body,
	// 		userId: 1
	// 	})
	// 		.then(function(success){
	// 			console.log(success);
	// 			$scope.posts.push(success.data)
	// 			$scope.newPost = {};
	// 		},
	// 		function(err){
	// 			console.log(err);
	// 		})
	// }


	// $scope.mi_html = "<p>Hola mundo</p>";
}]);

app.controller("childController",["$scope",function($scope){

}])
