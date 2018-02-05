<template>
  <el-form label-width="80px" :model="formData" ref="userForm">
      <template v-for="labelName in labelNameArr">
          <el-form-item :label="labelName.name" :prop="labelName.key">
              <el-input v-model="formData[labelName.key]"></el-input>
          </el-form-item>
      </template>
      <el-button type="primary" @click="submit('userForm')">保存</el-button>
      <el-button type="warning" @click="clearAll('userForm')">清空</el-button>
      <el-button type="success" @click="returnListPage">返回</el-button>
  </el-form>
</template>

<script>
export default {
  data(){
      return{
          labelNameArr:
            [{name:'日期',
                key:'date',
            },
            {name:'姓名',
                key:'name',
            },
            {name:'省份',
                key:'province',
            },
            {name:'市区',
                key:'city',
            },
            {name:'地址',
                key:'address',
            },
            {name:'邮编',
                key:'zip',
            }],
            formData:{
            }
        }
    },
  methods:{
      submit(formName){
          var self = this;
          this.$axios({
              url:'api/tableData',
              method:'post',
              data:self.$qs.stringify(self.formData), 
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          });
          this.$refs[formName].resetFields();
      },
      clearAll(formName){
          this.$refs[formName].resetFields();
      },
      returnListPage(){
          this.$router.push('tablelist');
      }
  }
}
</script>
