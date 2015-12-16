angular.module('app.login')
.controller('LoginController', ["$scope", "$location", "Wunderlist", function($scope, $location, Wunderlist) {
  console.log(">>LoginCtrl"); // Remover
  $scope.user = {};
  var credentials = {};

  $scope.login = function(user) {
    console.log(">>LoginController.login");
    credentials = user;
    $scope.user = {};

    Wunderlist.auth(user);

  };

  $scope.reset  = function(form) {
    console.log(">>LoginController.reset");
    form.$setPristine();
    form.$setUntouched();
  };
}]);
