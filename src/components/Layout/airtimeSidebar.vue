<template>
  <div class="sidebar">
        <el-menu class="el-menu-vertical-demo" router>
            <template>
                <el-menu-item>
                    <i class="el-icon-edit" @click.native="toggleMenu"/>
                    <span slot="title">我的...</span>
                </el-menu-item>
            </template>
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
           isCollapse:false
       }
   },
   computed:{
     leftTreeItems(){
        debugger 
       return this.$store.state.leftTree;
     }
   },
   mounted () {
      // 刷新时以当前路由做为tab加入tabs
      if (this.$route.path !== '/') {
        this.$store.commit('add_tabs', {route: '/', name: 'Home'});
        this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
        this.$store.commit('set_active_index', this.$route.path);
      } else {
        this.$store.commit('add_tabs', {route: '/', name: 'Home'});
        this.$store.commit('set_active_index', '/');
        this.$router.push('/');
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
</style>
