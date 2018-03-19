<template>
  <div id="tixian">
    <yd-navbar title="申请体现">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <form action="#">
      <div class="item">
        <span>我的可提现佣金</span>
      </div>
      <div class="item">
        <b style="font-size:20px;">￥{{okTiXian.data.commission_ok}}</b>
      </div>
      <div class="item">
        <span>名称</span>
        <div @click="show1 = true">{{tixianMethod}}</div>
        <img src="/static/img/more.png" alt="">
        <yd-popup v-model="show1" position="center" width="90%">
          <yd-radio-group v-model="tixianMethod">
            <yd-radio val="提现到支付宝" @click.native="show1 = false;alipayMethod=true;bankMethod=false"></yd-radio>
            <yd-radio val="提现到银行卡" @click.native="show1 = false;alipayMethod=false;bankMethod=true"></yd-radio>
          </yd-radio-group>
        </yd-popup>
      </div>
      <div class="item">
        <span>姓名</span>
        <div><input v-model="name"></div>
      </div>
      <div class="item" v-if="alipayMethod">
        <span>支付宝账号</span>
        <div><input v-model="alipay"></div>
      </div>
      <div class="item"  v-if="alipayMethod">
        <span>确认账号</span>
        <div><input v-model="sureAlipay"></div>
      </div>

      <div class="item" v-if="bankMethod">
        <span>选择银行</span>
        <div @click="show2 = true">{{bank}}</div>
        <img src="/static/img/more.png" alt="">
        <yd-popup v-model="show2" position="center" width="90%">
          <yd-radio-group v-model="bank">
            <yd-radio val="中国工商银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="中国建设银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="中国农业银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="中国银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="招商银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="中国民生银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="中国光大银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="中信银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="交通银行" @click.native="show2 = false"></yd-radio>
            <yd-radio val="中国邮政储蓄" @click.native="show2 = false"></yd-radio>
          </yd-radio-group>
        </yd-popup>
      </div>
      <div class="item" v-if="bankMethod">
        <span>银行卡号</span>
        <div><input v-model="card"></div>
      </div>
      <div class="item" v-if="bankMethod">
        <span>确认卡号</span>
        <div><input v-model="sureCard"></div>
      </div>
      <yd-button size="large" type="primary" @click.native="next">下一步</yd-button>
      <yd-accordion>
        <yd-accordion-item title="查看详细信息">
            <p  style="padding: .24rem;">佣金提现扣除提现手续费7%</p>
        </yd-accordion-item>
      </yd-accordion>
    </form>
  </div>
