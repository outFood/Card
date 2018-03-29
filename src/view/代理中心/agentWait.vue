<template>
  <div id="agentWait">
    <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
    <form action="#">
      <div class="item">
        <span>姓名</span>
        <div><i style="visibility: hidden">*</i><input :placeholder="agentPage.member.nickname" disabled class="disabled"></div>
      </div>
      <div class="item">
        <span>手机号</span>
        <div><i style="visibility: hidden">*</i><input :placeholder="agentPage.member.mobile" disabled class="disabled"></div>
      </div>
      <div class="item">
        <span>代理区域</span>
        <div><i style="visibility: hidden">*</i><input :placeholder="agentPage.member.aagentprovinces+agentPage.member.aagentcitys" disabled class="disabled"></div>
      </div>
      <div class="item">
        <span>状态1</span>
        <div><i>*</i><input disabled class="disabled" :placeholder="agentPage.member.isaagent==1&&agentPage.member.aagentstatus==1?'审核通过':'审核中'"></div>
      </div>
      <div class="item">
        <span>代理费用</span>
        <div><i>*</i><input disabled class="disabled"></div>
      </div>
      <yd-button size="large" type="danger">去支付</yd-button>
    </form>
  </div>
</template>
<style>
  #agentWait img{
    width:100%;
    height:230px;
  }
  #agentWait form{
    text-align: left;
    padding:0.3125rem;
    background: #fff;
  }
  .disabled::-webkit-input-placeholder {
    color: #000;
    font-size:0.45rem;
  }
  #agentWait form i{
    color:red;
  }
  #agentWait form .item{
    padding:0.3125rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:0.3125rem 0;
    border-bottom: 1px solid #eee;
  }
  #agentWait form .item span{
    flex:0 0 25% ;
  }
  #agentWait form .item input{
    border: none;
    padding-left:0.3125rem;
  }
</style>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return {

      }
    },
    computed:{
      agentPage(){
        return this.$store.state.agentPage
      },
    },
    beforeCreate(){//请求注册页数据和注册用同一个接口，用于把某些用户信息默认上去，除了微信号、邀请人id代理类型、上传资质等可以手动填写，其他的不可修改
      this.$store.dispatch({
        type:'registAgent',
        params:{
          openid:localStorage.getItem('openid'),
          mid:localStorage.getItem('userid'),
          uniacid:config.uniacid,
          i:config.i,
          t:config.t
        },
        qufen:'no',//用于区分是加载请求还是注册请求，0表示加载请求，yes表示注册请求
      })
    }
  }
</script>
