<template>
  <div id="wodeRegist">
    <yd-navbar title="注册" bgcolor="#0175dc" color="#fff" fontsize="18px" height="40px">
      <router-link to="#" slot="left">
        <div @click="back()"><yd-navbar-back-icon color="#fff"></yd-navbar-back-icon></div>
      </router-link>
    </yd-navbar>
    <form action="#">
      <div class="form-group">
        账号：
        <input type="number" required  v-model="phone" maxlength="11" pattern="^1[3458]{1}[0-9]{9}$" placeholder="请输入手机号">
      </div>
      <!--<div class="form-group">-->
        <!--验证码：-->
        <!--<input  type="number" v-model="code" id="ma" maxlength="6" placeholder="请输入验证码">-->
        <!--<div>-->
          <!--<yd-sendcode-->
            <!--v-model="start3"-->
            <!--storage-key="dashuaibi"-->
            <!--@click.native="start3 = true"-->
            <!--size="large"-->
            <!--type="danger"-->
            <!--style="width:120px;"></yd-sendcode>-->
        <!--</div>-->
      <!--</div>-->
      <div class="form-group">
        密码：
        <input type="password" required  v-model="pwd"   pattern="^(\w){6,20}$"  placeholder="请输入密码">
      </div>
      <div class="form-group">
        确认密码：
        <input type="password" required  v-model="surePwd" pattern="^(\w){6,20}$"  placeholder="请输入密码">
      </div>
    </form>
    <div click="checked"><yd-checkbox v-model="agree" size="15">我已阅读并同意《用户协议》</yd-checkbox></div>
    <yd-button size="large" type="primary" class="registBtn" @click.native="toRegist">注册</yd-button>
    <div class="bottom">
      已有账号？<router-link to="/vipIndex/login">立即登录</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code:'',
        start3: false,
        phone:'13867104693',
        pwd: '123456',
        surePwd: '123456',
        agree:false,
      }
    },
    methods:{
      toRegist(){
        this.$store.dispatch({
          type:'regist',
          params:{
            mobile:this.phone,
            password:this.pwd,
            confirm_password:this.surePwd
          }
        })
      }
    }
  }
</script>

<style scoped>
  body{
    background: #fff;
  }
  #wodeRegist{
    width:100%;
    height:100%;
    background: #fff;
    padding-bottom:50px;
  }
  /***************************/
  .form-group{
    display:flex;
    align-items: center;
    font-size:16px;
    padding:20px;
    border-bottom: 1px solid #eee;
  }
  .form-group input{
    border:none
  }
  .form-group button{
    font-size:12px;
    padding:8px;
    border:none;
    border-radius: 3px;
    background: rgb(1, 117, 220);
    color:#fff;
  }
  #ma{
    width:40%;
  }
  /***************************/
  .yd-checkbox-icon{
    vertical-align:top !important;
  }
  .registBtn{
    width:90%;
    margin:0 auto;
    margin-top:30px;
    height:1.25rem;
    font-size:0.5rem;
  }
  .bottom{
    font-size: 16px;
    margin-top:50px;
    width: 100%;
    text-align: center;
  }
  .bottom a{
    color:#feae19;
  }
</style>
