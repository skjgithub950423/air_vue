<template>
    <el-row type="flex" class="row-bg" justify="space-around">
        <el-col span="2">
        <el-checkbox v-model="todo.completed"></el-checkbox>
        </el-col>
        <el-col span="14">
        <label>{{todo.content}}</label>
        </el-col>
        <el-col span="2">
        <el-button type="primary" icon="el-icon-delete" @click="deleteTodo"></el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
  props:{
      todo:{
          type:Object,
          required:true
      }
  },
  methods:{
      deleteTodo () {
          this.$emit('del',this.todo.id)
      },
  }
}
</script>

<style scoped>
    .row-bg{
        height: 50px;
        background: gainsboro;
        line-height: 50px;
        margin-top: 5px;
        box-sizing: border-box;
    }
</style>

