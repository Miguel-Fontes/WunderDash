(function() {
  'use strict';
  angular.module('app')
  .factory('listsService', ListsFactory);

  ListsFactory.$inject = [];

  function ListsFactory() {

    return {
      all: all,
      create: create,
      update: update,
      remove: remove
    };

    function all() {
      return [
        {'id': 1, 'title': 'Lista 1'},
        {'id': 2, 'title': 'Lista 2'}
      ];
    }

    function create() {
      return [
      ];
    }

    function update() {
      return [
      ];
    }

    function remove() {
      return [
      ];
    }

  }
})();
