(function() {
  'use strict';

  angular
  .module('app')
  .service('restApi', restApiService);

  restApiService.$inject = [];

  /* @ngInject */
  function restApiService() {
    return RestApi;

    function RestApi(apiConfig) {
      var api = this;

      api.config = apiConfig;

      validate();

      function validate() {
        // Código para validar as URLs informadas.
        // IMPLEMENTAR

        return new RestApi(api.config);
      }
    }
  }
})();
