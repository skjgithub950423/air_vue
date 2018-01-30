<template>
  <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" router>
            <template v-for="item in leftTreeItems">
                <template v-if="item.subs">
                    <template v-if="item.subs.subends">
                        <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                            <template>
                                <el-submenu>
                                    <template slot="title"><i :class="item.icon"></i>{{ item.subs.substitle }}</template>
                                    <el-menu-item v-for="(subItem,i) in item.subs.subends" :key="i" :index="subItem.index">{{ subItem.title }}
                                    </el-menu-item>
                                </el-submenu>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                        </el-submenu>
                    </template>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
   computed:{
     leftTreeItems(){
       return this.$store.state.leftTree;
     }
   },
   mounted () {
      // 刷新时以当前路由做为tab加入tabs
      if (this.$route.path !== '/' && this.$route.path.indexOf('userInfo') == -1) {
        this.$store.commit('add_tabs', {route: '/', name: 'Todo列表'});
        this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
        this.$store.commit('set_active_index', this.$route.path);
      } else {
        this.$store.commit('add_tabs', {route: '/', name: 'Todo列表'});
        this.$store.commit('set_active_index', '/');
        this.$router.push('/');
      }

    },
}
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    .sidebar > ul > li{
      text-align: left;
    }
</style>
