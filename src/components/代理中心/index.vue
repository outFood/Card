<template>
  <yd-layout :title="agentData.set.texts.center" link="/shopIndex" id="agent">
    <div class='header'>
      <img :src="agentData.member.avatar">
      <div class="headInfo">
        <h6>{{agentData.member.nickname}}</h6>
        <p>{{agentData.member.aagenttype==1?agentData.bonusall.aagents['0'].aagentprovinces['0']:(agentData.member.aagenttype==2?agentData.bonusall.aagents['0'].aagentprovinces['0']+agentData.bonusall.aagents['0'].aagentcitys:(agentData.member.aagenttype==3?agentData.bonusall.aagents['0'].aagentprovinces+agentData.bonusall.aagents['0'].aagentcitys+agentData.bonusall.aagents['0'].aagentareas:agentData.bonusall.aagents['0'].aagentprovinces+agentData.bonusall.aagents['0'].aagentcitys+agentData.bonusall.aagents['0'].aagenttownships))}}</p>
      </div>
      <div class="grade">【创业达人 {{agentData.member.aagenttype==1?'省级':(agentData.member.aagenttype==2?'市级':(agentData.member.aagenttype==3?'区级':'乡镇'))}}】</div>
    </div>
    <div class="mid">
      <div class="left" @click="resAgentLine">
        <img src="/static/img/people_white.png" alt="">
        <p>我的下线</p>
        {{agentData.bonus.total}}人
      </div>
      <div class="middle">
        本月预计分红
        <h5>{{agentData.bonus_wait}}</h5>
        区级：0.00 乡镇：0.00
      </div>
      <div class="right">
        <img src="/static/img/Commission.png" alt="">
        <p>可提现佣金</p>
        0元
        <router-link to="#" class="withdrawals" @click.native="resAgentPrice">佣金提现</router-link>
      </div>
    </div>
    <div class="bot">
      <!--省级-->
      <div v-if="agentData.member.aagenttype==1">
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_total}}：<span>{{agentData.bonus.total}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>省级</p>
            <span>{{agentData.bonus.total1}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.total2}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.total3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_lock}}：<span>{{agentData.bonus.lock}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>省级</p>
            <span>{{agentData.bonus.lock1}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.lock2}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.lock3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_pay}}：<span>{{agentData.bonus.ok}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>省级</p>
            <span>{{agentData.bonus.ok1}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.ok2}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.ok3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
      </div>
      <!--区级-->
      <div v-if="agentData.member.aagenttype==3">
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_total}}：<span>{{agentData.bonus.total}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.total3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_lock}}：<span>{{agentData.bonus.lock}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.lock3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_pay}}：<span>{{agentData.bonus.ok}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.ok3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
      </div>
      <!--市级-->
      <div v-if="agentData.member.aagenttype==2">
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_total}}：<span>{{agentData.bonus.total}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main2">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.total2}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.total3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_lock}}：<span>{{agentData.bonus.lock}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main2">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.lock2}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.lock3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_pay}}：<span>{{agentData.bonus.ok}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main2">
          <div>
            <img src="/static/img/money.png" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.ok2}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.ok3}}</span>
          </div>
          <div>
            <img src="/static/img/money.png" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
      </div>
      <!--乡镇-->
      <div v-if="agentData.member.aagenttype==4">
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_total}}：<span>{{agentData.bonus.total}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main3">
          <div>
            <img src="/static/img/agentPosition.png" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_lock}}：<span>{{agentData.bonus.lock}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main3">
          <div>
            <img src="/static/img/agentPosition.png" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" class="head">
          <div>{{agentData.set.texts.bonus_pay}}：<span>{{agentData.bonus.ok}}</span></div>
          <img src="/static/img/more.png" alt="">
        </router-link>
        <div class="main main3">
          <div>
            <img src="/static/img/agentPosition.png" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
      </div>
    </div>
  </yd-layout>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        len:2
      }
    },
    computed:{
      agentData(){
        return this.$store.state.agentData
      },
      prefix(){//轮播图片前缀
        return this.$store.state.prefix
      },
    },
    methods:{
      resAgentPrice(){
        this.$store.dispatch({
          type:'resAgentPrice',
          params:{
            t:config.t,
            openid:localStorage.getItem('openid'),
            uniacid:config.uniacid
          }
        })
      },
      resAgentLine(){
        this.$store.dispatch({
          type:'resAgentLine',
          params:{
            openid:localStorage.getItem('openid'),
            mid:localStorage.getItem('userid'),
            uniacid:config.uniacid,
            t:config.t
          }
        })
      }
    }
  }
</script>
<style>
  #agent .header,.mid{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:0.46875rem 0.3125rem;
    background: #fff;
  }
  #agent .header img{
    width:1.25rem;
    height:1.25rem;
    border-radius: 50%;
  }
  #agent .header .headInfo{
    flex:0 0 47%;
    text-align: left;
    margin-left:0.3125rem;
    font-size:0.375rem;
  }
  #agent .header .headInfo h6{
    font-weight: bold;
    font-size:0.4375rem;
  }
  #agent .header .grade{
  color:#ff5552;
  font-size:0.375rem;
 }
  #agent .mid{
    background: #ff9a00;
    color:#fff;
    justify-content: space-between;
    font-size:0.375rem;
  }
  #agent .mid img{
    width:0.78125rem;
    height:0.78125rem;
  }
  #agent .mid .middle h5{
    font-size:0.9375rem;
  }
  #agent .mid .withdrawals{
    padding:0 5px;
    border:1px solid #fff;
    border-radius:0.3125rem;
    display: block;
    color:#fff;
  }
  #agent .bot{
    margin:0.3125rem 0;
  }
  #agent .bot .head{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0.3125rem;
    text-align: left;
    border-bottom: 1px solid #eee;
    background: #fff;
  }
  #agent .bot .head:not(:first-child){
    /*border-top:1px solid #eee;*/
    margin-top: 10px;
  }
  #agent .bot .head img{
    width:0.625rem;
    height:0.625rem;
    vertical-align: middle;
  }
  #agent .bot .main{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: #fff;
  }
  #agent .bot .main img{
    width:0.9375rem;
    height:0.9375rem;
    vertical-align: middle;
  }
  #agent .bot .main p{
    margin:5px 0;
  }
  #agent .bot span{
    color:#ff9a00
  }
  #agent .bot .main1>div{
    flex:0 0 50%;
    padding:0.3125rem;
  }
  #agent .bot .main1>div:nth-child(2n-1){
    border-right:1px solid #eee;
    border-bottom:1px solid #eee;
  }
  #agent .bot .main1>div:nth-child(2n){
    border-bottom:1px solid #eee;
  }
  #agent .bot .main2>div{
    flex:0 0 33%;
    padding:0.3125rem;
  }
  #agent .bot .main2>div:not(:nth-child(3n)){
    border-right:1px solid #eee;
    border-bottom:1px solid #eee;
  }
  #agent .bot .main2>div:nth-child(3n){
    border-bottom:1px solid #eee
  }
  #agent .bot .main3>div{
    flex:0 0 100%;
    padding:0.3125rem 0;
  }
</style>
