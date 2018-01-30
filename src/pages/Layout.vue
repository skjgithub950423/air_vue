<template>
    <el-container>
        <el-header><Header @toggleLeftTree="toggleLeftTree"></Header></el-header>
        <el-container>
            <el-aside width="200px"><Sidebar :leftTreeData="leftTreeData"></Sidebar></el-aside>
            <el-main><Content></Content></el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from '../components/Layout/airtimeHeader'
import Sidebar from '../components/Layout/airtimeSidebar'
import Content from '../components/Layout/airtimeContent'


export default {
  data(){
      return{
          leftTreeData:'',
      }
  },
  components: {
    Header,
    Sidebar,
    Content
  },
  methods:{
      toggleLeftTree(key){
          this.leftTreeData = this.$store.state.leftTree[key];
      },
  }
}
</script>
