<template>
  <div id="article">
    <headers title="文章"></headers>
    <section>
      <h2>{{article.shopshare.title}}</h2>
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
  export default {
    components:{headers},
    data(){
      return{

      }
    },
    computed:{
      article(){
        return this.$store.state.article
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      }
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

