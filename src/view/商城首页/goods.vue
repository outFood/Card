<template>
  <div id="goods" v-if="goodsData" :style="{background:goodsData.style.background}">
    <div class="showMethod1"  v-if="listStyle==1">
      <div v-for="(item,key) in goodsItem"  @click="resCommodityDetailData(item.gid)">
        <img :src="item.thumb" alt="">
        <div  class="lastdiv"><p class="top"><span class="biaoqian" :style="{background:goodsData.style.tagbackground}">标签</span><span class="title" :style="{color:goodsData.style.titlecolor}" v-if="goodsData.params.showtitle">{{item.title}}</span></p>
          <p>
            <span class="price" :style="{color:goodsData.style.pricecolor}">￥{{item.price}}</span>
            <span class="buyBtn1" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-1'"><img :src="require('@/assets/cart.png')" alt=""></span>
            <span class="buyBtn2" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-2'">+</span>
            <span class="buyBtn3" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-3'">兑换</span></p>
          <p><i :class="{linethrough:goodsData.params.productpriceline==1}" :style="{color:goodsData.style.productpricecolor}">{{goodsData.params.productpricetext}}:￥{{item.productprice}}</i><i :style="{color:goodsData.style.salescolor}">{{goodsData.params.salestext}}:{{item.sales}}</i></p></div>
      </div>
    </div>
    <div class="showMethod2"  v-if="listStyle==2">
      <div v-for="(item,key) in goodsItem"  @click="resCommodityDetailData(item.gid)">
        <img :src="item.thumb" alt="">
        <div class="lastdiv"><p class="top"><span class="biaoqian" :style="{background:goodsData.style.tagbackground}">标签</span><span class="title" :style="{color:goodsData.style.titlecolor}" v-if="goodsData.params.showtitle">{{item.title}}</span></p>
          <p>
            <span class="price" :style="{color:goodsData.style.pricecolor}">￥{{item.price}}</span>
            <span class="buyBtn1" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-1'"><img :src="require('@/assets/cart.png')" alt=""></span>
            <span class="buyBtn2" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-2'">+</span>
            <span class="buyBtn3" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-3'">兑换</span></p>
          <p><i :class="{linethrough:goodsData.params.productpriceline==1}" :style="{color:goodsData.style.productpricecolor}">{{goodsData.params.productpricetext}}:￥{{item.productprice}}</i><i :style="{color:goodsData.style.salescolor}">{{goodsData.params.salestext}}:{{item.sales}}</i></p></div>
      </div>
    </div>
    <div class="showMethod3" v-if="listStyle==3">
      <div v-for="(item,key) in goodsItem"  @click="resCommodityDetailData(item.gid)">
        <img :src="item.thumb" alt="">
        <div class="lastdiv"><p class="top"><span class="biaoqian" :style="{background:goodsData.style.tagbackground}">标签</span><span class="title" :style="{color:goodsData.style.titlecolor}" v-if="goodsData.params.showtitle">{{item.title}}</span></p>
          <p>
            <span class="price" :style="{color:goodsData.style.pricecolor}">￥{{item.price}}</span>
            <span class="buyBtn1" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-1'"><img :src="require('@/assets/cart.png')" alt=""></span>
            <span class="buyBtn2" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-2'">+</span>
            <span class="buyBtn3" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-3'">兑换</span></p>
          <p><i :class="{linethrough:goodsData.params.productpriceline==1}" :style="{color:goodsData.style.productpricecolor}">{{goodsData.params.productpricetext}}:￥{{item.productprice}}</i><i :style="{color:goodsData.style.salescolor}">{{goodsData.params.salestext}}:{{item.sales}}</i></p></div>
      </div>
    </div>
    <div class="showMethod4" v-if="listStyle==0">
      <div v-for="(item,key) in goodsItem" @click="resCommodityDetailData(item.gid)">
        <img :src="item.thumb" alt="">
        <div class="lastdiv rightdiv"><p class="top"><span class="biaoqian" :style="{background:goodsData.style.tagbackground}">标签</span><span class="title" :style="{color:goodsData.style.titlecolor}" v-if="goodsData.params.showtitle">{{item.title}}</span></p>
          <p>
            <span class="price" :style="{color:goodsData.style.pricecolor}">￥{{item.price}}</span>
            <span class="buyBtn1" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-1'"><img :src="require('@/assets/cart.png')" alt=""></span>
            <span class="buyBtn2" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-2'">+</span>
            <span class="buyBtn3" :style="{background:goodsData.style.buybtncolor}" v-if="goodsData.style.buystyle=='buybtn-3'">购买</span></p>
          <p><i :class="{linethrough:goodsData.params.productpriceline==1}" :style="{color:goodsData.style.productpricecolor}">{{goodsData.params.productpricetext}}:￥{{item.productprice}}</i><i :style="{color:goodsData.style.salescolor}">{{goodsData.params.salestext}}:{{item.sales}}</i></p></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #goods{

  }
  .linethrough{
    text-decoration: line-through;
  }
  #goods>div{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding: 0 8px;
    text-align: left;
  }
  #goods>div>div{
    width:100%;
    margin-bottom:0.3125rem;
    background: #fff;
  }
  #goods img{
    width:100%;
    height:5rem;
  }
  #goods .top{
    margin-bottom:0.3125rem;
  }
  #goods p{
    font-size:0.375rem;
  }
  #goods p .biaoqian{
    color:#fff;
    padding:1px 3px;
    border-radius: 3px;
    margin-right: 5px;
  }
  #goods p .price{
    margin-right:0.3125rem;
  }
  #goods p .buyBtn1{
    display: inline-block;
    width:0.78125rem;
    height:0.78125rem;
    border-radius: 50%;
    line-height:1.125rem;
    text-align: center;
    float: right;
  }
  #goods p .buyBtn1 img{
    width:0.625rem;
    height:0.625rem;
    margin:0 auto;
  }
  #goods p .buyBtn2{
    display: inline-block;
    width:0.7rem;
    height:0.7rem;
    border-radius: 50%;
    text-align: center;
    line-height:0.78125rem;
    font-size:0.625rem;
    color:#fff;
    float: right;
  }
  #goods p .buyBtn3{
    padding:2px 5px;
    border-radius: 3px;
    color:#fff;
    float: right;
  }
  #goods .showMethod2>div{
    width:49%;
    margin-bottom:0.3125rem;
  }
  #goods .showMethod2>div:nth-child(2n-1){
    margin-right:2%
  }
  #goods .showMethod3>div{
    width:32%;
    margin-bottom:0.3125rem;
  }
  #goods .showMethod3>div:nth-child(3n-1){
    margin-right:2%;
    margin-left:2%
  }
  #goods .showMethod4>div{

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  #goods .showMethod4 img{
    width:30%;
    height:2.5rem;
  }
  #goods .lastdiv{
    padding:0.3125rem;
  }
  #goods .lastdiv p:nth-child(3) i:nth-child(2){
    margin-left:0.3125rem;
  }
  #goods .showMethod4 .rightdiv{
    width:70%
  }
