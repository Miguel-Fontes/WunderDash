(function() {
  'use strict';

  angular
  .module('app')
  .config(Config);

  Config.$inject = ['datasourceProvider'];
  function Config(datasourceProvider){
    // Put some config here, bro!
    var tasks = {'nome': 'tasks',
    'get': 'get_val',
    'post': 'post_val',
    'put': 'put_val',
    'delete': 'delete_val'};

    var lists = {'nome': 'lists',
    'get': 'get_val',
    'post': 'post_val',
    'put': 'put_val',
    'delete': 'delete_val'};

    datasourceProvider.setDatasource([tasks, lists]);
  }

})();
