'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.login',
  'app.tasks',
  'app.version',
  'app.wunderlistAPI'
]).
config(['$routeProvider', '$locationProvider', 'wunderlistProvider', function($routeProvider, $locationProvider, wunderlistProvider) {
  wunderlistProvider.setClientId("6a91fed3c9ebc490cf99")
  wunderlistProvider.setAppUrl("http://localhost:8000/app/#");
  wunderlistProvider.setClientSecret("d5d2bde725de154765344a9ba872e48a5a8069a915120327c46b452355d2");

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
