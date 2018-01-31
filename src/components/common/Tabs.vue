<template>
  <div class="template-tabs">
          <el-tabs
            v-model="activeIndex"
            type="card"
            closable
            @tab-click="tabClick"
            v-if="options.length"
            @tab-remove="tabRemove">
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in options"
              :label="item.name"
              :name="item.route">
            </el-tab-pane>
          </el-tabs>
        </div>
</template>

<script>
export default {
     methods: {
    // tab切换时，动态的切换路由
    tabClick (tab) {
      let path = this.activeIndex;
      // 用户详情页的时候，对应了二级路由，需要拼接添加第二级路由
      if (this.activeIndex === '/userInfo') {
          path = this.activeIndex + '/' + this.$store.state.userInfo.name;
      }
      this.$router.push({path: path});
    },
    tabRemove (targetName) {
      // 首页不可删除
      if(targetName == '/') {
        return;
      }
      this.$store.commit('delete_tabs', targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.$store.commit('set_active_index', this.options[this.options.length-1].route);
          this.$router.push({path: this.activeIndex});
        } else {
          this.$router.push({path: '/'});
        }
      }
    }
  },
  computed:{
      options(){
        return this.$store.state.options;
      },
      activeIndex: {
      get () {
        return this.$store.state.activeIndex;
      },
      set (val) {
        this.$store.commit('set_active_index', val);
      }
    }
  },
  watch: {
    '$route'(to,from) {
      if(to.name == from.name){
        return;
      }
      let flag = false;
      for (let option of this.options ) {
        if (option.name === to.name) {
          flag = true;
          /* if(option.index !== to.path){
            break
          } */
          this.$store.commit('set_active_index',to.path);
          break
        }
      }
      if (!flag) {
        this.$store.commit('add_tabs', {route:to.path, name: to.name});
        this.$store.commit('set_active_index',to.path);
      }
    }
  }
}
</script>

<style scoped>
    .el-tabs--border-card>.el-tabs__content{
        padding: 0;
    }
</style>




