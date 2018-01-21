<template>
  <yd-layout title="我的足迹" link="/vipIndex" id="zuji">
    <div v-if="list.length==0" class="noData"><span></span> 没有数据 <span></span></div>
    <div v-else>
      <div class="item" v-for="(item,key) in list" :key="key">
        <img :src="item.thumb">
        <div class="right">
          <h6>{{item.title}}</h6>
          <span>￥{{item.marketprice}}</span><i>￥{{item.productprice}}</i>
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

      }
    },
    computed:{
      list(){
        return this.$store.state.zuJiData.list
      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resZuji',
        params:{
          page:1,
          mid:localStorage.getItem('userid'),
          t:config.t
        }
      })
    }
  }
</script>
<style>
  #zuji .noData{
    margin-top:20px;
  }
  #zuji .noData span{
    display: inline-block;
    width:30%;
    height:8px;
    border-top:1px solid #eee;
  }
  #zuji .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    padding:10px;
    margin-bottom:10px;
    text-align: left;
  }
  #zuji .item>img{
    width:50px;
    height:50px;
    margin-right:10px;
  }
  #zuji .item .right h6{
    font-weight: bold;
  }
  #zuji .item .right span{
    color:red;
  }
  #zuji .item .right i{
    color:#999;
    text-decoration:line-through
  }
</style>
