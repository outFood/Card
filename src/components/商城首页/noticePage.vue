<template>
  <div id="noticePage">
    <yd-navbar title="公告">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <section>
      <h2>{{selNotice.title}}</h2>
      <p>
        <!--<span>E卡系统</span> -->
        发布时间:{{selNotice.createtime}}</p>
      <div v-html="selNotice.detail"></div>
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
      selNotice(){
        return this.$store.state.selNotice
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
  #noticePage header {
    height: 1.5rem !important;
    align-items: center;
  }
  #noticePage header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #noticePage .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #noticePage section{
    background: #fff;text-align: left;padding: 0.3125rem;
  }
  #noticePage section  h2{
    font-size:0.6rem;
  }
  #noticePage section p{
    color:#8a8a8a;
    margin-top:.3125rem;
  }
  #noticePage section p span{
    color:blue;
  }
  #noticePage section img{
    display: block;
    width:90%;
    margin:0.9375rem auto;
  }
</style>
