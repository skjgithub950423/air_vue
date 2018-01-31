<template>
<div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <template v-for="labelName in labelNameArr">
             <el-form-item :label="labelName.name">
                <el-input v-model="userData[labelName.key]"></el-input>       
             </el-form-item>
        </template>
    </el-form>
</div>
</template>

<script>
export default {
  data(){
      return{
          labelNameArr:[{name:'日期',
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
                        }]
      }
  },
  computed:{
      userData(){
          return this.$store.state.userInfo;
      }
  }
}
</script>

