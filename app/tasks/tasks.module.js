'use strict';

angular.module('app.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'tasks/tasks.html',
    controller: 'TasksController',
    controllerAs: 'TasksCtrl'
  });
}]);
