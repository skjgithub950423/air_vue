<template>
  <el-table 
  :data="tableData" 
  :stripe="defaultConfig.isStripe"
  :border="defaultConfig.isBorder"
  :height="defaultConfig.tableHeight"
  :columData="columData"
  @row-click="handleSelect"
  >
        <el-table-column
      :type="defaultConfig.isType"
      width="55"
      align="center"
      :fixed="defaultConfig.isFixed">
    </el-table-column>
        <el-table-column v-for="col in columData" :prop="col.key" :label="col.name" :sortable="col.isSortable" :fixed="col.isFixed" :width="col.width">
        </el-table-column>
  </el-table>
</template>

<script>
export default {
  name:'AirTable',
  props:{
      defaultConfig:{
          required:true,
          type:Object
      },
      tableData:{
          type:Object
      },
      columData:{
          required:true,
          type:Object
      },
      rowClick:{
          type:Object
      }
  },
  methods:{
      handleSelect(fn){
          this.rowClick(fn)
      },
  }
}
</script>

