<template>
  <div id="exclusiveShop">
    <yd-slider autoplay="3000">
      <yd-slider-item v-for="(item,key) in myBanner" :key="key">
        <a :href="item.linkurl">
          <img :src="prefix+item.imgurl">
        </a>
      </yd-slider-item>
    </yd-slider>
    <div class="search"><yd-search></yd-search>搜索</div>
    <div class="picSort">
      <router-link :to="item.linkurl" v-for="(item,key) in myMenu" :key="key" :style="{color:item.color}">
        <img :src="prefix+item.imgurl">
        {{item.text}}
      </router-link>
    </div>
    <div class="textSort">
      <yd-slider>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            爆款品牌
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            国际大促
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            萝莉爆款
          </a>
        </yd-slider-item>
      </yd-slider>
    </div>
    <div class="discountItem">
      <div>
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        活动价 ￥25
      </div>
      <div><img src="http://static.ydcss.com/uploads/ydui/1.jpg">活动价 ￥25</div>
      <div><img src="http://static.ydcss.com/uploads/ydui/1.jpg">活动价 ￥25</div>
    </div>
    <h2>大牌推荐</h2>
    <div class="tuijian">
      <div v-for="(item,key) in myGoods">
        <img :src="prefix+item.thumb">
        <div>
          <p>{{item.title}}</p>
          <span>￥{{item.price}}</span><span class="goPay">购买</span>
        </div>
      </div>
    </div>
    <div class="Shopowner">
      <span>店长推荐</span>
      <img src="/static/img/more.png" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        myBanner:[],
        myMenu:[],
        myGoods:[]
      }
    },
    computed:{
      prefix(){//轮播图片附加前缀
        return this.$store.state.prefix
      },
      banner(){
        var exclusiveShopData=this.$store.state.exclusiveShopData;
        for(var key in exclusiveShopData){
          if(exclusiveShopData[key].id=='banner'){
            return exclusiveShopData[key]
          }
        }
      },
      menu(){
        var exclusiveShopData=this.$store.state.exclusiveShopData
        for(var key in exclusiveShopData){
          if(exclusiveShopData[key].id=='menu'){
            return exclusiveShopData[key]
          }
        }
      },
      pictures(){
        var exclusiveShopData=this.$store.state.exclusiveShopData
        for(var key in exclusiveShopData){
          if(exclusiveShopData[key].id=='pictures'){
            return exclusiveShopData[key]
          }
        }
      },
      listmenu(){
        var exclusiveShopData=this.$store.state.exclusiveShopData
        for(var key in exclusiveShopData){
          if(exclusiveShopData[key].id=='listmenu'){
            return exclusiveShopData[key]
          }
        }
      },
      goods(){
        var exclusiveShopData=this.$store.state.exclusiveShopData
        for(var key in exclusiveShopData){
          if(exclusiveShopData[key].id=='goods'){
            return exclusiveShopData[key]
          }
        }
      }
    },
    mounted(){
      for(var key in this.banner.data){
        this.myBanner.push(this.banner.data[key])
      }
      for(var key in this.menu.data){
        this.myMenu.push(this.menu.data[key])
      }
      for(var key in this.goods.data){
        this.myGoods.push(this.goods.data[key])
      }
      console.log(this.myBanner)
      console.log(this.myMenu)
      console.log(this.myGoods)
    }
  }
</script>
<style>
  #exclusiveShop .search{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  #exclusiveShop .search>div{
    flex: 0 0 85%;
  }
  #exclusiveShop .picSort{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background:#fff;
    padding: 10px 0;
  }
  #exclusiveShop .picSort a{
    flex: 0 0 25%;
    color:#606060
  }
  #exclusiveShop .picSort a img{
    display: block;
    width:40px;
    height:40px;
    margin:0 auto;
    margin-bottom:10px;
  }
  #exclusiveShop .textSort{
    background: #fff;
    margin:10px auto;
    padding: 10px;
  }
  #exclusiveShop .textSort .yd-slider-item{
    width:33%;
  }
  #exclusiveShop .textSort .yd-slider-pagination{
    display: none;
  }
  #exclusiveShop .discountItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
  }
  #exclusiveShop .discountItem>div{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 30%;
    flex:0 0 31.5%;
    text-align: left;
    color:#ff9a9c
  }
  #exclusiveShop .discountItem>div:nth-child(2){
    margin:0 2.5%;
  }
  #exclusiveShop .discountItem>div img{
    width:100%;
    margin-bottom: 10px;
  }
  #exclusiveShop h2{
    font-size:18px;
    padding:10px 0;
    background: #fff;
  }
  /**/
  #exclusiveShop .tuijian{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding:10px
  }
  #exclusiveShop .tuijian>div{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 39%;
    flex:0 0 48%;
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
  }
  #exclusiveShop .tuijian>div img{
    width:100%;
  }
  #exclusiveShop .tuijian>div div{
    padding-left:10px;
    text-align: left;
  }
  #exclusiveShop .tuijian>div:nth-child(2n){
    margin-left:4%;
  }
  #exclusiveShop .tuijian p{
    margin-bottom: 10px;
  }
  #exclusiveShop .tuijian span{
    color:#ff5552
  }
  #exclusiveShop .tuijian .goPay{
    display:inline-block;
    padding:0 6px;
    border:1px solid #ff5552;
    float: right;
    border-radius: 3px;
  }
  #exclusiveShop .Shopowner{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding:10px;
    font-size: 16px;
    font-weight: bold;

  }
  #exclusiveShop .Shopowner img{
    width:20px;
    height:20px;
  }
</style>