</template>
<script type="text/babel">
  import config from '../../myConfig'
    export default {
        data() {
            return {
                show1: false,
                show2:true,
                tixianMethod: '提现到支付宝',
                alipayMethod:true,
                bankMethod:false,
                name:'',
                alipay:'',
                sureAlipay:'',
                bank:'',
                card:'',
                sureCard:''
            }
        },
      computed:{
        okTiXian(){
          return this.$store.state.okTiXian
        },
        tixianMsg(){
          return this.$store.state.tixianMsg
        }
      },
      mounted(){
         console.log(this.okTiXian)
      },
      beforeCreate(){
        this.$store.dispatch({
            type:'tixian',
            params:{
              mid:config.mid,
              openid:localStorage.getItem('openid'),
              t:config.t,
              i:config.i,
              uniacid:config.uniacid
            }
          })
      },
      methods:{
        back:function () {
          this.$router.go(-1)
        },
        next(){
          if(this.name==''){
            this.$dialog.toast({mes: '请填写姓名！',timeout: 1500,});
          }else if(this.alipayMethod==true&&this.alipay==''){
          this.$dialog.toast({mes: '请填写支付宝账号！',timeout: 1500,});
          }else if(this.alipayMethod==true&&this.sureAlipay==''){
            this.$dialog.toast({mes: '请填写确认账号！',timeout: 1500,});
          }else if(this.bankMethod==true&&this.bank==''){
            this.$dialog.toast({mes: '请选择银行！',timeout: 1500,});
          }else if(this.bankMethod==true&&this.card==''){
            this.$dialog.toast({mes: '请填写银行卡号！',timeout: 1500,});
          }else if(this.bankMethod==true&&this.sureCard==''){
            this.$dialog.toast({mes: '请填写确认卡号！',timeout: 1500,});
          }else if(this.alipayMethod==true&&this.alipay!=this.sureAlipay){
            this.$dialog.toast({mes: '支付宝账号与确认账号不一致！',timeout: 1500,});
          }else if(this.bankMethod==true&&this.card!=this.sureCard){
            this.$dialog.toast({mes: '银行卡号与确认卡号不一致！',timeout: 1500,});
          }else if(this.alipayMethod==true&&this.name!=''&&this.alipay!=''&&this.sureAlipay!=''){
            this.$dialog.confirm({
              title: '提示',
              mes: '确认要提现到支付宝?</br>'+'姓名：'+this.name+'</br>支付宝账号：'+this.alipay,
              opts: () => {
                  this.$store.dispatch({
                    type:'next',
                      params: {
                        t:config.t,
                        openid:localStorage.getItem('openid'),
                        mid:localStorage.getItem('userid'),
                        //0：余额，//1：微信钱包，//2：支付宝，//3银行卡
                        type:2,
                        ispost:1,
                        realname: this.name,
                        alipay: this.alipay,
                        alipay1: this.sureAlipay,
                        // bankname: this.bank,
                        // bankcard: this.card,
                        // bankcard1: this.sureCard
                     },
                  })
                setTimeout(()=>{
                  if(this.tixianMsg!=''){this.$dialog.toast({
                    mes:this.tixianMsg,
                    timeout: 1000,
                  });
                  }
                },500)
              }
            });
          }else if(this.bankMethod==true&&this.name!=''&&this.card!=''&&this.sureCard!=''){
            this.$dialog.confirm({
                title: '提示',
                mes: '确认要提现到银行卡?</br>'+'姓名：'+this.name+'</br>'+this.bank+' 卡号:'+this.card,
                opts: () => {
                    this.$store.dispatch({
                      type:'next',
                        params: {
                          t:config.t,
                          openid:localStorage.getItem('openid'),
                          mid:localStorage.getItem('userid'),
                          ispost:1,
                          type:3,
                          realname: this.name,
                          // alipay: this.alipay,
                          // alipay1: this.sureAlipay,
                          bankname: this.bank,
                          bankcard: this.card,
                          bankcard1: this.sureCard
                       },
                    })
                  setTimeout(()=>{
                    if(this.tixianMsg!=''){this.$dialog.toast({
                      mes:this.tixianMsg,
                      timeout: 500,
                    });
                    console.log(this.tixianMsg)
                    }
                  },1000)
                }
            });
          }
        }
      }
    }
</script>
<style>
  #tixian header {
    height: 1.5rem !important;
    align-items: center;
  }
  #tixian header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #tixian .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #tixian form{
    text-align: left;
    padding: 10px;
    background: #fff;
  }
  *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:12px;
  }
  #tixian form .item{
    padding: 10px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:10px 0;
    border-bottom: 1px solid #eee;
  }
  #tixian form .item span{
    flex:0 0 35% ;
  }
  #tixian form .item input{
    border: none;
    padding-left: 10px;
    flex:0 0 35% ;
  }
  #tixian form .item div{
    flex:0 0 58% ;
  }
  #tixian form .item img{
    width:20px;
    height:20px;
  }
  #tixian form .item .yd-popup-show{
    padding:20px;
  }
  #tixian form .item .yd-radio{
    display:block;
  }
    #tixian form .item .yd-radio:not(:last-child){
      margin-bottom:15px;
    }
</style>
