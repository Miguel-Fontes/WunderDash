(function() {
  'use strict';
  angular
  .module('app')
  .service('wunderlist', wunderlistService);

  function wunderlistService() {

    var WunderlistSDK = window.wunderlist.sdk;
    var WunderlistAPI = new WunderlistSDK({
      'accessToken': ' 7b01db3d5f6b0c1e9eef36179f0895ae1e05972c181b5d857a67b137e10a',
      'clientID': '6a91fed3c9ebc490cf99'
    });

    WunderlistAPI.initialized.done(function () {
      WunderlistAPI.http.lists.all()
      .done(handleListData)
      .fail(handleError);

      WunderlistAPI.http.tasks.forList(208039612)
      .done(handleListData)
      .fail(handleError);
    });

    function handleListData(data) {
      console.log(data);
    }

    function handleError(error) {
      console.log(error);
    }

  }

})();
