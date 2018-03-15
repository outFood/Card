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
      <div class="xieyi">
        <img src="/static/img/checked.png" alt="" @click="isReaded=false" v-if="isReaded"><img src="/static/img/no_checked.png"  @click="isReaded=true" alt="" v-else>我已经阅读并了解了 <i  @click="show1=true">【注册协议】</i>
      </div>
    </form>
    <yd-popup v-model="show1" position="center" width="90%">
      <p class="xieyiCon">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam inventore iste labore optio perferendis sunt totam vitae! Accusamus consequuntur cum dolore minus neque, officia quaerat quibusdam sint totam ut. Voluptatibus.</p>
      <p style="text-align: center;">
        <yd-button @click.native="show1 = false">我已阅读</yd-button>
      </p>
    </yd-popup>
    <yd-button size="large" type="primary" class="registBtn" @click.native="toRegist">注册</yd-button>
    <div class="bottom">
      已有账号？<router-link to="/vipIndex/login">立即登录</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    data() {
      return {
        isReaded:false,
        code:'',
        start3: false,
        phone:'',
        pwd: '',
        surePwd: '',
        show1: false,
      }
    },
    computed:{
      registStatus(){
        return this.$store.state.registStatus
      }
    },
    watch:{
      registStatus:{
        handler: function (val, oldVal) {
          if(val=='注册成功'){
            this.$dialog.toast({
              mes:val,
              timeout: 1000,
              callback(){
                router.push({path:'/vipIndex/login'})
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
      openAlert() {
      this.$dialog.alert({
        mes:this.tipMsg
      });
    },
      toRegist(){
        var regMobile = /^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8}$/;
        var regPwd=/^[a-zA-Z0-9]{6,10}$/
        if(this.phone==''){
          this.tipMsg='请填写手机号!'
          this.openAlert()
        }else if(this.phone.length!=11){
          this.tipMsg='请填写11位手机号!'
          this.openAlert()
        }else if(!regMobile.test(this.phone)){
          this.tipMsg='手机号格式输入有误!'
          this.openAlert()
        }else if(this.pwd==''){
          this.tipMsg='请输入密码!'
          this.openAlert()
        }else if(!regPwd.test(this.pwd)){
          this.tipMsg='密码必须由6到10位的数字或字母组成!'
          this.openAlert()
        }else if(this.pwd!=this.surePwd&&this.surePwd!=''){
          this.tipMsg='两次密码输入不一致!'
          this.openAlert()
        }else if(this.surePwd==''){
          this.tipMsg='请输入确认密码!'
          this.openAlert()
        }else if(this.isReaded==false){
          this.tipMsg='请阅读注册协议!'
          this.openAlert()
        }else{
          this.$store.dispatch({
            type:'regist',
            params:{
              mobile:this.phone,
              password:this.pwd,
              confirm_password:this.surePwd,
              t:config.t
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  #wodeRegist{
    position: fixed;
    top:0;right:0;bottom: 0;left:0;
    background: #fff;
  }
  /***************************/
  #wodeRegist form{
    margin-bottom: 15px;
  }
  .form-group{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
  #wodeRegist .xieyi{
    margin-top:20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #wodeRegist .xieyi img{
    width:20px;
    height:20px;
    margin-right:5px;
  }
  #wodeRegist .xieyi i{
    color:#2e70a2;
  }
</style>
