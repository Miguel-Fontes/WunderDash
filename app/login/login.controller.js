(function() {
  'use strict';
  angular.module('app')
  .controller('Login', Login);

  Login.$inject = ['$scope', '$location', 'wunderlist'];

  function Login($scope, $location) {
    console.log('>>LoginController'); // Remover
    // Declarations
    var vm =  this,
    credentials = {};

    $scope.user = {email: '', pwd:''};

    // API
    vm.login = login;
    vm.reset = reset;

    // Function Implementations
    function login(user) {
      console.log(">>LoginController.login");
      credentials = user;
      $scope.user = {};

      console.log(">>>>Credenciais salvas: " + credentials.email + " - " + credentials.pwd);

      // Esta porção deverá chamar os serviços de login necessários futuramente
      //wunderlist.auth(user);
      $location.url('/tasks');
    }

    function reset(form) {
      console.log(">>LoginController.reset");
      form.$setPristine();
      form.$setUntouched();
    }
  }
})();
