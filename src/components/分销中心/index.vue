<template>
  <yd-layout title="分销中心" link="/shopIndex" id="distribut">
    <div class="head">
      <yd-flexbox class="line1">
        <div class="left"><img :src="fenxiao_headData.member.avatar"></div>
        <yd-flexbox-item>
          <h6>{{fenxiao_headData.member.nickname}}</h6>
          <i>[{{!fenxiao_headData.level ? (!fenxiao_headData.thisset.levelname ? '普通等级' : fenxiao_headData.thisset.levelname) : fenxiao_headData.level.levelname}}]</i>
          <span>{{fenxiao_headData.thisset.texts.up}}: {{!fenxiao_headData.up ? '总店' : fenxiao_headData.up.nickname}}</span>
          <span>本人ID:{{fenxiao_headData.member.id}}</span>
        </yd-flexbox-item>
        <router-link to="/distributIndex/xiaodian" class="right"><img src="/static/img/set.png"></router-link>
      </yd-flexbox>
      <yd-flexbox class="line2">
        <yd-flexbox-item>
          <span>{{fenxiao_headData.thisset.texts.commission_pay}}({{fenxiao_headData.thisset.texts.yuan}})</span>
          <h5>{{fenxiao_headData.member.commission_pay}}</h5>
        </yd-flexbox-item>
        <yd-flexbox-item>
          <span>{{fenxiao_headData.thisset.texts.commission_total}}({{fenxiao_headData.thisset.texts.yuan}})</span>
          <h5>{{fenxiao_headData.member.commission_total}}</h5>
        </yd-flexbox-item>
      </yd-flexbox>
      <yd-flexbox class="line3">
        <yd-flexbox-item>
          <span>{{fenxiao_headData.thisset.texts.commission_ok}}({{fenxiao_headData.thisset.texts.yuan}})</span>
          <h5>{{fenxiao_headData.member.commission_ok}}</h5>
        </yd-flexbox-item>
        <yd-flexbox-item>
          <span class="btn">佣金提现</span>
        </yd-flexbox-item>
      </yd-flexbox>
    </div>
    <yd-flexbox class="body">
      <yd-flexbox-item v-for="(item,key) in fenxiao_bodyData" :key="key">
        <router-link :to="item.path">
          <img :src="item.imgSrc">
          <p>{{item.text}}</p>
          <i>{{item.tipnum}}</i> {{item.tiptext}}
        </router-link>
      </yd-flexbox-item>
    </yd-flexbox>
    <footers></footers>
  </yd-layout>
</template>
<script>
  import router from '@/router'
  export default {
    data(){
      return{
        paths:[
          {
            path:'/distributIndex/price',
            imgSrc:'/static/img/money.png'
          },
          {
            path:'/distributIndex/yongDetail',
            imgSrc:'/static/img/sort_blue.png'
          },
          {
            path:'/distributIndex/tixianDetail',
            imgSrc:'/static/img/mingxi.png'
          },
          {
            path:'/distributIndex/xiaxian',
            imgSrc:'/static/img/peples.png'
          },
          {
            path:'/distributIndex/tuiguang',
            imgSrc:'/static/img/ma.png'
          },
          {
            path:'/distributIndex/xiaodian',
            imgSrc:'/static/img/shop.png'
          }
//          '/distributIndex/price',
//          '/distributIndex/yongDetail',
//          '/distributIndex/tixianDetail',
//          '/distributIndex/xiaxian',
//          '/distributIndex/tuiguang',
//          '/distributIndex/xiaodian',
//          '/distributIndex/daili',
//          '/distributIndex/zixuan'
        ],
        imgs:[
          '/static/img/money.png'
        ]
      }
    },
    computed:{
      fenxiao_headData(){
        return this.$store.state.fenxiao_headData.result
      },
      fenxiao_bodyData(){
        var arr=[]
        //得到数据并格式化为数组
        for(var key in this.$store.state.fenxiao_bodyData.module){
          if(this.$store.state.fenxiao_bodyData.module[key].id=='blockgroup'){
            arr=Array.from(this.$store.state.fenxiao_bodyData.module[key].data)
          }
        }
        //将每一项对应的路径和图片添加到数组项里
        for(var i=0;i<arr.length;i++){
          for(var j=0;j<this.paths.length;j++){
            if(i==j){
              arr[i].path=this.paths[j].path
              arr[i].imgSrc=this.paths[j].imgSrc
            }
          }
        }
        return arr
      },
    },
    beforeCreate(){
//      this.$store.dispatch({
//        type:'resFenxiao'
//      })
    },
  }
</script>
<style>
  #distribut .head{
    background: #FE5455;
    color:#fff;
    padding: 0.3125rem;
    font-size:0.375rem;
  }
  #distribut .head .line1 .left img{
    width:1.5625rem;
    height:1.5625rem;
    border-radius: 50%;
    border:2px solid #fff;
  }
  #distribut .head .line1 .right img{
    width:0.625rem;
    height:0.625rem;
  }
  #distribut .head .line1 .yd-flexbox-item-center{
    text-align: left;
    padding-left:0.3125rem;
  }
  #distribut .head .line1 .yd-flexbox-item-center i{
    color:gold;
  }
  #distribut .head .line1 .yd-flexbox-item-center span{
    display: block;
    font-size:0.3125rem;
  }
  #distribut .head .line2{
    margin:0.625rem 0;
  }
  #distribut .head .line2 h5{
    font-size:0.5625rem;
  }
  #distribut .head .line3{
    font-size:0.375rem;
  }
  #distribut .head .line3 .btn{
    border: 1px solid #eee;
    padding:2px 5px;
    border-radius:0.3125rem;
  }
  #distribut .body{
    font-size:0.375rem;
    background: #fff;
  }
  #distribut .body img{
    width:0.9375rem;
    height:0.9375rem;
  }
  #distribut .body i{
    color:orange;
  }
  .yd-flexbox{
    flex-wrap: wrap !important;
  }
  #distribut .body .yd-flexbox-item{
    height:2.6875rem;
  }
  #distribut .body .yd-flexbox-item:not(:nth-child(3n)){
    flex:0 0 33%;
    padding:0.3125rem;
    border-right:1px solid #eee;
    border-bottom:1px solid #eee
  }
  #distribut .body .yd-flexbox-item:nth-child(3n){
    flex:0 0 33%;
    padding:0.3125rem;
    border-bottom: 1px solid #eee;
  }
</style>
