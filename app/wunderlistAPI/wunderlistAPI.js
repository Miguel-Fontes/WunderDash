function wunderlistAPI($window, $http, clientId, appUrl, clientSecret) {

  var localToken= 0,
  response="",
  code = "",
  state = "",
  accessToken ="";

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
      //state = this.validateState(paramState) ? paramState : throw exception;
      state = paramState;
      console.log(">>wunderlistAPI.setAuthorization - SET - " + code + " // " + state);

      var promise = $http({
        method: 'POST',
        url: 'https://www.wunderlist.com/oauth/access_token',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {client_id: clientId, client_secret: clientSecret, code: code }});

        promise.then(function successCallback(response) {
          console.log(">>>>> Request HTTP SUCCESS-> " + response);
        }, function errorCallback(error) {
          console.log(">>>>> Request HTTP ERROR-> " + error.status );
        });

        var promise = $http({
          method: 'GET',
          url: 'https://a.wunderlist.com/api/v1/lists',
          headers: {
            'Content-Type': 'application/json'
          },
          data: [{'client_id': clientId, 'client_secret': clientSecret, 'code': code, 'access_token': ' dc925583924be76c8f8434e5558c1f33f3e9f1ae149d9d99a3fe87d49716'}]
        }).then(function successCallback(response) {
          console.log(">>>>> Request HTTP 2 SUCCESS-> " + response);
        }, function errorCallback(error) {
          console.log(">>>>> Request HTTP 2 ERROR-> " + error.status );
        });




        console.log(">>wunderlistAPI.setAuthorization - FIM");
      }



    }

    this.requestAcessToken = function(){
      $http({
        method: 'POST',
        url: 'https://www.wunderlist.com/oauth/access_token',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {client_id: clientId, client_secret: clientSecret, code: code }})
        .success(function(data) {
          console.log(data);
        });
      };

      //Not tested
      this.validateState = function(paramState) {
        // Validates the state param. It MUST be equal the localToken.
        return this.localToken === paramState ? true : false;
      };
    }
