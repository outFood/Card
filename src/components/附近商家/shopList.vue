<template>
  <div id="shopList">
    <nav>
      <yd-accordion>
        <yd-accordion-item title="智能排序">
          <div>
            <p v-for="(item,key) in Fujin_sortData" :key="key">{{item.catename}}</p>
          </div>
        </yd-accordion-item>
        <yd-accordion-item title="优惠排序">
          <div>
            <p>分为冯绍峰</p>
          </div>
        </yd-accordion-item>
        <yd-accordion-item title="综合排序">
          <div>
            <p>二维若的无</p>
          </div>
        </yd-accordion-item>
      </yd-accordion>
    </nav>
    <section>
      <div class="listItem" v-for="(item,key) in Fujin_ListData.list" :key="key">
        <div class="top">
          <img :src="item.logo">
          <div class="center">
            <h6>{{item.merchname}}</h6>
            <p>地址:{{item.address}}</p>
            <p>电话:{{item.tel}}</p>
          </div>
          <div class="right">
            <span>进店</span>
            1389394m
          </div>
        </div>
        <div class="bottom">
          <div @click="openMap(item)">打开地图</div>
          <div>联系商家</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    computed:{
      Fujin_sortData(){
        return this.$store.state.Fujin_sortData
      },
      Fujin_ListData(){
        return this.$store.state.Fujin_ListData.result
      }
    },
    methods:{
      openMap(item){
        this.$store.dispatch({
          type:'saveCurSelShop',
          params:item
        })
      }
    }
  }
</script>
<style>
  #shopList{
    font-size:0.4375rem;
    position: relative;
    padding-bottom: 61rem;
  }
  #shopList nav .yd-accordion .yd-accordion-head{
    width:33.3%;
    float:left;
    padding:0.1875rem 0.625rem;
    background: #fff;
  }
  #shopList nav .yd-accordion-content{
    background: #fff;
    z-index: 1000;
    width:100%;
    position: absolute;
    top:1.625rem;
  }
  #shopList nav .yd-accordion-head-content .yd-accordion-title{
    font-size:0.43rem;
  }
  #shopList nav .yd-accordion .yd-accordion-content p{
    padding: 0.3125rem 0;
    padding-right:8px;
    height:1.5625rem;
  }
  #shopList nav .yd-accordion .yd-accordion-content p:not(:last-child){
    border-bottom: 1px solid #eee;
  }
  #shopList section{
    position: absolute;
    top:1.4rem;
    bottom:0;
    left:0;
    right:0;
  }
  #shopList section .listItem{
    background: #fff;
    margin-top:10px;
  }
  #shopList section .listItem .top{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:10px;
    align-items: center;
  }
  #shopList section .listItem .top img{
    width:2.8rem;
    height:1.875rem;
  }
  #shopList section .listItem .top .center{
    text-align: left;
    flex: 0 0 50%;
    padding-left:5px;
  }
  #shopList section .listItem .top .center p{
    font-size:0.375rem;
  }
  #shopList section .listItem .top .right{
    flex: 0 0 10%;
    color:red;
    font-size:0.375rem;
  }
  #shopList section .listItem .top .right span{
    display: block;
    padding:2px 6px;
    border:1px solid red;
    border-radius: 3px;
    margin-bottom:10px
  }
  #shopList section .listItem .bottom{
    border-top:1px solid #d9d9d9;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  #shopList section .listItem .bottom>div{
    flex:0 0 50%;
    text-align: center;
    padding:10px 0;
  }
  #shopList section .listItem .bottom>div:nth-child(1){
    border-right:1px solid #d9d9d9;
  }
  #shopList section .listItem:last-child{
    margin-bottom:2.5rem;
  }
</style>
