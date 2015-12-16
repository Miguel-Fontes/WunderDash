angular.module("app.tasks")
.controller('TasksController', ["$scope", "Lists", "Tasks", function TasksController($scope, Lists, Tasks) {
  console.log(">>TasksController");
  // Retrieve all user's lists
  $scope.lists = Lists.all();

  // Retrieves all user's tasks
  $scope.tasks = Tasks.all();
}]);
