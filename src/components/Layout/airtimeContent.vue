<template>
<div id="mainContent">
  <Tab></Tab>
  <router-view></router-view>
</div>
</template>

<script>
import Tab from '../common/Tabs'
export default {
  components:{
    Tab
  }
}
</script>

