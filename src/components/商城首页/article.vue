<template>
  <div id="article">
    <yd-navbar title="文章">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
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
  export default {
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
  #article header {
    height: 1.5rem !important;
    align-items: center;
  }
  #article header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #article .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
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

