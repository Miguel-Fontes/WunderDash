'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.login',
  'app.tasks',
  'app.version',
  'app.wunderlistAPI'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController',
    controllerAs: 'LoginCtrl'
  })
  .when('/tasks', {
    templateUrl: 'tasks/tasks.html',
    controller: 'TasksController',
    controllerAs: 'TasksCtrl'
  })
  .when('/:authData', {
    template: " ",
    controller: 'WunderlistController',
    controllerAs: 'WunderlistCtrl'
  })
  .otherwise({redirectTo: '/login'});
}]);
