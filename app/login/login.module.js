'use strict';

angular.module('app.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  })
  .when('/', {
    redirectTo: "/login"
  });
}])

.controller('LoginCtrl', ["$scope", "$location", function($scope, $location) {
  console.log(">>LoginCtrl"); // Remover
  $scope.user = {};
  var credentials = {};

  $scope.login = function(user) {
    console.log(">>LoginCtrl.login");
    credentials = user;
    $scope.user = {};
    // Chamar função de login
    // Se login bem sucedido, proceder com redirect abaixo
    $location.path('/tasks');
    // Caso login mal sucedido, apresentar erro
  };

  $scope.reset  = function(form) {
    console.log(">>LoginCtrl.reset");
    form.$setPristine();
    form.$setUntouched();
  };

}]);
