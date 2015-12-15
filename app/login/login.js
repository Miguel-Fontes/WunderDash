'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  })
  .when('/', {
    redirectTo: "/login"
  });
}])

.controller('LoginCtrl', ["$scope", function($scope) {
  $scope.user = {};
  var user ={};

  $scope.login = function (user) {
      user = user;
      $scope.user = {};
      console.log(user);
      redirectTo: "/tasks";
  };

}]);
