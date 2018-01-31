<template>
<div id="mainContent">
  <transition name="move" mode="out-in"><router-view></router-view></transition>
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

