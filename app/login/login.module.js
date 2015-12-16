'use strict';
angular.module('app.login', [])
.config(['$routeProvider', 'wunderlistProvider', function($routeProvider, wunderlistProvider) {
  wunderlistProvider.setClientId("6a91fed3c9ebc490cf99")
  wunderlistProvider.setAppUrl("http://localhost:8000/app/#");
  wunderlistProvider.setClientSecret("d5d2bde725de154765344a9ba872e48a5a8069a915120327c46b452355d2");
}]);
