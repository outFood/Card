<template>
  <div id="navbar">
    <!--  /*navbar1------五个按钮全都有*/-->
    <div class="navbar1"  v-if="diynavbar.length==3&&navbar.params.hidecartbtn!=1">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}"><img src="/static/img/heart-kong.png" alt=""><span v-if="item.icontext=='购物车'" :style="{background:navbar.style.dotcolor}">2</span>{{item.icontext}}</div>
      <div class="addCart" :style="{background:navbar.style.cartcolor}">加入购物车</div>
      <div class="pay" :style="{background:navbar.style.buycolor}">购买</div>
    </div>
    <!-- /*navbar2------没有加入购物车按钮*/-->
    <div class="navbar2" v-if="diynavbar.length==3&&navbar.params.hidecartbtn==1">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}"><img src="/static/img/heart-kong.png" alt=""><span v-if="item.icontext=='购物车'" :style="{background:navbar.style.dotcolor}">2</span>{{item.icontext}}</div>
      <div class="pay" :style="{background:navbar.style.buycolor}">购买</div>
    </div>
    <!--  /*navbar3------只有购买按钮*/-->
    <div class="navbar3" v-if="diynavbar.length==0&&navbar.params.hidecartbtn==1">
      <div class="pay" :style="{background:navbar.style.buycolor}">购买</div>
    </div>
    <!--/*navbar4------只有加入购物车和购买按钮*/-->
    <div class="navbar4" v-if="diynavbar.length==0">
      <div class="addCart" :style="{background:navbar.style.cartcolor}">加入购物车</div>
      <div class="pay" :style="{background:navbar.style.buycolor}">购买</div>
    </div>
    <!-- /*navbar5------只有一个icon*/-->
    <div class="navbar5"  v-if="diynavbar.length==1&navbar.params.hidecartbtn!=1">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}"><img src="/static/img/heart-kong.png" alt=""><span v-if="item.icontext=='购物车'" :style="{background:navbar.style.dotcolor}">2</span>{{item.icontext}}</div>
      <div class="addCart" :style="{background:navbar.style.cartcolor}">加入购物车</div>
      <div class="pay" :style="{background:navbar.style.buycolor}">购买</div>
    </div>
    <!--/*navbar6-----有两个icon*/-->
    <div class="navbar6" v-if="diynavbar.length==2">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}"><img src="/static/img/heart-kong.png" alt=""><span v-if="item.icontext=='购物车'" :style="{background:navbar.style.dotcolor}">2</span>{{item.icontext}}</div>
      <div class="addCart" :style="{background:navbar.style.cartcolor}">加入购物车</div>
      <div class="pay" :style="{background:navbar.style.buycolor}">购买</div>
    </div>
    <!--/*navbar7-----只有一个icon和购买按钮*/-->
    <div class="navbar7" v-if="diynavbar.length==1&&navbar.params.hidecartbtn==1">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}"><img src="/static/img/heart-kong.png" alt=""><span v-if="item.icontext=='购物车'" :style="{background:navbar.style.dotcolor}">2</span>{{item.icontext}}</div>
      <div class="pay" :style="{background:navbar.style.buycolor}">购买</div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    computed:{
      diynavbar(){
        return this.$store.state.commodityDetailData.diypage.diynavbar
      },
      navbar(){
        return this.$store.state.commodityDetailData.diypage.navbar
      }
    },
    mounted(){
      console.log(this.diynavbar)
      console.log(this.navbar)
    }
  }
</script>
<style>
  #navbar {
    width: 100%;
    height:50px;
    line-height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
  }
  #navbar>div{
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height:100%;
    }
  #navbar .addCart,.pay{
    color:#fff;
  }
  #navbar .icon img{
    display: block;
    width:20px;
    height:20px;
    margin: 0 auto;
  }

  /*navbar1------五个按钮全都有*/
  #navbar .navbar1 .icon{
    flex: 0 0 15%;
    line-height:25px;
    padding-top:5px;
    font-size:12px;
    position: relative;
  }
  #navbar .navbar1 .icon span{
    display: block;
    color:#fff;
    width:15px;
    height:15px;
    line-height: 15px;
    border-radius: 50%;
    position:absolute;
    top:3px;
    right:5px
  }
  #navbar .navbar1 .addCart{
    flex:0 0 30%;
    background: green;
  }
  #navbar .navbar1 .pay{
    flex:0 0 25%;
    background: red;
  }
  /*navbar2------没有加入购物车按钮*/
  #navbar .navbar2 .icon{
    flex: 0 0 25%;
    line-height:25px;
    padding-top:5px;
    font-size:12px;
    position: relative;
  }
  #navbar .navbar2 .icon span{
    display: block;
    color:#fff;
    width:15px;
    height:15px;
    line-height: 15px;
    border-radius: 50%;
    position:absolute;
    top:3px;
    right:20px
  }
  #navbar .navbar2 .addCart{
    flex:0 0 30%;
    background: green;
  }
  #navbar .navbar2 .pay{
    flex:0 0 25%;
    background: red;
  }
  /*navbar3------只有购买按钮*/
  #navbar .navbar3 .pay{
    width:100%;
  }
  /*navbar4------只有加入购物车和购买按钮*/
  #navbar .navbar4>div{
    flex: 0 0 50%;
  }

  /*navbar5------只有一个icon*/
  #navbar .navbar5 .icon{
    flex: 0 0 30%;
    line-height:25px;
    padding-top:5px;
    font-size:12px;
    position: relative;
  }
  #navbar .navbar5 .icon span{
    display: block;
    color:#fff;
    width:15px;
    height:15px;
    line-height: 15px;
    border-radius: 50%;
    position:absolute;
    top:3px;
    right:28px
  }
  #navbar .navbar5 .addCart{
    flex:0 0 35%;
    background: green;
  }
  #navbar .navbar5 .pay{
    flex:0 0 35%;
    background: red;
  }
  /*navbar6-----有两个icon*/
  #navbar .navbar6 .icon{
    flex: 0 0 20%;
    line-height:25px;
    padding-top:5px;
    font-size:12px;
    position: relative;
  }
  #navbar .navbar6 .icon span{
    display: block;
    color:#fff;
    width:15px;
    height:15px;
    line-height: 15px;
    border-radius: 50%;
    position:absolute;
    top:3px;
    right:15px
  }
  #navbar .navbar6 .addCart{
    flex:0 0 30%;
    background: green;
  }
  #navbar .navbar6 .pay{
    flex:0 0 30%;
    background: red;
  }
  /*navbar7-----只有一个icon和购买按钮*/
  #navbar .navbar7 .icon{
    flex: 0 0 50%;
    line-height:25px;
    padding-top:5px;
    font-size:12px;
    position: relative;
  }
  #navbar .navbar7 .pay{
    flex: 0 0 50%;
    background: red;
  }
  #navbar .navbar7 .icon span{
    display: block;
    color:#fff;
    background: red;
    width:15px;
    height:15px;
    line-height: 15px;
    border-radius: 50%;
    position:absolute;
    top:3px;
    right:60px
  }
</style>

