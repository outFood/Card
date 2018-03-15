<template>
  <div class="login">
    <yd-navbar title="登录" bgcolor="#0175dc" color="#fff" fontsize="18px" height="50px">
      <router-link to="#" slot="left">
        <div @click="back()"><yd-navbar-back-icon color="#fff"></yd-navbar-back-icon></div>
      </router-link>
    </yd-navbar>
    <form action="#">
      <div class="form-group">
        账号：
        <input type="number" required  v-model="phone" pattern="^1[3458]{1}[0-9]{9}$" placeholder="请输入手机号">
      </div>
      <div class="form-group">
        密码：
        <input type="password" required  v-model="pwd" pattern="^(\w){6,20}$"  placeholder="请输入密码">
      </div>
    </form>
    <div class="otherDo">
      <router-link to="/vipIndex/wodeRegist">注册新账号</router-link>
      <router-link to="#">忘记密码?</router-link>
    </div>
    <yd-button size="large" type="primary" class="Btn" @click.native="toLogin">登录</yd-button>
    <router-link to="#"><yd-button size="large" type="primary" class="Btn">手机验证码登录</yd-button></router-link>
    <div class="otherLoginMethod">
      <div class="first">
        <span></span>第三方账号登录<span></span>
      </div>
      <div class="second">
        <img src="/static/img/prod/weixin.png" alt="">
        <img src="/static/img/prod/qq.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../../myConfig'
  import router from '@/router'
  export default {
    data() {
      return {
        phone:'',
        pwd: '',
      }
    },
    computed:{
      loginStatus(){
        return this.$store.state.loginStatus
      }
    },
    watch:{
      loginStatus:{
        handler: function (val, oldVal) {
          console.log(val)
          if(val=='登录成功'){
            this.$dialog.toast({
              mes: '登录成功！',
              timeout: 1000,
              callback(){
                router.push({path:'/vipIndex'})
              }
            });
          }else{
            this.$dialog.toast({
              mes:val,
              timeout: 1500,
            });
          }
        },
        deep: true
      },
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      },
      toLogin(){
        this.$store.dispatch({
          type:'login',
          params:{
            mobile:this.phone,
            password:this.pwd,
            t:config.t
          }
        })
      }
    }
  }
</script>

<style scoped>

  .login {
    position: fixed;
    top:0;right:0;bottom: 0;left:0;
    background: #fff;
  }
  .form-group{
    display:flex;
    align-items: center;
    font-size:0.5rem;
    padding:0.625rem;
    border-bottom: 1px solid #eee;
  }
  .form-group input{
    border:none
  }
  /**************/
  .otherDo{
    margin:0.78125rem;
    display:flex;
    justify-content: space-between;
    font-size:0.4375rem;
    color:#feae19;
  }
  .Btn{
    width:90%;
    height:1.25rem;
    margin:0.625rem auto;
    font-size:0.5rem;
  }
  .otherLoginMethod{
    font-size: 0.4375rem;
    color:#868686;
    padding-bottom:0.9375rem;
  }
  .otherLoginMethod .first{
    margin-bottom: 0.625rem;
  }
  .otherLoginMethod .first span{
    display: inline-block;
    height:7px;
    width:25%;
    border-top:1px solid #d4d4d4;
  }
  .otherLoginMethod .first span:nth-child(1){
    margin-right:0.3125rem;
  }
  .otherLoginMethod .first span:nth-child(2){
    margin-left:0.3125rem;
  }
  .otherLoginMethod .second img{
    width:1.5625rem;
    height:1.5625rem;
  }
  .otherLoginMethod .second img:nth-child(1){
    margin-right:0.625rem;
  }
  .otherLoginMethod .second img:nth-child(2){
    margin-left:0.625rem;
  }
</style>
