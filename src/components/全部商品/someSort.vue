<template>
  <div id="someSort">
    <header style="position: fixed;width:100%;top:0;">
      <div class="search"><img src="/static/img/back_black.png" alt="" @click="back()"><yd-search v-model="searchKey"></yd-search><i class="searchBtn" @click="screen(['搜索'])">搜索</i><span @click="allSort_h=!allSort_h"><img src="/static/img/allSort_h.png" v-if="allSort_h"><img src="/static/img/allSort_v.png" v-else></span></div>
      <!--tab-->
      <div class="tab">
        <div @click="screen(['all'])" :class="{cur:curTab==1}">综合</div>
        <div @click="screen(['sail'])" :class="{cur:curTab==2}">销量</div>
        <div @click="screen(['price'])" :class="{cur:curTab==3}">价格 <span class="top" :class="{curtop:curtop}"></span><span class="bottom" :class="{curbottom:curbottom}"></span></div>
        <div><yd-button @click.native="show4 = true;curTab=4" :class="{cur:curTab==4}">筛选 <img src="/static/img/shaixuan.png" alt="" v-if="curTab!=4"><img src="/static/img/shaixuan_red.png" alt="" v-else></yd-button></div>
      </div>
    </header>
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-list theme="1" slot="list">
        <div class="content">
          <!--商品列表-->
          <div class="con-h" v-if="allSort_h">
            <div v-for="(item,key) in commodityListData" :key="key" @click="resCommodityDetailData(item.id)">
              <img :src="item.thumb" alt="">
              <div>
                <p>{{item.title}}</p>
                <span class="price">￥{{item.marketprice}}</span><span class="goPay"  @click="show2 = true">购买</span>
              </div>
            </div>
          </div>
          <div class="con-v"v-else>
            <div v-for="(item,key) in commodityListData" :key="key" @click="resCommodityDetailData(item.id)">
              <img :src="item.thumb" alt="">
              <div class="right">
                <p>{{item.title}}</p>
                <span class="price">￥{{item.marketprice}}</span><span class="goPay"  @click="show2 = true">购买</span>
              </div>
            </div>
          </div>
        </div>
      </yd-list>
      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
      <!-- 加载中提示，不指定，将显示默认加载中图标 -->
      <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
    <!--筛选弹窗-->
    <yd-popup v-model="show4" position="right" width="60%" class="shaixuan_pop">
      <div class="head">筛选</div>
      <div class="tabNav">
        <span v-for="(item,key) in tabNav" :key="key" @click="shaixuan(item)" :class="{cur:shaixuanText==item}">{{item}}</span>
      </div>
      <div class="footer">
        <span @click="show4=false">取消筛选</span>
        <span @click="screen(['确认'])">确认</span>
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
    <footers></footers>
  </div>
</template>
<script>
  import config from '../../myConfig'
  import router from '@/router'
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
        allSort_h:true,
        searchKey:'',//搜索关键字，
        tabNav:['推荐商品','新品上市','热卖商品','促销商品','卖家包邮','限时抢购'],
        shaixuanText:''
      }
    },
    computed:{
      commodityListData(){
        return this.$store.state.commodityListData
      },
      sortid(){
        return this.$store.state.sortid
      },
      someSortPage(){
        return this.$store.state.someSortPage
      },
      newCommodityListData(){
        return this.$store.state.newCommodityListData
      }
    },
    methods:{
      screen(parameter){
        var params={
          order:'',
          t:config.t,
          openid:localStorage.getItem('openid'),
          keywords:'',
          ishot:0,
          isnew:0,
          isdiscount:0,
          istime:0,
          isrecommand:0,
          issendfree:0,
          pagesize:10,
          page:1,
          cate:this.sortid,
          by:'',
          mid:0,
          frommyshop:0,
        }
        if(parameter[0]=='all'){
          this.curTab=1
          this.curbottom=false
          this.curtop=false
          params.order=''
          // ----------------------------综合
          this.$store.dispatch({
            type:'resCommodityListData',
            params:params
          })
        }else if(parameter[0]=='sail'){
          this.curTab=2
          this.curbottom=false
          this.curtop=false
          params.order='sales'
          // ----------------------------销量
          this.$store.dispatch({
            type:'resCommodityListData',
            params:params
          })
          console.log('销量筛选')
        }else if(parameter[0]=='price'){
          this.curTab=3
          this.clickNum++;
          params.order='minprice'
          if(this.clickNum%2==0){
            console.log('第偶数次点击,降序')
            this.curbottom=true
            this.curtop=false
            params.by='desc'
            this.$store.dispatch({
              type:'resCommodityListData',
              params:params
            })
          }else{
            this.curbottom=false
            this.curtop=true
            params.by='asc'
            this.$store.dispatch({
              type:'resCommodityListData',
              params:params
            })
          }
        }else if(parameter[0]=='搜索'&&parameter.length==1){//点击的是搜索
          console.log('关键字搜索')
          this.$store.dispatch({
            type:'resCommodityListData',
            params:{
              t:config.t,
              keywords:this.searchKey,
            }
          })
          this.show4=false;
        }else if(parameter[0]=='确认'){
          this.show4=false
          console.log(this.shaixuanText)
          if(this.shaixuanText=='推荐商品'){
            params.isrecommand=1
          }else if(this.shaixuanText=='新品上市'){
            params.isnew=1
          }else if(this.shaixuanText=='热卖商品'){
            params.ishot=1
          }else if(this.shaixuanText=='促销商品'){
            params.isdiscount=1
          }else if(this.shaixuanText=='卖家包邮'){
            params.issendfree=1
          }else if(this.shaixuanText=='限时抢购'){
            params.istime=1

          }
          this.$store.dispatch({
            type:'resCommodityListData',
            params:params
          })
        }
      },
      shaixuan(item){
        this.shaixuanText=item
      },
      loadList(){
        console.log('滚动加载')
        this.$store.dispatch({
          type:'resCommodityListData',
          params:{
            page:this.someSortPage,
            pagesize:6,
            cate:this.sortid,
            t:config.t,
            openid:localStorage.getItem('openid'),
            order:'',
            keywords:'',
            ishot:0,
            isnew:0,
            isdiscount:0,
            istime:0,
            isrecommand:0,
            issendfree:0,
            by:'',
            mid:0,
            frommyshop:0,
          },
          myText:'滚动加载'
        })
        if (this.newCommodityListData.length < 10) {
          /* 所有数据加载完毕 */
          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          return;
        }
        /* 单次请求数据完毕 */
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
      },
      resCommodityDetailData(id){
        var openid=localStorage.getItem('openid')
        var mid=localStorage.getItem('userid')
        if(openid!=null&&openid!='undefined'&&mid!=null&&mid!='undefined'){
          this.$store.dispatch({
            type:'resCommodityDetailData',
            params:{
              id:id,
              t:config.t,
              i:config.i,
              uniacid:config.uniacid,
              mid:config.mid,
              openid:config.openid,
            }
          })
        }else{
          this.$dialog.confirm({
            title: '提示',
            mes: '请先登录！',
            opts: () => {
              router.push({path: '/vipIndex/login'})
            }
          });
        }
      },
      back:function () {
        this.$router.go(-1)
      },
    }
  }
