<template>
<el-row>
  <el-button type="primary" @click="addUser">添加</el-button>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="300">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="300">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-row>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        this.$store.commit('get_user_info',row);
        this.$router.push('/home/table/tableget')
      },
      addUser(){
        this.$router.push('tableedit');
      }
    },

    data() {
      return {
        tableData: []
      }
    },
    computed:{
    },
    beforeMount(){
      var self = this;
      this.$axios.get('api/tableData')
      .then(function(res){
          self.tableData = res.data;
      })
    }
  }
</script>