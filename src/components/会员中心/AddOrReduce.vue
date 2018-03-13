<template>
  <div id="AddOrReduce">
    <yd-navbar title="资金往来">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="list">
      <div class="list-item">
        <div class="left"><img src="http://static.ydcss.com/uploads/ydui/1.jpg">哈哈</div>
        <div class="right"><span>￥-7899 </span><div><p>E卡系统</p><p>消费7899</p></div></div>
      </div>
    </div>
  </div>
</template>
<style>
  #AddOrReduce{

  }
  #AddOrReduce header {
    height: 1.5rem !important;
    align-items: center;
  }
  #AddOrReduce header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #AddOrReduce .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
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
    padding:0.3125rem 0;
    border-bottom: 1px solid #eee;
  }
  #AddOrReduce .list .list-item .left{

  }
  #AddOrReduce .list .list-item .left img{
    width:1.25rem;height:1.25rem;vertical-align: middle;margin-right:0.3125rem;
  }
  #AddOrReduce .list .list-item .right{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  #AddOrReduce .list .list-item .right div{
    background: orangered;
    color:#fff;
    margin-left:0.3125rem;
    padding:5px 0.3125rem;
    text-align: center;
  }
</style>
<script>
  export default {
    methods:{
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
