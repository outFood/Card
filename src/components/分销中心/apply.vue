<template>
  <div id="regist">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <form action="#">
      <p>欢迎加入 <i>E卡平台</i>，请填写申请信息</p>
      <div class="item">
        <span>邀请人</span>
        <div><i>总店</i>（请核对）</div>
      </div>
      <div class="item">
        <span>邀请人ID</span>
        <div><input placeholder="请填写邀请人ID" v-model="agentid"></div>
      </div>
      <div class="item">
        <span>姓名</span>
        <div><i>*</i><input placeholder="请填写真实姓名，用于结算" v-model="realname"></div>
      </div>
      <div class="item">
        <span>手机号</span>
        <div><i>*</i><input placeholder="请填写手机号，方便联系" v-model="mobile"></div>
      </div>
      <!--<div class="item getCode">-->
        <!--<span>验证码</span>-->
        <!--<div><i>*</i><input placeholder="5位验证码"></div>-->
        <!--<yd-sendcode-->
          <!--v-model="start2"-->
          <!--@click.native="start2 = true"-->
          <!--second="15"-->
          <!--init-str="获取验证码"-->
          <!--run-str="{%s}秒"-->
          <!--reset-str="获取验证码"-->
        <!--&gt;</yd-sendcode>-->
      <!--</div>-->
      <div class="item">
        <span>微信号</span>
        <div><input placeholder="请填写微信号" v-model="weixin"></div>
      </div>
      <div class="item">
        <yd-checkbox-group v-model="readed" size="30" class="xieyi">
          <yd-checkbox val=""></yd-checkbox><span style="font-size: 24px;">我已经阅读并了解了</span><u @click="show1=true">【分销商申请协议】</u>
        </yd-checkbox-group>
      </div>
      <yd-button size="large" type="danger" @click.native="toApply">申请成为会员</yd-button>
      <yd-popup v-model="show1" position="center" width="90%">
        <p class="xieyiCon">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam inventore iste labore optio perferendis sunt totam vitae! Accusamus consequuntur cum dolore minus neque, officia quaerat quibusdam sint totam ut. Voluptatibus.</p>
        <p style="text-align: center;">
          <yd-button @click.native="show1 = false">我已阅读</yd-button>
        </p>
      </yd-popup>
      <div class="zhu">
        <p>*注:密码用于登录其他端（App端和web端）</p>
        <span>绑定手机后就会有积分返还</span>
      </div>
    </form>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        readed: ['3'],
        start2:false,
        show1: false,
        //注册信息
        isReaded:false,
        agentid:'639312',
        realname:'吴巧红',
        mobile:'13867104693',
        weixin:'1741432444',
        tipMsg:''
      }
    },
    watch: {
      readed: {
        handler: function (val, oldVal) {
          if(val.length==1){
            this.isReaded=false
          }else{
            this.isReaded=true
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
      toApply(){
        var regMobile = /^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8}$/;
        if(this.realname==''){
          this.tipMsg='请填写姓名!'
          this.openAlert()
        }else if(this.mobile==''){
          this.tipMsg='请填写手机号!'
          this.openAlert()
        }else if(this.mobile.length!=11){
          this.tipMsg='请填写11位手机号!'
          this.openAlert()
        }else if(!regMobile.test(this.mobile)){
          this.tipMsg='手机号格式输入有误!'
          this.openAlert()
        }else if(this.isReaded==false){
          this.tipMsg='请阅读分销商申请协议!'
          this.openAlert()
        }else{
          console.log(localStorage.getItem('openid'))
          this.$store.dispatch({
            type:'resApply',
            params:{
              agentid:this.agentid,
              realname:this.realname,
              mobile:this.mobile,
              weixin:this.weixin,
              openid:localStorage.getItem('openid'),
              cl:'1',
              t:config.t
            }
          })
        }
      }
    }
  }
</script>
<style>
  #regist form{
    text-align: left;
    padding: 10px;
    background: #fff;
  }
  #regist form p{
    padding: 10px 0;
  }
  #regist form i{
    color:red;
  }
  #regist form .item{
    padding: 10px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:10px 0;
    border-bottom: 1px solid #eee;
  }
  #regist form .item span{
    flex:0 0 25% ;
  }
  #regist form .item>div{
    flex:0 0 70%;
  }
  #regist form .item input{
    border: none;
    padding-left: 5px;
    width:95%;
  }
  *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:12px;
  }
  #regist form .getCode>div{
    flex:0 0 50%
  }
  #regist form .getCode button{
    flex:0 0 20%;
    height:25px;
  }
  #regist form .item img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #regist form .yd-checkbox-icon {
    width: 15px !important;
    height: 15px !important;
  }
  #regist form .yd-checkbox-icon i{
    width:7px !important;
    height:9px !important;
  }
  #regist form .xieyi{
    flex: 0 0 100% !important;
  }
  #regist form .xieyi .yd-checkbox {
    display: inline;
  }
  #regist form .xieyi  span{
    font-size:14px !important;
  }
  #regist form .xieyi u{
    color:#2e70a2;
    text-decoration: none;
    font-weight: bold;
  }
  #regist form .zhu{
    color:#3493e7
  }
  #regist .xieyiCon{
    padding:10px !important;
    text-indent: 1rem
  }
</style>
