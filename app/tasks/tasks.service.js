angular.module("app.tasks")
.factory("Tasks", function TasksFactory() {
  return {
    all: function() {
      return  [
        {"id": 1, "list_id": 1,"title": "Tarefa 1"},
        {"id": 2, "list_id": 1,"title": "Tarefa 2"},
        {"id": 3, "list_id": 1,"title": "Tarefa 3"},
        {"id": 4, "list_id": 1,"title": "Tarefa 4"},
        {"id": 5, "list_id": 1,"title": "Tarefa 5"},
        {"id": 6, "list_id": 2,"title": "Tarefa 1_lista2"},
        {"id": 7, "list_id": 2,"title": "Tarefa 2_lista2"},
        {"id": 8, "list_id": 2,"title": "Tarefa 3_lista2"},
        {"id": 9, "list_id": 2,"title": "Tarefa 4_lista2"},
        {"id": 10, "list_id": 2,"title": "Tarefa 5_lista2"}
      ];
    }
    //create:
    //update:
    //delete:
  };
});
