<template>
  <div id="wodeRegist">
    <headers title="注册会员"></headers>
    <form action="#">
      <div class="form-group">
        账号：
        <input type="text" required  v-model="phone" maxlength="11" placeholder="请输入手机号">
      </div>
      <div class="form-group">
        验证码：
        <input  type="number" v-model="code" id="ma" maxlength="5" placeholder="五位数字">
        <div>
          <yd-sendcode
            v-model="start3"
            storage-key="dashuaibi"
            @click.native="sendCode"
            size="large"
            type="danger"
            style="width:120px;" :class="{skybg:start3}"></yd-sendcode>
        </div>
      </div>
      <div class="form-group">
        密码：
        <input type="password" required  maxlength="10" v-model="pwd"   pattern="^(\w){6,20}$"  placeholder="6-10位数字、字母">
      </div>
      <div class="form-group">
        确认密码：
        <input type="password" required  maxlength="10" v-model="surePwd" pattern="^(\w){6,10}$"  placeholder="6-10位数字、字母">
      </div>
      <div class="xieyi">
        <img src="/static/img/checked.png" alt="" @click="isReaded=false" v-if="isReaded"><img src="/static/img/no_checked.png" @click="isReaded=true" alt="" v-else>我已经阅读并了解了 <i @click="show1=true">【注册协议】</i>
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
  import axios from 'axios'
  import headers from '@/components/headers'
  export default {
    components:{headers},
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
    methods:{
      sendCode(){
        var me=this,regMobile =/^[1][3,4,5,7,8][0-9]{9}$/;
        if(this.phone==''){
          this.tipMsg='请填写手机号!'
          this.openAlert()
        }else if(this.phone.length!=11){
          this.tipMsg='请填写11位手机号!'
          this.openAlert()
        }else if(!regMobile.test(this.phone)){
          this.tipMsg='手机号格式输入有误!'
          this.openAlert()
        }else{
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=account.index.get_verifycode', {params:{t:config.t,
            mobile:this.phone,temp:'sms_reg'}}).then(function (res) {
              if(res.data.status==1){
                me.start3 = true;
              }else{
                me.$dialog.toast({
                  mes:res.data.result.msg,
                  timeout: 500
                });
              }
          }).catch(function (err) {console.log(err)})
        }
      },
      openAlert() {
        this.$dialog.alert({
          mes:this.tipMsg
        });
      },
      toRegist(){
        var regMobile =/^[1][3,4,5,7,8][0-9]{9}$/;
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
        }else if(this.code==''){
          this.tipMsg='请输入验证码!'
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
              verifycode:this.code,
              pwd:this.pwd,
//              confirm_password:this.surePwd,
              t:config.t,
              ispost:1
            }
          })
          setTimeout(()=>{
            console.log(this.registStatus)
            if(this.registStatus.status==1){
              router.push({path:'/vipIndex/login'})
            }
            this.$dialog.toast({
              mes:this.registStatus.result.msg,
              timeout: 1500,
            });
          },500)
        }
      },
    }
  }
</script>

<style scoped>
  .skybg{
    background: silver !important;
  }
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
    padding:20px 10px;
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
    width:53%;
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
