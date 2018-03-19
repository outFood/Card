<template>
  <div id="article">
    <h2>{{article.shopshare.title}}</h2>
    <p>
      <span>{{article.article.article_mp}}</span>
      发布时间:{{article.article.article_date}}</p>
    <!--<img :src="article.shopshare.imgUrl" alt="">-->
    <div v-html="article.article.article_content"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    computed:{
      article(){
        return this.$store.state.article
      }
    }
  }
</script>
<style>
  #article{
    position: fixed;
    top:0;right:0;bottom:0;left:0;background: #fff;padding:0.3125rem;text-align: left;
  }
  #article h2{
    font-size:0.6rem;
  }
  #article p{
    color:#8a8a8a;
    margin-top:.3125rem;
  }
  #article p span{
    color:blue;
  }
  #article img{
    display: block;
    width:90%;
    margin:0.9375rem auto;
  }
</style>

