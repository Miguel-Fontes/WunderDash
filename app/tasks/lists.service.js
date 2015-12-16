angular.module("app.tasks")
.factory("Lists", ['wunderlist', function ListsFactory(wunderlist) {
  console.log(">>ListsService - Yay, Lists. Yo code: " + wunderlist.getAuthorization());

  return {
    all: function () {
      return [
        {"id": 1, "title": "Lista 1"},
        {"id": 2, "title": "Lista 2"}
      ];
    }
    //create:
    //update:
    //delete:
  };
}]);
