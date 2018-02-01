<template>
  <div id="AddOrReduce">
    <yd-navbar title="积分返还记录">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="list">
      <div class="list-item" v-for="(item,key) in recordData.list" :key="key">
        <div class="left">返还积分: <span>{{item.point}}</span></div>
        <div class="right">{{item.createDate}}</div>
      </div>
    </div>
  </div>
</template>
<style>
  #AddOrReduce .list{
    padding: 0 10px;
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
  export default {
    computed:{
      recordData(){
        return this.$store.state.recordData
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
