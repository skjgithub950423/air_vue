<template>
  <el-row type="flex" class="row-bg" justify="space-around">
    <el-col :span="2">
        <span>{{unFinishedTodoLength}} item left</span>
    </el-col>
    <el-col :span="14">
        <el-button v-for="state in states" key="state" @click="filterTodo(state)">{{state}}</el-button>
    </el-col>
    <el-col :span="2">
        <el-button @click="clearAllCompleted">clear completed</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props:{
      todos:{
          type:Array,
          required:true
      }
  },
  data(){
      return {
           states:['all','actived','completed']
      }
  },
  computed:{
      unFinishedTodoLength(){
          return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods:{
      filterTodo(state){
          console.log(state);
          this.$emit('toggle',state)
      },
      clearAllCompleted(){
          this.$emit('clearAllCompleted');
      }
  }
}
</script>

<style scoped>
    .row-bg{
        height:50px;
        line-height: 50px;
        margin-top: 5px;
    }
</style>