</style>
<script>
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    data(){
      return {
        goodsItem:[],
        listStyle:0,//用来表示布局方式，0代表以列表方式显示,1代表一行显示一个,2代表一行显示2个，三代表一行显示三个
      }
    },
    computed:{
      goodsData(){
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=="goods"){
            return this.$store.state.homeData[key]
          }
        }
      },
    },
    created(){
      setTimeout(()=>{
        for(var key in this.goodsData.data){
          this.goodsItem.push(this.goodsData.data[key])
        }
        if(this.goodsData.style.liststyle==''){
          this.listStyle=0
        }else if(this.goodsData.style.liststyle=='block one'){
          this.listStyle=1
        }else if(this.goodsData.style.liststyle=='block'){
          this.listStyle=2
        }else if(this.goodsData.style.liststyle=='block three'){
          this.listStyle=3
        }
      },1000)
    },
    methods:{
      resCommodityDetailData(id){
        var openid=localStorage.getItem('openid')
        var mid=localStorage.getItem('userid')
        if(openid!=null&&openid!='undefined'&&mid!=null&&mid!='undefined'){
          this.$store.dispatch({
            type:'resCommodityDetailData',
            params:{
              id:id,
              t:config.t,
              i:config.i,
              uniacid:config.uniacid,
              mid:config.mid,
              openid:config.openid,
            }
          })
        }else{
          this.$dialog.confirm({
            title: '提示',
            mes: '请先登录！',
            opts: () => {
              router.push({path: '/vipIndex/login'})
            }
          });
        }
      },
    }
  }
</script>
