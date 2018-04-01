<template>
  <div id="noticeList">
    <headers title="公告列表"></headers>
    <div class="list">
      <div class="listItem" v-for="(item,key) in noticeList" :key="key" @click="saveSelNotice(item)">
        <img :src="item.thumb" alt="">
        <h3>{{item.title}}</h3>
        <img :src="require('@/assets/more.png')" alt="" class="more">
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import router from '@/router'
  import config from '../../myConfig'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return {
        noticeList:[],
      }
    },
    methods:{
      saveSelNotice(item){
        this.$router.push({
          path: '/noticePage',
          query: {
            item: JSON.stringify(item)
          }
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    },
    beforeCreate(){
      var me=this,params={
        t:config.t,
        i:config.i,
        uniacid:config.uniacid,
        page:1,pagesize:10
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=shop.notice.get_list', {params:params})
        .then(function (res) {
          me.noticeList=res.data.result.data.list
        }).catch(function (err) {
          console.log('数据请求出错')
      })
    }
  }
</script>
<style>
  #noticeList .list{
    background: #fff;
  }
  #noticeList .listItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:0.3125rem;
    border-bottom: 1px solid #eee;
    text-align: left;
  }
  #noticeList .listItem img:nth-child(1){
    width:2.5rem;
    height:1.875rem;
    margin-right:1.875rem;
  }
  #noticeList .listItem .more{
    width:0.625rem;
    height:0.625rem;
  }
  #noticeList .listItem h3{
    flex:0 0 68%;
  }
</style>
