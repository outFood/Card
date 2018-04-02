<template>
  <div id="article">
    <headers :title="article.shopshare.title"></headers>
    <section>
      <p>
        <span>{{article.article.article_mp}}</span>
        发布时间:{{article.article.article_date}}</p>
      <!--<img :src="article.shopshare.imgUrl" alt="">-->
      <div v-html="article.article.article_content"></div>
    </section>
  </div>
</template>
<script>
  import headers from '@/components/headers'
  import config from '../../myConfig'
  import axios from 'axios'
  export default {
    components:{headers},
    data(){
      return{
        article:{}
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      }
    },
    beforeCreate(){
      var me=this,params={
        t:config.t,
        openid:localStorage.getItem('openid')
      }
      axios.get(config.baseUrl +'/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=article.index.get_main&aid=8', {params:params})
        .then(function (res) {
          console.log(res)
          me.article=res.data.result.data
        }).catch(function (err) {
        // alert(err)
      })
    }
  }
</script>
<style>
  #article section{
    background: #fff;padding:0.3125rem;text-align: left;
  }
  #article section h2{
    font-size:0.6rem;
  }
  #article section p{
    color:#8a8a8a;
    margin-top:.3125rem;
  }
  #article section p span{
    color:blue;
  }
  #article section img{
    display: block;
    width:90%;
    margin:0.9375rem auto;
  }
</style>

