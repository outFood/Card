<template>
  <div id="myLike">
    <headers title="我的关注"></headers>
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
  </div>
</template>
<script>
  import config from '../../myConfig'
  import axios from 'axios'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return{
        list:[]
      }
    },
    beforeCreate(){
      var me=this,params={
        page:1,
        mid:localStorage.getItem('userid'),
        openid:localStorage.getItem('openid'),
        uniacid:config.uniacid,
        i:config.i,
        t:config.t
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.get_list', {params:params})
        .then(function (res) {
          me.list=res.data.result.list
        }).catch(function (err) {
        console.log('请求失败')
      })
    }
  }
</script>
<style>
  #myLike header {
    height: 1.5rem !important;
    align-items: center;
  }
  #myLike header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #myLike .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #myLike .noData{
    margin-top:0.625rem;
  }
  #myLike .noData span{
    display: inline-block;
    width:30%;
    height:0.25rem;
    border-top:1px solid #eee;
  }
  #myLike{

  }
  #myLike .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    padding:0.3125rem;
    margin-bottom:0.3125rem;
    text-align: left;
  }
  #myLike .item>img{
    width:1.5625rem;
    height:1.5625rem;
    margin-right:0.3125rem;
  }
  #myLike .item .right h6{
    font-weight: bold;
  }
  #myLike .item .right span{
    color:red;
  }
  #myLike .item .right i{
    color:#999;
    text-decoration:line-through
  }
</style>
