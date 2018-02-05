<template>
  <div class="sidebar">
        <div class="sideHeader">
            <h1>这里是Logo</h1>
        </div>       
        <el-menu class="el-menu-vertical-demo" :default-active="defaultActiveIndex" router>
            <template v-for="item in leftTreeItems">
                <template v-if="item.subs">
                    <template v-if="item.subs.subends">
                        <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i><span slot="title">{{ item.title }}</span></template>
                            <template>
                                <el-submenu :index="item.subs.index">
                                    <template slot="title"><i :class="item.icon"></i>{{ item.subs.substitle }}</template>
                                    <el-menu-item v-for="(subItem,i) in item.subs.subends" :key="i" :index="subItem.index">{{ subItem.title }}
                                    </el-menu-item>
                                </el-submenu>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i><span slot="title">{{ item.title }}</span></template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                        </el-submenu>
                    </template>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
   data(){
       return{
           isCollapse:false,
       }
   },
   computed:{
     leftTreeItems(){
       return this.$store.state.leftTree;
     },
     defaultActiveIndex(){
         return this.$store.state.activeIndex;
     }
   },
   mounted () {
      // 刷新时以当前路由做为tab加入tabs
      if (this.$route.path !== '/home/hello') {
        if(!this.$store.state.options.filter(option => option.name == 'Home').length){
            this.$store.commit('add_tabs', {route: '/home/hello', name: 'Home'});
        }
        this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
        this.$store.commit('set_active_index', this.$route.path);
      } else {
        if(!this.$store.state.options.filter(option => option.name == 'Home').length){
            this.$store.commit('add_tabs', {route: '/home/hello', name: 'Home'});
        }
        this.$store.commit('set_active_index', '/home/hello');
        this.$router.push('/home/hello');
      }

    },
    methods:{
        toggleMenu(){
            this.isCollapse = !this.isCollapse;
        }
    }
}
</script>

<style scoped>
    .sidebar{
        display: block;
        left: 0;
        top: 70px;
        bottom:0;
        height: 100%;
    }
    .sidebar > ul {
        height:100%;
    }
    .sidebar > ul > li{
      text-align: left;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 800px;
    }
    .sideHeader{
        height: 60px;
    }
    .sidebar h1{
        line-height: 60px;
    }
</style>
