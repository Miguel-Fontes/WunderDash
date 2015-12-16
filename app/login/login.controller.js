angular.module('app.login')
.controller('LoginController', ["$scope", "$location", "WunderlistService", function($scope, $location, WunderlistService) {
  console.log(">>LoginCtrl"); // Remover
  $scope.user = {};
  var credentials = {};

  $scope.login = function(user) {
    console.log(">>LoginController.login");
    credentials = user;
    $scope.user = {};

    WunderlistService.auth(user);
  };

  $scope.reset  = function(form) {
    console.log(">>LoginController.reset");
    form.$setPristine();
    form.$setUntouched();
  };
}]);
