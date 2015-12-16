function wunderlistAPI($window, clientId, appUrl, clientSecret) {

  var localToken= 0,
  response="",
  code = "",
  state = "";

  return {
    auth: function(user) {
      console.log(">>wunderlistAPI.auth");
      localToken = Math.random().toFixed(10)
      wunderAuthUrl = ("https://www.wunderlist.com/oauth/authorize?client_id=" + clientId +
      "&redirect_uri=" + appUrl + "&state=" + localToken);

      console.log("wunderAuthUrl: " + wunderAuthUrl);
      // Chamar função de login
      // Se login bem sucedido, proceder com redirect abaixo
      // Caso login mal sucedido, apresentar erro

      // Sucess https://oauth2client.com/cb#token=ACCESS_TOKEN
      // Error https://oauth2client.com/cb#error=access_denied
      $window.location.href = wunderAuthUrl;
    },

    getAuthorization: function() {
      console.log(">>wunderlistAPI.getAuthorization - " + code);
      return code;
    },

    setAuthorization: function(paramCode, paramState) {
      console.log(">>wunderlistAPI.setAuthorization - IN - " + paramCode + " // " + paramState);
      code = paramCode;
      state = paramState;
      console.log(">>wunderlistAPI.setAuthorization - SET - " + code + " // " + state )
    }
  }
}
