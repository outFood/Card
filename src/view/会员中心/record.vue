<template>
  <div id="AddOrReduce">
    <headers title="返还记录"></headers>
    <no-order v-if=" recordData.list.length==0"></no-order>
    <div class="list" v-else>
      <div class="list-item" v-for="(item,key) in recordData.list" :key="key">
        <div class="left">返还积分: <span>{{item.point}}</span></div>
        <div class="right">{{item.createDate}}</div>
      </div>
    </div>
  </div>
</template>
<style>
  #AddOrReduce .list{
    padding: 0 0.3125rem;
    background: #fff;
  }
  #AddOrReduce .list .list-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:15px 0;
  }
  #AddOrReduce .list .list-item:not(:last-child){
    border-bottom: 1px solid #eee;
  }
  #AddOrReduce .list .list-item .left{

  }
  #AddOrReduce .list .list-item .left span{
    font-weight: bold;
  }
</style>
<script>
  import config from '../../myConfig'
  import axios from 'axios'
  import noOrder from '@/components/noOrder'
  import headers from '@/components/headers'
  export default {
    components:{headers,noOrder},
    data(){
      return{
        recordData:{}
      }
    },
    beforeCreate(){
      var me=this,params={
        uniacid:config.uniacid,
        t:config.t,
        i:config.i,
        openid:localStorage.getItem('openid'),
        mid:localStorage.getItem('userid'),
        page:1,
        pagesize:10
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.capital.get_main', {params:params})
        .then(function (res) {
          me.recordData=res.data.result
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    }
  }
</script>
