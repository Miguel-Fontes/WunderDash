angular.module('app.login')
.controller('WunderlistController', [ "$window", "wunderlist", function($window, wunderlist) {

  console.log(">>WunderlistCtrl");
  console.log($window.location.href)

  var response = $window.location.href;

  code = response.substr(response.indexOf("code=") + 5, (response.indexOf("#") - response.indexOf('code=') - 5));
  state = response.substr(response.indexOf("state=") + 6);

  wunderlist.setAuthorization(code, state);

  $window.location.href = "#/tasks"
}]);
