var app = angular.module("todoApp",["LocalStorageModule"]);
app.service("ToDoService",function(localStorageService){
		this.key = "angular-todolist";
		this.activities = [];
		if(localStorageService.get(this.key)){
			this.activities = localStorageService.get(this.key);
		}else{
			this.activities = [];
		}

		this.add = function(newAct){
			this.activities.push(newAct);
			this.updaLocalStorage();
		}

		this.updaLocalStorage = function(){
			localStorageService.set(this.key,this.activities);
		}

		this.clean = function(){
			this.activities = [];
			this.updaLocalStorage();
			return this.getAll();
		}

		this.getAll = function(){
			return this.activities;
		}

		this.removeItem = function(item){
			this.activities = this.activities.filter(function(activity){
				return activity !== item;
			});
			this.updaLocalStorage();
			return this.getAll();
		}
});
app.controller("TodoController",["$scope","ToDoService",function($scope, ToDoService){
	$scope.todo = ToDoService.getAll();

	$scope.addAct = function(){
		ToDoService.add($scope.newAct);
		$scope.newAct = {};
	}

	$scope.removeAct = function(item){
		$scope.todo = ToDoService.removeItem(item);
	}

	$scope.clean = function(){
		$scope.todo = ToDoService.clean();
	}
}]);
