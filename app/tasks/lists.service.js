angular.module("app.tasks")
.factory("Lists", [function ListsFactory() {
  
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
