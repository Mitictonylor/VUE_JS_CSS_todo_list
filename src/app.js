import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () =>{
new Vue({
  el: "#app",
  data:{
      todos: ["wash the car", "study", "tidy up"],
      newTodo: ""
          },
  methods:{
      saveNewToDo: function(){
                this.todos.push(this.newTodo);
                this.newTodo = "";
                }

  }
});


});
