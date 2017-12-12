<template>
  <div id="someSort">
    <header>
      <div class="search"><img src="/static/img/back_black.png" alt=""><yd-search></yd-search><span @click="allSort_h=!allSort_h"><img src="/static/img/allSort_h.png" v-if="allSort_h"><img src="/static/img/allSort_v.png" v-else></span></div>
      <!--tab-->
      <div class="tab">
        <div @click="screen('all')" v-bind:class="{cur:curTab==1}">综合</div>
        <div @click="screen('sail')" v-bind:class="{cur:curTab==2}">销量</div>
        <div @click="screen('price')" v-bind:class="{cur:curTab==3}">价格 <span class="top" v-bind:class="{curtop:curtop}"></span><span class="bottom" v-bind:class="{curbottom:curbottom}"></span></div>
        <div @click="screen('screen')"><yd-button @click.native="show4 = true" v-bind:class="{cur:curTab==4}">筛选 <img src="/static/img/shaixuan.png" alt="" v-if="curTab!=4"><img src="/static/img/shaixuan_red.png" alt="" v-else></yd-button></div>
      </div>
    </header>
    <div class="content">
      <!--商品列表-->
      <div class="con-h" v-if="allSort_h">
        <div>
          <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
          <div>
            <p>普通会员</p>
            <span class="price">￥18</span><span class="goPay"  @click="show2 = true">购买</span>
          </div>
        </div>
        <div>
          <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
          <div>
            <p>普通会员</p>
            <span class="price">￥18</span><span class="goPay"  @click="show2 = true">购买</span>
          </div>
        </div>
      </div>
      <div class="con-v"v-else>
        <div>
          <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
          <div>
            <p>普通会员</p>
            <span class="price">￥18</span><span class="goPay"  @click="show2 = true">购买</span>
          </div>
        </div>
        <div>
          <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
          <div>
            <p>普通会员</p>
            <span class="price">￥18</span><span class="goPay"  @click="show2 = true">购买</span>
          </div>
        </div>
      </div>
      <!--筛选弹窗-->
      <yd-popup v-model="show4" position="right" width="60%" class="shaixuan_pop">
        <div class="head">筛选</div>
        <div class="tabNav">
          <span>推荐商品</span>
          <span>推荐商品</span>
          <span>推荐商品</span>
          <span>推荐商品</span>
          <span>推荐商品</span>
          <span>推荐商品</span>
        </div>
        <p>选择分类</p>
        <yd-scrolltab>
          <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
            空调
          </yd-scrolltab-panel>

          <yd-scrolltab-panel label="冰箱" icon="demo-icons-category2" active>
            冰箱
          </yd-scrolltab-panel>

          <yd-scrolltab-panel label="洗衣机" icon="demo-icons-category3">
            洗衣机
          </yd-scrolltab-panel>

          <!-- ... -->
        </yd-scrolltab>
        <div class="footer">
          <span @click="show4=false">取消筛选</span>
          <span>确认</span>
        </div>
      </yd-popup>
      <!--购买弹框-->
      <yd-popup v-model="show2" position="bottom" height="60%" class="pay_pop">
        <div class="top">
          <div><img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt=""></div>
          <span class="price">￥19.9</span>
          <div class="close" @click="show2=false"><span>x</span></div>
        </div>
        <div class="middle">
          <span>数量</span>
          <yd-spinner unit="1" min='1' v-model="curGoodsNum"></yd-spinner>
        </div>
        <div class="bottom">
          <div>加入购物车</div>
          <div>立即购买</div>
        </div>
      </yd-popup>
    </div>

    <footers></footers>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        curtop:false,
        curbottom:false,
        clickNum:0,
        show4: false,
        show2: false,
        curTab:1,
        curGoodsNum:0,
        allSort_h:true
      }
    },
    methods:{
      screen(parameter){
        if(parameter=='all'){
          console.log('all')
          this.curTab=1
          this.curbottom=false
          this.curtop=false
        }else if(parameter=='sail'){
          console.log('sail')
          this.curTab=2
          this.curbottom=false
          this.curtop=false
        }else if(parameter=='price'){
          this.curTab=3
          this.clickNum++;
          if(this.clickNum%2==0){
            this.curbottom=true
            this.curtop=false
          }else{
            this.curtop=true
            this.curbottom=false
          }
        }else{
          this.curTab=4
          this.curbottom=false
          this.curtop=false
          console.log('screen')
        }
      },
    }
  }
