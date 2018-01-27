<template>
  <el-tabs type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in tabArr"
    :key="item"
    :label="item"
  >
  </el-tab-pane>
  
</el-tabs>
</template>

<script>
export default {
  props:{
      tabArr:{
          required:true
      }
  },
  methods:{
      removeTab(){}
  }
}
</script>

