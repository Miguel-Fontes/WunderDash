(function() {
  'use strict';
  angular
  .module('app')
  .service('wunderlist', wunderlistService);

  function wunderlistService() {

    var WunderlistSDK, WunderlistAPI;

    activate();

    return {
      lists: WunderlistAPI.http.lists,
      tasks: WunderlistAPI.http.tasks
    };

    function activate() {

      WunderlistSDK = window.wunderlist.sdk;
      WunderlistAPI = new WunderlistSDK({
        'accessToken': ' ',
        'clientID': '6a91fed3c9ebc490cf99'
      });

      WunderlistAPI.initialized.done(handleSuccess).fail(handleFailure);

      function handleSuccess() {
        // Handle dat Success, bro!
      }

      function handleFailure() {
        // Never give up!
      }

    }

  }

})();

/*WunderlistAPI.initialized.done(function () {
WunderlistAPI.http.lists.all()
.done(handleListData)
.fail(handleError);

WunderlistAPI.http.tasks.forList(208039612)
.done(handleListData)
.fail(handleError);
}*/
