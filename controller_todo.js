var app = angular.module("todoApp",["LocalStorageModule"]);
app.controller("TodoController",["$scope","localStorageService",function($scope,localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}else{
		$scope.todo = [
		// {
		// 	descripcion: "Terminar el curso de angular",
		// 	fecha: "15-08-2017 2:00pm"
		// }
		];
	}

	$scope.$watchCollection('todo',function(newValue,oldValue){
		localStorageService.set("angular-todolist",$scope.todo);
	})

	$scope.addAct = function(){
		$scope.todo.push($scope.newAct);
		$scope.newAct = {};
	}

	$scope.clean = function(){
		$scope.todo = [];
	}


}]);
