(function() {
  'use strict';
  angular.module('app')
  .controller('Tasks', Tasks);

  Tasks.$inject = ['datasource'];

  function Tasks(datasource) {
    console.log(">>TasksController");
    // Declarations
    var vm = this;
    vm.lists = [];
    vm.tasks = [];

    activate();

    function activate() {
      // Retrieve all user's lists
      vm.lists = datasource.lists.all();
      // Retrieves all user's tasks
      vm.tasks = datasource.tasks.all();

      //console.log(datasource.provider0);
      //console.log(datasource.provider1);
    }

  }
})();
