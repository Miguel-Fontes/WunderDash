(function() {
  'use strict';
  angular.module('app')
  .controller('Tasks', Tasks);

  Tasks.$inject = ['datasource', '$scope'];

  function Tasks(datasource, $scope) {
    console.log(">>TasksController");
    // Declarations
    var vm = this;
    vm.lists = [];
    vm.tasks = [];

    activate();

    function activate() {
      // Retrieve all user's lists and tasks
      datasource.lists.all().then(function(data) {
        vm.lists = data;
        console.log(vm.lists);
        getTasks();});
      }

      function getTasks() {
        for (var i = 0, l = vm.lists.length; i < l; i++ ) {
          datasource.tasks.forList(vm.lists[i].id).then(function (data) {
            vm.tasks = vm.tasks.concat(data);
            /* jshint validthis:true */
            console.log(vm.tasks);
            $scope.$apply(); });
          }
        }

      }
    })();
