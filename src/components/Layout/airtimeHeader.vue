<template>
<div class="header">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
    <el-menu-item v-for="(labelName,index) in labelNames" key="labelName.key" :index="String(index)" @click.native="toggleLeftTree">{{labelName.name}}</el-menu-item>
  </el-menu>
  <div class="user-info">
    <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
            <img class="user-logo" src="../../../static/img.jpg">
            {{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<script>
export default {
  data(){
      return {
          activeIndex:'0',
          labelNames:[
              {name:'我的...',
              key:'my'},
              {name:'系统设置',
              key:'sysOpt'}
          ]
      }
  },
  methods:{
      toggleLeftTree(e){
          let key = this.labelNames.filter(labelName => labelName.name === e.target.innerText)[0].key;
          this.$store.commit('toggle_left',key);
      }
  }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    font-size: 22px;
    color: #fff;
}
.user-info {
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
}
.user-info .el-dropdown-link{
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
}
.user-info .user-logo{
    line-height: 61px;
    position: absolute;
    left:0;
    top:0;
    width:40px;
    height:40px;
    border-radius: 50%;
}
.el-dropdown-menu__item{
    text-align: center;
}
.el-dropdown{
    height: 100%;
}
</style>


