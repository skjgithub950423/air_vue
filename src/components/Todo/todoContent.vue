<template>
  <section>
    <el-input
      placeholder="请输入内容"
      @ @keyup.enter.native="addTodo"
    ></el-input>
    <toDoList 
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
    ></toDoList>
    <toDoTab :todos="todos"
     :filter="filter"
     @toggle="filterTodo"
     @clearAllCompleted="clearAllCompleted"
     ></toDoTab>
  </section>
</template>

<script>
import toDoList from '../Todo/todoList'
import toDoTab from '../Todo/todoTab'
let id = 0;
export default {
  data(){
    return{
      todos:[],
      filter:'all'
    }
  },
  components:{
    toDoList,
    toDoTab
  },
  methods:{
    addTodo(e){
      this.todos.unshift({
        id:id++,
        content:e.target.value.trim(),
        completed:false
      });
      e.target.value = '';
    },
    deleteTodo(id){
      this.todos.splice(this.todos.findIndex(todo => todo.id === id),1);
    },
    filterTodo(state){
      this.filter = state;
    },
    clearAllCompleted(){
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  },
  computed:{
    filteredTodos(){
      if(this.filter === 'all'){
        return this.todos
      }
      const completed = this.filter === 'completed';
      return this.todos.filter(todo => completed === todo.completed)
    }
  }
}
</script>