</script>
<style>
  <!---->
  #someSort header{
    width:100%;
    position: fixed;
    top:0
  }
  #someSort header .search{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom:1px solid #eee;
  }
  #someSort header .search>div{
    flex:0 0 82%
  }
  #someSort header .search form{
    background: #eee;
  }
  #someSort header .search img{
    width:0.78125rem;
    height:0.78125rem;
  }
  #someSort header .tab{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #fff;
    padding:0.3125rem 0;
  }
  #someSort header .tab>div{
    flex: 0 0 25%;
  }
  #someSort header .tab>div:not(:last-child){
    border-right:1px solid #eee
  }
  #someSort header .tab>div img{
    width:0.4375rem;
    height:0.4375rem;
    vertical-align: middle;
  }
  #someSort header .tab>div:nth-child(3){
    position: relative;
  }
  #someSort header .tab>div .top{
    display:inline-block;
    width:0;height:0;
    border:5px solid transparent;
    border-bottom:5px solid #aaa;
    position: absolute;
    top:0;
  }
  #someSort header .tab>div .bottom{
    display:inline-block;
    width:0;height:0;
    border:5px solid transparent;
    border-top:5px solid #aaa;
    position: absolute;
    top:0.375rem;
  }
  #someSort header .tab>div .yd-btn-primary{
    background: #fff;
    color:#000
  }
  .curtop{
    border-bottom:5px solid red !important;
  }
  .curbottom{
    border-top:5px solid red !important;
  }
  .cur{
    color:red !important;
  }
  #someSort .content .con-h{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding:0.3125rem
  }
  #someSort .content .con-h>div{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 39%;
    flex:0 0 48%;
    background: #fff;
    margin-bottom: 0.3125rem;
    padding: 0.3125rem;
    font-size:0.375rem;
  }
  #someSort .content .con-h>div img{
    width:100%;
  }
  #someSort .content .con-h>div div{
    text-align: left;
  }
  #someSort .content .con-h>div:nth-child(2n){
    margin-left:4%;
  }
  #someSort .content .con-h p{
    margin-bottom: 0.3125rem;
  }
  #someSort .content .con-h span{
    color:#ff5552
  }
  #someSort .content .con-h>div div .price{
    font-size:0.4375rem;
  }
  #someSort .content .con-h .goPay{
    float: right;
  }
  #someSort .content .con-v{
    margin-top: 0.3125rem;
  }
  #someSort .content .con-v>div{
    padding:0.3125rem;
    margin-bottom:0.3125rem;
    background: #fff;
  }
  #someSort .content .con-v>div img{
    width:35%;
    height:2.41rem;
  }
  #someSort .content .con-v>div div{
    float: right;
    width:65%;
    text-align: left;
    padding-left: 0.3125rem;
  }
  #someSort .content .con-v>div div p{
    margin-bottom: 0.625rem;
  }
  #someSort .content .con-v>div div .price{
    color:#ff5076;
    font-size:0.5rem;
  }
  #someSort .content .con-v>div div .goPay{
    float: right;
    color:#ff5076
  }
  /*筛选弹窗*/
  #someSort .content .shaixuan_pop .yd-popup{
    width:90% !important;
  }
  #someSort .content .shaixuan_pop{
    color: #a3a3a3;;
  }
  #someSort .content .shaixuan_pop .head{
    background: #f9f9f9;
    color:#a3a3a3;
    text-align: left;
    padding:5px 0.3125rem;
  }
  #someSort .content .shaixuan_pop .tabNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #someSort .content .shaixuan_pop .tabNav span{
    display: inline-block;
    flex: 0 0 31%;
    padding:3px 6px;
    border:1px solid #969696;
    margin-left:1.5%;
    margin-top:0.3125rem;
    border-radius: 3px;
  }
  #someSort .content .shaixuan_pop p{
    border-top:1px solid #ebebeb;
    border-bottom:1px solid #ebebeb;
    margin-top: 0.3125rem;
    padding: 5px 0;
  }
  #someSort .content .shaixuan_pop .yd-scrolltab{
    top:4.5rem;
    bottom:1.25rem;
  }
  #someSort .content .shaixuan_pop strong{
    display: none;
  }
  #someSort .content .shaixuan_pop .yd-scrolltab-nav{
    width:45%;
  }
  #someSort .content .shaixuan_pop .yd-scrolltab-content{
    padding: 0;
  }
  #someSort .content .shaixuan_pop .footer{
    position: fixed !important;
    bottom: 0 !important;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    width:100%;
    border-top:1px solid #ebebeb;
    padding: 0.3125rem;
  }
  #someSort .content .shaixuan_pop .footer span:nth-child(2){
    color:red
  }
  /*购买弹窗*/
  #someSort .pay_pop{

  }
  #someSort .pay_pop .top{
    border-bottom:1px solid #eee;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0.3125rem;
  }
  #someSort .pay_pop .top div{
    flex: 0 0 25%;
  }
  #someSort .pay_pop .top img{
    width:1.875rem;
    height:1.875rem;
    border:3px solid rgba(0,0,0,0.2);
  }
  #someSort .pay_pop .top .price{
    color:red;
    flex: 0 0 65%;
    text-align: left;
  }
  #someSort .pay_pop .top .close{
    flex:0 0 10%;
  }
  #someSort .pay_pop .top .close span{
    display: inline-block;
    width:0.625rem;
    height:0.625rem;
    line-height:0.53125rem;
    border-radius: 50%;
    border:1px solid #aaa;
    color:#aaa
  }
  #someSort .pay_pop .middle{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:0.3125rem;
  }
  #someSort .pay_pop .bottom{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width:100%;
    position: fixed;
    bottom:0
  }
  #someSort .pay_pop .bottom div{
    flex: 0 0 50%;
    color:#fff;
    padding: 0.3125rem 0;
  }
  #someSort .pay_pop .bottom div:nth-child(1){
    background: #ff9503;
  }
  #someSort .pay_pop .bottom div:nth-child(2){
    background: #fd5554;
  }
</style>
