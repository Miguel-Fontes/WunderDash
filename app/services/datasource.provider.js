(function() {
  'use strict';

  angular
  .module('app')
  .provider('datasource', datasourceProvider);

  datasourceProvider.$inject = [];

  /* @ngInject */
  function datasourceProvider() {
    /* jshint validthis:true */
    var provider = this,
    datasource = {};

    provider.$get = datasourceFactory;
    provider.setDatasource = setDatasource;

    function setDatasource(source) {
      //datasource = restApi(source);
      datasource = source;
    }

    // Nesta seção abaixo, devemos definir quais são os datasources a serem
    // passados para os objetos clientes. É importante que seja validada a
    // entrada efetuada pelo usuário no setDataSource
    datasourceFactory.$inject = ["listsService", "tasksService", 'wunderlist'];
    function datasourceFactory(listsService, tasksService) {

      return new DatasourceAPI();

      function DatasourceAPI() {
        return  {
          lists: listsService,
          tasks: tasksService,
        };
      }

    }
  }
})();
