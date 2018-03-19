<template>
  <div id="noticeList">
    <yd-navbar title="公告">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="list">
      <div class="listItem" v-for="(item,key) in noticeList" :key="key" @click="saveSelNotice(item)">
        <img :src="item.thumb" alt="">
        <h3>{{item.title}}</h3>
        <img src="/static/img/more.png" alt="" class="more">
      </div>
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
      noticeList(){
        return this.$store.state.noticeList
      }
    },
    methods:{
      saveSelNotice(item){
        this.$store.dispatch({
          type:'saveSelNotice',
          params:item
        })
      }
    }
  }
</script>
<style>
  #noticeList .yd-navbar:after{
    border:none;
  }
  #noticeList header {
    height: 1.5rem !important;
    align-items: center;
  }
  #noticeList header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
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
