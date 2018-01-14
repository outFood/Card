<template>
  <div id="goods" v-if="goodsData">
    <div class="showMethod1" :style="{background:goodsData.style.background}"  v-if="listStyle==1">
      <div v-for="(item,key) in goodsItem">
        <img :src="prefix+item.thumb" alt="">
        <div><p class="top"><span class="biaoqian" :style="{background:goodsData.style.tagbackground}">标签</span><span class="title" :style="{color:goodsData.style.titlecolor}">{{item.title}}</span></p>
          <p><span class="price" :style="{color:goodsData.style.pricecolor}">￥{{item.price}}</span><span class="duihuan" :style="{background:goodsData.style.buybtncolor}">兑换</span></p>
          <p><i :class="{linethrough:goodsData.params.productpriceline==1}" :style="{color:goodsData.style.productpricecolor}">{{goodsData.params.productpricetext}}:￥{{goodsData.params.productprice}}</i><i :style="{color:goodsData.style.salescolor}">{{goodsData.params.salestext}}:</i></p></div>
      </div>
    </div>
    <div class="showMethod2"  v-if="listStyle==2">
      <div v-for="(item,key) in goodsItem">
        <img :src="prefix+item.thumb" alt="">
        <div><p class="top"><span class="biaoqian" :style="{background:goodsData.style.tagbackground}">标签</span><span class="title" :style="{color:goodsData.style.titlecolor}">{{item.title}}</span></p>
          <p><span class="price" :style="{color:goodsData.style.pricecolor}">￥{{item.price}}</span><span class="duihuan" :style="{background:goodsData.style.buybtncolor}">兑换</span></p>
          <p><i :class="{linethrough:goodsData.params.productpriceline==1}" :style="{color:goodsData.style.productpricecolor}">{{goodsData.params.productpricetext}}:￥{{goodsData.params.productprice}}</i><i :style="{color:goodsData.style.salescolor}">{{goodsData.params.salestext}}:</i></p></div>
      </div>
    </div>
    <div class="showMethod3" v-if="listStyle==3">
      <div v-for="(item,key) in goodsItem">
        <img :src="prefix+item.thumb" alt="">
        <div><p class="top"><span class="biaoqian" :style="{background:goodsData.style.tagbackground}">标签</span><span class="title" :style="{color:goodsData.style.titlecolor}">{{item.title}}</span></p>
          <p><span class="price" :style="{color:goodsData.style.pricecolor}">￥{{item.price}}</span><span class="duihuan" :style="{background:goodsData.style.buybtncolor}">兑换</span></p>
          <p><i :class="{linethrough:goodsData.params.productpriceline==1}" :style="{color:goodsData.style.productpricecolor}">{{goodsData.params.productpricetext}}:￥{{goodsData.params.productprice}}</i><i :style="{color:goodsData.style.salescolor}">{{goodsData.params.salestext}}:</i></p></div>
      </div>
    </div>
    <div class="showMethod4" v-if="listStyle==0">
      <div v-for="(item,key) in goodsItem">
        <img :src="prefix+item.thumb" alt="">
        <div class="rightdiv"><p class="top"><span class="biaoqian" :style="{background:goodsData.style.tagbackground}">标签</span><span class="title" :style="{color:goodsData.style.titlecolor}">{{item.title}}</span></p>
          <p><span class="price" :style="{color:goodsData.style.pricecolor}">￥{{item.price}}</span><span class="duihuan" :style="{background:goodsData.style.buybtncolor}">兑换</span></p>
          <p><i :class="{linethrough:goodsData.params.productpriceline==1}" :style="{color:goodsData.style.productpricecolor}">{{goodsData.params.productpricetext}}:￥{{goodsData.params.productprice}}</i><i :style="{color:goodsData.style.salescolor}">{{goodsData.params.salestext}}:</i></p></div>
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
    padding:10px;
    text-align: left;
  }
  #goods>div>div{
    width:100%;
    margin-bottom:10px;
  }
  #goods img{
    width:100%;
  }
  #goods .top{
    margin-bottom:10px;
  }
  #goods p{
    font-size: 12px;
  }
  #goods p .biaoqian{
    color:#fff;
    padding:1px 3px;
    border-radius: 3px;
    margin-right: 5px;
  }
  #goods p .price{
    margin-right:10px;
  }
  #goods p .duihuan{
    padding:2px 5px;
    border-radius: 3px;
    color:#fff;
    float: right;
  }
  #goods .showMethod2>div{
    width:48.5%;
    margin-bottom:10px;
  }
  #goods .showMethod2>div:nth-child(2n-1){
    margin-right:3%
  }
  #goods .showMethod3>div{
    width:32%;
    margin-bottom:10px;
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
    height:80px;
    margin-right: 10px;
  }
  #goods .showMethod4 .rightdiv{
    width:70%
  }
</style>
<script>
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
      prefix(){//图标附加前缀
        return this.$store.state.prefix
      }
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
    }
  }
</script>
