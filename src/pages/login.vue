<template>
<div class="login-wrap">
    <div class="gauss"></div>
    <div id="particles"></div>
    <el-form label-width="100px" :rules="rules" :model="loginForm" status-icon class="loginForm" ref="loginForm">
        <el-form-item label="账号" prop="acount">
            <el-input class="formInput" v-model="loginForm.acount"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input class="formInput" v-model="loginForm.pass"></el-input>
        </el-form-item>
        <el-row type="flex" justify="space-around">
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button type="info">取消</el-button>
        </el-row>
    </el-form>
</div>
  
</template>
<script>
export default {
  data() {
      var validateAcount = (rule,value,callback) => {
          if(value == ''){
              callback(new Error('账号不能为空'))
          }
          callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        callback();
      };
      return {
        loginForm: {
          acount: '',
          pass: '',
        },
        rules: {
          acount: [
            { validator: validateAcount, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/home/hello')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  mounted(){
    particlesJS.load('particles','../../static/particles.json');
  }
}
</script>
<style>
.loginForm .el-form-item__error{
    left:45px;
}
#particles{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
}
.gauss {
    position: absolute;
    width: 100%;    
    height: 100%;
    background-image:url(../../static/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: blur(2px); 
    -moz-filter: blur(2px);
    -ms-filter: blur(2px);    
    filter: blur(2px);
}
.el-form{
    position: relative;
    width: 400px;
    margin: auto;
    background-color:rgba(255,255,255,0.2);
    padding:30px 10px 30px 10px;
    border-radius: 5px;
}
.login-wrap{
    display: flex;
    position: absolute;
    height:100%;
    width:100%;
}
.login-wrap .formInput{
    width: 214px;
}


</style>



