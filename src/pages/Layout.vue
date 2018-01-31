<template>
    <el-container>
        <el-header><Header @toggleLeftTree="toggleLeftTree"></Header></el-header>
        <el-container>
            <el-aside style="width:auto"><Sidebar :leftTreeData="leftTreeData"></Sidebar></el-aside>
            <el-main><Tab></Tab><Content></Content></el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from '../components/Layout/airtimeHeader'
import Sidebar from '../components/Layout/airtimeSidebar'
import Content from '../components/Layout/airtimeContent'
import Tab from '../components/common/Tabs'


export default {
  data(){
      return{
          leftTreeData:'',
      }
  },
  components: {
    Header,
    Sidebar,
    Content,
    Tab
  },
  methods:{
      toggleLeftTree(key){
          this.leftTreeData = this.$store.state.leftTree[key];
      },
  }
}
</script>

<style>
.sidebar ul.el-menu{
    position: relative;
}
.el-menu--collapse .el-submenu .el-menu {
    position: absolute;
    margin-left: 5px;
    top: 0;
    left: 100%;
    z-index: 10;
    border: 1px solid #e4e7ed;
    border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.el-aside{
    overflow: visible;
}
</style>

