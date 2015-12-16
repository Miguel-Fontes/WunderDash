angular.module('app.tasks')
.factory('Wunderlist', ["$http", "$window", function WunderlistFactory($http, $window) {

  var wunderAuthUrl = "",
  client_id="6a91fed3c9ebc490cf99", // Provided by Wunderlist app register
  appUrl="http://localhost:8000/app/"; // This app URL for redirection

  return {
    auth: function(user) {
      console.log(">>Wunderlist.auth");
      wunderAuthUrl = ("https://www.wunderlist.com/oauth/authorize?client_id=" + client_id +
      "&redirect_uri=" + appUrl + "&state=" + Math.random().toFixed(10));

      console.log("wunderAuthUrl: " + wunderAuthUrl);

      $window.location.href = wunderAuthUrl;

      // Chamar função de login
      // Se login bem sucedido, proceder com redirect abaixo
      // Caso login mal sucedido, apresentar erro

      // Sucess https://oauth2client.com/cb#token=ACCESS_TOKEN
      // Error https://oauth2client.com/cb#error=access_denied

    }
  };

}]);
