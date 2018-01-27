<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
       <el-menu-item v-for="(labelName,index) in labelNames" key="labelName.key" :index="index" @click.native="toggleLeftTree">{{labelName.name}}</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data(){
      return {
          labelNames:[
              {name:'我的...',
              key:'my'},
              {name:'系统设置',
              key:'systemOption'},
              {name:'我的物流',
              key:'myLogistics'}
          ]
      }
  },
  methods:{
      handleSelect(){
      },
      toggleLeftTree(e){
          let key = this.labelNames.filter(labelName => labelName.name === e.target.innerHTML)[0].key;
          this.$emit('toggleLeftTree',key);
      }
  },
   computed: {
        count () {
            return this.$store.state.leftTree;
        }
    }
}
</script>

