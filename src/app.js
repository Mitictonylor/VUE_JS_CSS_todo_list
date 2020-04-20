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

      newTodo: "",
      importance: ""
          },
  methods:{
      saveNewToDo: function(){
        let newObject = {action: this.newTodo, importance:'low'}
          if (this.importance === 'high'){
            newObject = {action: this.newTodo, importance:'high'}
            }
                this.todos.push(newObject);
                this.newTodo = "";
                this.importance = "";
              },
      changeImportance: function(index){

          if (this.todos[index].importance === 'low'){
            this.todos[index].importance = 'high';
          }else{
            this.todos[index].importance = 'low'
          }
      },

      sortByImportance: function(){
        this.todos.sort(function(a,b){
          let high = a.importance;
          let low = b.importance;
          if (high<low){
            return -1;
          }if (high> low){
            return 1;
          }
          return 0;
        });
      },

      done: function(index){

        this.todos.splice(index,1)
      }

  }
});


});
