<template>
  <div id="titlePrice" :style="{marginTop:detail_info.style.margintop+'px',marginBottom:detail_info.style.marginbottom+'px',background:detail_info.style.background,color:detail_info.style.textcolor}">
    <div class="titleShare">
      <h5 :style="{color:detail_info.style.titlecolor}">{{result.goods.title}}</h5>
      <div v-if="detail_info.params.hideshare==0"><img src="/static/img/share.png" alt="">{{detail_info.params.share}}</div>
    </div>
    <h6 :style="{color:detail_info.style.subtitlecolor}">{{result.goods.isdiscount_title}}</h6>
    <p class="price" :style="{color:detail_info.style.pricecolor}">￥{{result.goods.minprice}} <span :style="{color:detail_info.style.textcolor}">￥{{result.goods.marketprice}}</span></p>
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
      <span>快递:10.00</span>
      <span>销量:36542</span>
      <span>{{result.goods.province}} {{result.goods.city}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    computed:{
      detail_info(){
        return this.$store.state.commodityDetailData.diypage.items.M1512539750735
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
    mounted(){
    }
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
    height:50px;
    text-align: center;
  }
  #titlePrice .titleShare div img{
    width:25px;
    height:25px;
    display: block;
    margin:0 auto;
    margin-bottom: 5px;
  }
  #titlePrice h6{
    font-weight: normal;
  }
  #titlePrice .price{
    font-weight: bold;
    font-size:20px;
    margin-top: 10px;
  }
  #titlePrice .price span{
    font-weight: normal;
    font-size:14px;
    text-decoration: line-through;
  }
  #titlePrice .countDown{
    margin: 10px 0;
    border:1px solid #eee;
    width:85%;
    height:30px;
    line-height: 30px;
    color:#000;
  }
  #titlePrice .countDown .time{
    font-size:16px;
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
    font-size:12px
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
