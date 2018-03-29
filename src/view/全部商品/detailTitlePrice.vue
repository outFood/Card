<template>
  <div id="titlePrice" v-if="detail_info" :style="{marginTop:detail_info.style.margintop+'px',marginBottom:detail_info.style.marginbottom+'px',background:detail_info.style.background,color:detail_info.style.textcolor}">
    <div class="titleShare">
      <h5 :style="{color:detail_info.style.titlecolor}">{{result.goods.title}}</h5>
      <div v-if="detail_info.params.hideshare==0"><img src="/static/img/share.png" alt="" @click="share('')">{{detail_info.params.share}}</div>
    </div>
    <h6 :style="{color:detail_info.style.subtitlecolor}">{{result.goods.isdiscount_title}}</h6>
    <p class="price" :style="{color:detail_info.style.pricecolor}">￥{{result.goods.marketprice}} <span :style="{color:detail_info.style.textcolor}">￥{{result.goods.productprice}}</span></p>
    <div class="countDown" :style="{borderColor:detail_info.style.timecolor}" v-if="result.goods.istime==1">
     <span :style="{background:detail_info.style.timecolor}"> 距离限时购结束</span>
      <yd-countdown time="2018/08/08 08:08:08">
        <span><i :style="{color:detail_info.style.timetextcolor}" class="time">{%d}</i>天</span>
        <span><i :style="{color:detail_info.style.timetextcolor}" class="time">{%h}</i>时</span>
        <span><i :style="{color:detail_info.style.timetextcolor}" class="time">{%m}</i>分</span>
        <span><i :style="{color:detail_info.style.timetextcolor}" class="time">{%s}</i>秒</span>
      </yd-countdown>
    </div>
    <div class="other">
      <span>快递:{{result.goods.dispatchprice}}</span>
      <span>销量:{{result.goods.sales}}</span>
      <span>{{result.goods.province}} {{result.goods.city}}</span>
    </div>

  </div>
</template>
<script>
  import NativeShare from '../../../static/NativeShare'
  export default {
    data(){
      return {

      }
    },
    computed:{
      detail_info(){
        for(var key in this.$store.state.commodityDetailData.diypage.items){
          if(this.$store.state.commodityDetailData.diypage.items[key].id=="detail_info"){
            return this.$store.state.commodityDetailData.diypage.items[key]
          }
        }
      },
      result(){
        return this.$store.state.commodityDetailData.result
      },
      time(){
        var endTime=this.$store.state.commodityDetailData.result.goods.statustimeend
        var startTime=this.$store.state.commodityDetailData.result.goods.statustimestart
        var reduceResult=endTime-startTime
        return new Date(reduceResult).toLocaleString()
      },
    },
    methods:{
      share(command){
        var nativeShare = new NativeShare()
        var shareData = {
          title:this.result.goods.isdiscount_title,
          desc: '',
          // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
          link: 'http://cscs.ylhhyk.com/card/index.html',
          icon:this.result.goods.thumb,
          // 不要过于依赖以下两个回调，很多浏览器是不支持的
          success: function() {
            alert('success')
          },
          fail: function() {
            alert('fail')
          }
        }
        nativeShare.setShareData(shareData)
        try {
          nativeShare.call(command)
        } catch (err) {
          // 如果不支持，你可以在这里做降级处理
          alert('对不起，你的浏览器不支持此分享功能,请尝试浏览器自带分享功能')
        }
      }
    },
  }
</script>
<style>
  #titlePrice{
    padding: 5px;
    background:#fff;
    text-align:left
  }
  #titlePrice .titleShare{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  #titlePrice .titleShare h5{
    flex: 0 0 80%;
  }
  #titlePrice .titleShare div{
    flex:0 0 20%;
    border-left:1px solid #aaa;
    color:#aaa;
    height:1.5625rem;
    text-align: center;
  }
  #titlePrice .titleShare div img{
    width:0.8rem;
    height:0.8rem;
    display: block;
    margin:0 auto;
    margin-bottom: 5px;
  }
  #titlePrice h6{
    font-weight: normal;
  }
  #titlePrice .price{
    font-weight: bold;
    font-size:0.625rem;
    margin-top:0.3125rem;
  }
  #titlePrice .price span{
    font-weight: normal;
    font-size:0.4375rem;
    text-decoration: line-through;
  }
  #titlePrice .countDown{
    margin: 0.3125rem 0;
    border:1px solid #eee;
    width:85%;
    height:0.9375rem;
    line-height:0.9375rem;
    color:#000;
  }
  #titlePrice .countDown .time{
    font-size:0.5rem;
    font-weight: bold;
  }
  #titlePrice .countDown>span:nth-child(1){
    display: inline-block;
    color:#fff;
    height:100%;
    padding:0 5px;
  }
  #titlePrice .other span{
    display: inline-block;
    width: 25%;
    font-size:0.375rem
  }
  #titlePrice .other span:last-child{
    width:45%
  }
  #titlePrice .other span:nth-child(2){
    text-align: center;
  }
  #titlePrice .other span:nth-child(3){
    text-align: right;
  }
</style>
