<template>
    <el-container>
        <el-header><Header @toggleLeftTree="toggleLeftTree"></Header></el-header>
        <el-container>
            <el-aside width="200px"><Sidebar :leftTreeData="leftTreeData" @addTabs="addTabs"></Sidebar></el-aside>
            <el-main><Content :tabArr="tabArr"></Content></el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from '../components/Layout/airtimeHeader'
import Sidebar from '../components/Layout/airtimeSidebar'
import Content from '../components/Layout/airtimeContent'

let tabArr_init = new Set();

export default {
  data(){
      return{
          leftTreeData:'',
          tabArr:'',
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
      addTabs(tabVal){
          debugger
          tabArr_init.add(tabVal);
          this.tabArr = Array.from(tabArr_init);
      }
  }
}
</script>
