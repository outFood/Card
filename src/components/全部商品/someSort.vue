<template>
  <div id="someSort">
    <header>
      <img src="/static/img/back_black.png" alt=""><yd-search></yd-search><img src="/static/img/allSort.png">
    </header>
    <div class="content">
      <div class="tab">
        <div @click="screen('all')">综合</div>
        <div @click="screen('sail')">销量</div>
        <div @click="screen('price')">价格 <span class="top" v-bind:class="{curtop:curtop}"></span><span class="bottom" v-bind:class="{curbottom:curbottom}"></span></div>
        <div @click="screen('screen')"><yd-button @click.native="show4 = true">筛选 <img src="/static/img/shaixuan.png" alt=""></yd-button></div>
      </div>
      <!--弹窗-->
      <yd-popup v-model="show4" position="right" width="60%" class="pop">
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
      <div class="con">
        <div>
          <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
          <div>
            <p>普通会员</p>
            <span>￥18</span><span class="goPay">购买</span>
          </div>
        </div>
        <div>
          <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
          <div>
            <p>普通会员</p>
            <span>￥18</span><span class="goPay">购买</span>
          </div>
        </div>
        <div>
          <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
          <div>
            <p>普通会员</p>
            <span>￥18</span><span class="goPay">购买</span>
          </div>
        </div>
        <div>
          <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
          <div>
            <p>普通会员</p>
            <span>￥18</span><span class="goPay">购买</span>
          </div>
        </div>
      </div>
    </div>
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
      }
    },
    methods:{
      screen(parameter){
        if(parameter=='all'){
          console.log('all')
        }else if(parameter=='sail'){
          console.log('sail')
        }else if(parameter=='price'){
          this.clickNum++;
          if(this.clickNum%2==0){
            this.curbottom=true
            this.curtop=false
          }else{
            this.curtop=true
            this.curbottom=false
          }
        }else{
          console.log('screen')
        }
      }
    }
  }
</script>
<style>
  #someSort header{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom:1px solid #eee;
  }
  #someSort header>div{
    flex:0 0 82%
  }
  #someSort header form{
    background: #eee;
  }
  #someSort header img{
    width:25px;
    height:25px;
  }
  #someSort .content .tab{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #fff;
    padding:10px 0;
  }
  #someSort .content .tab>div{
    flex: 0 0 25%;
  }
  #someSort .content .tab>div:not(:last-child){
    border-right:1px solid #eee
  }
  #someSort .content .tab>div img{
    width:14px;
    height:14px;
    vertical-align: middle;
  }
  #someSort .content .tab>div:nth-child(3){
    position: relative;
  }
  #someSort .content .tab>div .top{
    display:inline-block;
    width:0;height:0;
    border:5px solid transparent;
    border-bottom:5px solid #aaa;
    position: absolute;
    top:0;
  }
  #someSort .content .tab>div .bottom{
    display:inline-block;
    width:0;height:0;
    border:5px solid transparent;
    border-top:5px solid #aaa;
    position: absolute;
    top:12px;
  }
  #someSort .content .tab>div .yd-btn-primary{
    background: #fff;
    color:#000
  }
  .curtop{
    border-bottom:5px solid red !important;
  }
  .curbottom{
    border-top:5px solid red !important;
  }
  #someSort .con{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding:10px
  }
  #someSort .con>div{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 39%;
    flex:0 0 48%;
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
  }
  #someSort .con>div img{
    width:100%;
  }
  #someSort .con>div div{
    text-align: left;
  }
  #someSort .con>div:nth-child(2n){
    margin-left:4%;
  }
  #someSort .con p{
    margin-bottom: 10px;
  }
  #someSort .con span{
    color:#ff5552
  }
  #someSort .con .goPay{
    float: right;
  }
  /*弹窗*/
  .yd-popup{
    width:90% !important;
  }
  #someSort .content .pop{
    color: #a3a3a3;;
  }
  #someSort .content .pop .head{
    background: #f9f9f9;
    color:#a3a3a3;
    text-align: left;
    padding:5px 10px;
  }
  #someSort .content .pop .tabNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #someSort .content .pop .tabNav span{
    display: inline-block;
    flex: 0 0 31%;
    padding:3px 6px;
    border:1px solid #969696;
    margin-left:1.5%;
    margin-top:10px;
    border-radius: 3px;
  }
  #someSort .content .pop p{
    border-top:1px solid #ebebeb;
    border-bottom:1px solid #ebebeb;
    margin-top: 10px;
    padding: 5px 0;
  }
  #someSort .content .pop .yd-scrolltab{
    top:145px;
    bottom: 40px;
  }
  #someSort .content .pop strong{
    display: none;
  }
  #someSort .content .pop .yd-scrolltab-nav{
    width:45%;
  }
  #someSort .content .pop .yd-scrolltab-content{
    padding: 0;
  }
  #someSort .footer{
    position: fixed !important;
    bottom: 0 !important;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    width:100%;
    border-top:1px solid #ebebeb;
    padding: 10px;
  }
  #someSort .footer span:nth-child(2){
    color:red
  }
</style>
