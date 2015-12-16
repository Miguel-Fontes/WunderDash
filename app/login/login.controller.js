angular.module('app.login')
.controller('LoginController', ["$scope", "$location", "wunderlist", function($scope, $location, wunderlist) {
  console.log(">>LoginCtrl"); // Remover
  $scope.user = {};
  var credentials = {};

  $scope.login = function(user) {
    console.log(">>LoginController.login");
    credentials = user;
    $scope.user = {};

    wunderlist.auth(user);
  };

  $scope.reset  = function(form) {
    console.log(">>LoginController.reset");
    form.$setPristine();
    form.$setUntouched();
  };
}]);