</script>
<style>
  <!---->
  /*#someSort{*/
  /*margin-bottom: 70px;*/
  /*}*/
  .yd-list-loading{
    height:2.5rem;
    margin-bottom:3rem;
  }
  .yd-list-donetip{
    margin-bottom:2rem;
  }
  #someSort header{
    width:100%;
    position: fixed !important;
    top:0;
    z-index: 100;
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
    flex:0 0 70%
  }
  #someSort header .search .searchBtn{
    display: block;
    background: lightseagreen;
    padding: 3px 5px;
    border-radius: 3px;
    margin-right:0.3125rem;
    color:#fff;
  }
  #someSort header .search form{
    background: #eee;
  }
  #someSort header .search img{
    width:1rem;
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
    padding:0.3125rem;
    margin-top:2.8rem;
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
    height:5rem;
  }
  #someSort .content .con-h>div div{
    text-align: left;
  }
  #someSort .content .con-h>div:nth-child(2n){
    margin-left:4%;
  }
  #someSort .content .con-h p{
    margin-bottom: 0.3125rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    font-size:0.4rem;
    margin-top:3.1rem;
  }
  #someSort .content .con-v>div{
    padding:0.3125rem;
    margin-bottom:0.3125rem;
    background: #fff;
    height:3.6rem
  }
  #someSort .content .con-v>div img{
    width:35%;
    height:3rem;
  }
  #someSort .content .con-v>div .right{
    float: right;
    width:65%;
    text-align: left;
    padding-left: 0.3125rem;
  }
  #someSort .content .con-v>div div p{
    margin-bottom: 0.3125rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
  #someSort .shaixuan_pop .yd-popup{
    width:90% !important;
  }
  #someSort .shaixuan_pop{
    color: #a3a3a3;;
  }
  #someSort .shaixuan_pop .head{
    background: #f9f9f9;
    color:#a3a3a3;
    text-align: left;
    padding:5px 0.3125rem;
  }
  #someSort .shaixuan_pop .tabNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #someSort .shaixuan_pop .tabNav span{
    display: inline-block;
    flex: 0 0 31%;
    padding:3px 6px;
    border:1px solid #969696;
    margin-left:1.5%;
    margin-top:0.3125rem;
    border-radius: 3px;
  }
  #someSort .shaixuan_pop p{
    border-top:1px solid #ebebeb;
    border-bottom:1px solid #ebebeb;
    margin-top: 0.3125rem;
    padding: 5px 0;
  }
  #someSort .shaixuan_pop .yd-scrolltab{
    top:4.5rem;
    bottom:1.25rem;
  }
  #someSort .shaixuan_pop strong{
    display: none;
  }
  #someSort .shaixuan_pop .yd-scrolltab-nav{
    width:45%;
  }
  #someSort .shaixuan_pop .yd-scrolltab-content{
    padding: 0;
  }
  #someSort .shaixuan_pop .footer{
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
  #someSort .shaixuan_pop .footer span:nth-child(2){
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
