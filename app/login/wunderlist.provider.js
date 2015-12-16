angular.module('app.login')
.provider('wunderlist', function wunderlistProvider() {

  var wunderAuthUrl = "",
  clientId = "", // Provided by Wunderlist app register
  clientSecret = "", // Provided by Wunderlist app register
  appUrl = ""; // This app URL for redirection

  //client_id="6a91fed3c9ebc490cf99",
  //appUrl="http://localhost:8000/app/#",
  //client_secret="d5d2bde725de154765344a9ba872e48a5a8069a915120327c46b452355d2";

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
  this.$get = ["$window", function WunderlistAPIFactory($window) {
    console.log("Instanciando! - " + clientId + " - " + appUrl + " - " + clientSecret );

    return new wunderlistAPI($window, clientId, appUrl, clientSecret);

  }];
});
