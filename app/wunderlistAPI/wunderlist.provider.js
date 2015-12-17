angular.module('app.wunderlistAPI')
.provider('wunderlist', function wunderlistProvider() {

  var wunderAuthUrl = "",
  clientId = "", // Provided by Wunderlist app register
  clientSecret = "", // Provided by Wunderlist app register
  appUrl = ""; // This app URL for redirection

  this.setClientId = function(id) {
    clientId = id;
    console.log(">>wunderlist.setClientSecret: " + clientId + " - " + id);
  };

  this.setAppUrl = function(url) {
    appUrl = url;
    console.log(">>wunderlist.setClientSecret: " + appUrl + " - " + url);
  };

  this.setClientSecret = function(secret) {
    clientSecret = secret;
    console.log(">>wunderlist.setClientSecret: " + clientSecret + " - " + secret);
  }
  //return {
  this.$get = ["$window", "$http", function WunderlistAPIFactory($window, $http) {
    console.log("Instanciando! - " + clientId + " - " + appUrl + " - " + clientSecret );

    return new wunderlistAPI($window, $http, clientId, appUrl, clientSecret);

  }];
});
