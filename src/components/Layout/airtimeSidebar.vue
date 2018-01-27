<template>
    <div>
        <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
        </el-input>
        <el-tree
        class="filter-tree"
        :data="leftTreeData"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        @node-click="addTabs"
        ref="tree2">
        </el-tree>
    </div>
</template>

<script>
export default {
  props: {
    leftTreeData:{
      type:Object,
      required:true
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    addTabs(e){
      this.$emit('addTabs',e.label);
    }
  }
}
</script>
