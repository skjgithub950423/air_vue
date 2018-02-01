<template>
<div class="login-wrap">
    <div class="gauss"></div>
    <div id="particles"></div>
    <el-form label-width="100px">
        <el-form-item label="账号">
            <el-input class="formInput"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input class="formInput"></el-input>
        </el-form-item>
        <el-row type="flex" justify="space-around">
            <el-button type="primary">登录</el-button>
            <el-button type="info">取消</el-button>
        </el-row>
    </el-form>
</div>
  
</template>
<script>
export default {
  mounted(){
    particlesJS.load('particles','../../static/particles.json');
  }
}
</script>
<style scoped>
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



