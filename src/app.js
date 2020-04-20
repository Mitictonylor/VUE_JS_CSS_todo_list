import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () =>{
new Vue({
  el: "#app",
  data:{
      todos: [
              {action: "wash the car",importance: "low" },
              {action: "study",       importance: "high"},
              {action: "tidy up",     importance: "low"}
              ],

      newTodo: ""
          },
  methods:{
      saveNewToDo: function(){
            const newObject = {action: this.newTodo, importance:'low'}
                this.todos.push(newObject);
                this.newTodo = "";
              },
      lowImportance: function(index){
        this.todos[index].importance = 'low' ? true : false
      }
  }
});


});
