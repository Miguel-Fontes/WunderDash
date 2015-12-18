(function() {
  'use strict';
  angular
  .module('app')
  .config(RouteConfig);

  function RouteConfig($routeProvider) {
    $routeProvider
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'Login',
      controllerAs: 'LoginCtrl'
    })
    .when('/tasks', {
      templateUrl: 'tasks/tasks.html',
      controller: 'Tasks',
      controllerAs: 'TasksCtrl'
    })
    .otherwise({redirectTo: '/login'});
  }
})();
