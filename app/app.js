'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.login',
  'app.tasks',
  'app.version'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  //http://localhost:8000/app/?state=0.7822748011&code=9bb4919e84eff11a4f1e
  $routeProvider
  //http://localhost:8000/app/tasks/?state=0.9739701520&code=198804bc9fb2d9e0b35f
  //http://localhost:8000/app/?state=0.6812455333&code=13b520a4420a457488bf
  .when('/state=:state', {
    templateUrl: 'tasks/tasks.html',
    controller: 'TasksController',
    controllerAs: 'TasksCtrl'
  })
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
  .otherwise({redirectTo: '/login'});
}]);
