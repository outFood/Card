<template>
  <div id="agent">
    <headers :title="agentData.set.texts.center"></headers>
    <div class='header'>
      <img :src="agentData.member.avatar">
      <div class="headInfo">
        <h6>{{agentData.member.nickname}}</h6>
        <p>{{agentData.member.aagenttype==1?agentData.bonusall.aagents['0'].aagentprovinces['0']:(agentData.member.aagenttype==2?agentData.bonusall.aagents['0'].aagentprovinces['0']+agentData.bonusall.aagents['0'].aagentcitys:(agentData.member.aagenttype==3?agentData.bonusall.aagents['0'].aagentprovinces+agentData.bonusall.aagents['0'].aagentcitys+agentData.bonusall.aagents['0'].aagentareas:agentData.bonusall.aagents['0'].aagentprovinces+agentData.bonusall.aagents['0'].aagentcitys+agentData.bonusall.aagents['0'].aagenttownships))}}</p>
      </div>
      <div class="grade">【创业达人 {{agentData.member.aagenttype==1?'省级':(agentData.member.aagenttype==2?'市级':(agentData.member.aagenttype==3?'区级':'乡镇'))}}】</div>
    </div>
    <div class="agentMid mid">
      <router-link to="/agentIndex/agentLine" class="left">
        <img :src="require('@/assets/people_white.png')" alt="" class="people_white">
        <p>我的下线</p>
        {{agentData.bonus.total}}人
      </router-link>
      <div class="middle">
        <span v-if="agentData.set.paytype==2">本周</span> <span v-else>本月</span>预计分红
        <h5>{{agentData.bonus_wait?agentData.bonus_wait:0.00}}</h5>
        <div v-if="agentData.member.aagenttype==1">
          <p>省级：{{agentData.bonus_wait1?agentData.bonus_wait1:0.00}} 市级：{{agentData.bonus_wait2?agentData.bonus_wait2:0.00}}</p>
          <p>区级：{{agentData.bonus_wait3?agentData.bonus_wait3:0.00}} 乡镇：{{agentData.bonus_wait4?agentData.bonus_wait4:0.00}}</p>
        </div>
        <div v-else-if="agentData.member.aagenttype==2">
          市级：{{agentData.bonus_wait2?agentData.bonus_wait2:0.00}}
          <p>区级：{{agentData.bonus_wait3?agentData.bonus_wait3:0.00}} 乡镇：{{agentData.bonus_wait4?agentData.bonus_wait4:0.00}}</p>
        </div>
        <div v-else-if="agentData.member.aagenttype==3">
          区级：{{agentData.bonus_wait3?agentData.bonus_wait3:0.00}} 乡镇：{{agentData.bonus_wait4?agentData.bonus_wait4:0.00}}
        </div>
        <div v-else>
          乡镇：{{agentData.bonus_wait4?agentData.bonus_wait4:0.00}}
        </div>
      </div>
      <div class="right">
        <img :src="require('@/assets/Commission.png')" alt="">
        <p>可提现佣金</p>
        0元
        <router-link to="#" class="withdrawals" @click.native="resAgentPrice">佣金提现</router-link>
      </div>
    </div>
    <div class="bot">
      <!--省级-->
      <div v-if="agentData.member.aagenttype==1">
        <router-link to="#" class="head" @click.native="resFenHong('累计分红')">
          <div>{{agentData.set.texts.bonus_total}}：<span>{{agentData.bonus.total}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img :src="require('@/assets/province.png')" alt="">
            <p>省级</p>
            <span>{{agentData.bonus.total1}}</span>
          </div>
          <div>
            <img :src="require('@/assets/city.png')" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.total2}}</span>
          </div>
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.total3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="#" class="head" @click.native="resFenHong('待结算分红')">
          <div>{{agentData.set.texts.bonus_lock}}：<span>{{agentData.bonus.lock}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img :src="require('@/assets/province.png')" alt="">
            <p>省级</p>
            <span>{{agentData.bonus.lock1}}</span>
          </div>
          <div>
            <img :src="require('@/assets/city.png')" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.lock2}}</span>
          </div>
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.lock3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="#" class="head" @click.native="resFenHong('已结算分红')">
          <div>{{agentData.set.texts.bonus_pay}}：<span>{{agentData.bonus.ok}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img :src="require('@/assets/province.png')" alt="">
            <p>省级</p>
            <span>{{agentData.bonus.ok1}}</span>
          </div>
          <div>
            <img :src="require('@/assets/city.png')" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.ok2}}</span>
          </div>
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.ok3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
      </div>
      <!--区级-->
      <div v-if="agentData.member.aagenttype==3">
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('累计分红')" class="head">
          <div>{{agentData.set.texts.bonus_total}}：<span>{{agentData.bonus.total}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.total3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('待结算分红')" class="head">
          <div>{{agentData.set.texts.bonus_lock}}：<span>{{agentData.bonus.lock}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.lock3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('已结算分红')" class="head">
          <div>{{agentData.set.texts.bonus_pay}}：<span>{{agentData.bonus.ok}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main1">
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.ok3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇级</p>
            <span>noData</span>
          </div>
        </div>
      </div>
      <!--市级-->
      <div v-if="agentData.member.aagenttype==2">
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('累计分红')" class="head">
          <div>{{agentData.set.texts.bonus_total}}：<span>{{agentData.bonus.total}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main2">
          <div>
            <img :src="require('@/assets/city.png')" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.total2}}</span>
          </div>
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.total3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('待结算分红')" class="head">
          <div>{{agentData.set.texts.bonus_lock}}：<span>{{agentData.bonus.lock}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main2">
          <div>
            <img :src="require('@/assets/city.png')" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.lock2}}</span>
          </div>
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.lock3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('已结算分红')" class="head">
          <div>{{agentData.set.texts.bonus_pay}}：<span>{{agentData.bonus.ok}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main2">
          <div>
            <img :src="require('@/assets/city.png')" alt="">
            <p>市级</p>
            <span>{{agentData.bonus.ok2}}</span>
          </div>
          <div>
            <img :src="require('@/assets/position_c.png')" alt="">
            <p>区级</p>
            <span>{{agentData.bonus.ok3}}</span>
          </div>
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
      </div>
      <!--乡镇-->
      <div v-if="agentData.member.aagenttype==4">
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('累计分红')" class="head">
          <div>{{agentData.set.texts.bonus_total}}：<span>{{agentData.bonus.total}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main3">
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('待结算分红')" class="head">
          <div>{{agentData.set.texts.bonus_lock}}：<span>{{agentData.bonus.lock}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main3">
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
        <router-link to="/agentIndex/agentDetail" @click.native="resFenHong('已结算分红')" class="head">
          <div>{{agentData.set.texts.bonus_pay}}：<span>{{agentData.bonus.ok}}</span></div>
          <img :src="require('@/assets/more.png')" alt="">
        </router-link>
        <div class="main main3">
          <div>
            <img :src="require('@/assets/town.png')" alt="">
            <p>乡镇</p>
            <span>noData</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../../myConfig'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return{
        len:2
      }
    },
    computed:{
      agentData(){
        return this.$store.state.agentData
      },
    },
    methods:{
      resAgentPrice(){
        this.$store.dispatch({
          type:'resAgentPrice',
          params:{
            t:config.t,
            uniacid:config.uniacid,
            i:config.i,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid'),
          }
        })
      },
      resFenHong(curText){
        this.$router.push({
          path: '/agentIndex/agentDetail',
          query: {
            status:curText=='累计分红'?'':(curText=='待结算分红'?2:1)
          }
        })
      },
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resAgent'
      })
    }
  }
</script>
<style>
  #agent header {
    height: 1.5rem !important;
    align-items: center;
  }
  #agent header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #agent .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #agent .header,.agentMid{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:0.46875rem 0.3125rem;
    background: #fff;
  }
  #agent .agentMid{
    background:orange;
  }
  #agent .header img{
    width:1.5rem;
    height:1.5rem;
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
    font-size:0.5rem;
  }
  #agent .header .grade{
  color:#ff5552;
  font-size:0.45rem;
 }
  #agent .mid{
    background: #ff9a00;
    color:#fff;
    justify-content: space-between;
    font-size:0.45rem;
  }
  #agent .mid .left{
    color:#fff
  }
  #agent .mid img{
    width:0.78125rem;
    height:0.78125rem;
  }
  #agent .mid .people_white{
    width:1rem;
    height:1rem;
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
    margin-top: 0.3125rem;
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
