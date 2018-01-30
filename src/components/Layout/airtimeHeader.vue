<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
       <el-menu-item v-for="(labelName,index) in labelNames" key="labelName.key" :index="String(index)" @click.native="toggleLeftTree">{{labelName.name}}</el-menu-item>
  </el-menu>
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
              key:'sysOpt'},
              {name:'我的物流',
              key:'myLogistics'}
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

