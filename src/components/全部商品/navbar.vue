<template>
  <div id="navbar" v-if="diynavbar">
    <!--  /*navbar1------五个按钮全都有*/-->
    <div class="navbar1"  v-if="diynavbar.length==3&&navbar.params.hidecartbtn!=1">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}"    @click="clickIcon(item.icontext)"><img src="/static/img/heart-kong.png" alt=""><span v-if="item.icontext=='购物车'&&cartcount>0" :style="{background:navbar.style.dotcolor}">{{cartcount}}</span>{{item.icontext}}</div>
      <div class="addCart" :style="{background:navbar.style.cartcolor}"  @click="changePayStaus('加入购物车')">加入购物车</div>
      <router-link to="#" class="pay" :style="{background:navbar.style.buycolor}"  @click.native="changePayStaus('购买')">购买</router-link>
    </div>
    <!-- /*navbar2------没有加入购物车按钮*/-->
    <div class="navbar2" v-if="diynavbar.length==3&&navbar.params.hidecartbtn==1">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}"  @click="clickIcon(item.icontext)"><img src="/static/img/heart-kong.png" alt=""><span  v-if="item.icontext=='购物车'&&cartcount>0" :style="{background:navbar.style.dotcolor}">{{cartcount}}</span>{{item.icontext}}</div>
      <div class="pay" :style="{background:navbar.style.buycolor}"  @click="changePayStaus('购买')">购买</div>
    </div>
    <!--  /*navbar3------只有购买按钮*/-->
    <div class="navbar3" v-if="diynavbar.length==0&&navbar.params.hidecartbtn==1">
      <div class="pay" :style="{background:navbar.style.buycolor}"  @click="changePayStaus('购买')">购买</div>
    </div>
    <!--/*navbar4------只有加入购物车和购买按钮*/-->
    <div class="navbar4" v-if="diynavbar.length==0">
      <div class="addCart" :style="{background:navbar.style.cartcolor}"  @click="changePayStaus('加入购物车')">加入购物车</div>
      <div class="pay" :style="{background:navbar.style.buycolor}"  @click="changePayStaus('购买')">购买</div>
    </div>
    <!-- /*navbar5------只有一个icon*/-->
    <div class="navbar5"  v-if="diynavbar.length==1&navbar.params.hidecartbtn!=1">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}" @click="clickIcon(item.icontext)"><img src="/static/img/heart-kong.png" alt=""><span  v-if="item.icontext=='购物车'&&cartcount>0" :style="{background:navbar.style.dotcolor}">{{cartcount}}</span>{{item.icontext}}</div>
      <div class="addCart" :style="{background:navbar.style.cartcolor}"  @click="changePayStaus('加入购物车')">加入购物车</div>
      <div class="pay" :style="{background:navbar.style.buycolor}"  @click="changePayStaus('购买')">购买</div>
    </div>
    <!--/*navbar6-----有两个icon*/-->
    <div class="navbar6" v-if="diynavbar.length==2">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}"   @click="clickIcon(item.icontext)"><img src="/static/img/heart-kong.png" alt=""><span  v-if="item.icontext=='购物车'&&cartcount>0" :style="{background:navbar.style.dotcolor}">{{cartcount}}</span>{{item.icontext}}</div>
      <div class="addCart" :style="{background:navbar.style.cartcolor}"  @click="changePayStaus('加入购物车')">加入购物车</div>
      <div class="pay" :style="{background:navbar.style.buycolor}"  @click="changePayStaus('购买')">购买</div>
    </div>
    <!--/*navbar7-----只有一个icon和购买按钮*/-->
    <div class="navbar7" v-if="diynavbar.length==1&&navbar.params.hidecartbtn==1">
      <div class="icon" v-for="(item,key) in diynavbar" :key="key" :style="{background:navbar.style.background,color:navbar.style.textcolor}" @click="clickIcon(item.icontext)"><img src="/static/img/heart-kong.png" alt=""><span  v-if="item.icontext=='购物车'&&cartcount>0" :style="{background:navbar.style.dotcolor}">{{cartcount}}</span>{{item.icontext}}</div>
      <div class="pay" :style="{background:navbar.style.buycolor}"  @click="changePayStaus('购买')">购买</div>
    </div>
    <yd-popup v-model="show2" position="bottom" height="80%" class="sizePop">
      <div class="pic">
        <img src="http://img4.imgtn.bdimg.com/it/u=2747541684,870511306&fm=27&gp=0.jpg" alt="">
        <div>
          <span>￥{{commodity_goods.marketprice}}</span>
          <span>库存{{commodity_goods.total}}件</span>
          <span>请选择尺码</span>
        </div>
        <span @click="show2 = false">x</span>
      </div>
      <span v-if="specs">
        <span v-if="specs[0].title=='尺寸'">
          <div class="colorSize">
          <p v-if="specs">{{specs[0].title}}</p>
          <span v-for="(item,key) in specs[0].items" :key="key" @click="selColorSize([specs[0].title,item.id])" :class="{curBg:item.id==size}">{{item.title}}</span>
        </div>
        <div class="colorSize" v-if="specs">
          <p v-if="specs">{{specs[1].title}}</p>
          <span v-for="(item,key) in specs[1].items" :key="key" @click="selColorSize([specs[1].title,item.id])"  :class="{curBg:item.id==color}">{{item.title}}</span>
        </div>
        </span>
      </span>
      <span v-if="specs">
        <span v-if="specs[0].title=='颜色'">
          <div class="colorSize">
          <p v-if="specs">{{specs[0].title}}</p>
          <span v-for="(item,key) in specs[0].items" :key="key" @click="selColorSize([specs[0].title,item.id])" :class="{curBg:item.id==color}">{{item.title}}</span>
        </div>
        <div class="colorSize" v-if="specs">
          <p v-if="specs">{{specs[1].title}}</p>
          <span v-for="(item,key) in specs[1].items" :key="key" @click="selColorSize([specs[1].title,item.id])"  :class="{curBg:item.id==size}">{{item.title}}</span>
        </div>
        </span>
      </span>

      <div class="payNumber">
          <span>购买数量(限购{{commodity_goods.maxbuy}}件)</span>
          <div>
            <yd-spinner max="75" :min="commodity_goods.minbuy" width="100px" height="30px" v-model="payNumber"></yd-spinner>
          </div>
      </div>
      <yd-button size="large" type="danger" position="bottom" @click.native="sure">确定</yd-button>
    </yd-popup>

  </div>
</template>
<script>
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    data(){
      return{
        show2:false,
        payNumber:1,//购买数量
        color:undefined,
        size:undefined,
      }
    },
    computed:{
      diynavbar(){
        return this.$store.state.commodityDetailData.diypage.diynavbar
      },
      navbar(){
        return this.$store.state.commodityDetailData.diypage.navbar
      },
      commodity_goods(){
        return this.$store.state.commodityColorSizeData.goods
      },
      options(){
        return this.$store.state.commodityColorSizeData.options
      },
      specs(){
        return this.$store.state.commodityColorSizeData.specs
      },
      cartcount(){
        return this.$store.state.cartcount
      }
    },
    mounted(){
//      console.log('this.diynavbar--------------------------')
//      console.log(this.diynavbar)
//      console.log('this.navbar----------------------------')
//      console.log(this.navbar)
    },
    methods:{
      changePayStaus(status){//此方法用于在用户点击“加入购物车”或“购买”按钮的时候，去改变当前购买状态，从而在点击确认的时候，将商品加入购物车或者跳转到支付页面
        this.$store.dispatch({
          type:'changePayStaus',
          payStatus:status
        })
        this.show2=true
      },
      selColorSize(arr){
        console.log(arr)
        if(arr[0]=='颜色'){
          this.color=arr[1]
        }else if(arr[0]=='尺寸'){
          this.size=arr[1]
        }
        console.log('颜色：'+this.color)
        console.log('尺寸：'+this.size)
      },
      sure(){
        if(this.options!=false){//商品有规格,要传optionid
          if(this.color==undefined){
            alert('请选择颜色')
          }else if(this.size==undefined){
            alert('请选择尺寸')
          }else{
            var curSel='';
            if(this.specs[0].title=='颜色'){
              curSel=this.color+'_'+this.size
            }else{
              curSel=this.size+'_'+this.color
            }
            for( var i=0;i<this.options.length;i++){
              if(this.options[i].specs==curSel){
                this.$store.dispatch({
                  type:'cartOrPay',
                  params:{
                    total:this.payNumber,
                    optionid:this.options[i].id,//规格id
                    id:this.commodity_goods.id,
                    t:config.t,
                    mid:localStorage.getItem('userid'),
                    openid:localStorage.getItem('openid'),
                    uniacid:config.uniacid
                  }
                })
                this.show2 = false
              }
            }
          }
        }else{//商品无规格，不需要传optionid
          this.$store.dispatch({
            type:'cartOrPay',
            params:{
              total:this.payNumber,
              optionid:'',//规格id
              id:this.commodity_goods.id,
              t:config.t,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid'),
              uniacid:config.uniacid
            }
          })
          this.show2 = false
        }

      },
      clickIcon(icontext){
        if(icontext=='购物车'){
          this.$store.dispatch({
            type:'lookCart',
            params:{
              t:config.t,
              uniacid:config.uniacid,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid')
            }
          })
        }
      }
    }
  }
</script>
<style>
  .curBg{
    background: red !important;
    color:#fff
  }
  #navbar .sizePop .yd-popup-content{
  }
  #navbar .sizePop button{
    height:40px;
    position: fixed;
    bottom:0;
  }
  #navbar .sizePop .pic{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 10px;
  }
  #navbar .sizePop .pic{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 10px;
  }
  #navbar .sizePop .pic>img{
    width:70px;
    height:70px;
    border:2px solid #eee;
  }
  #navbar .sizePop .pic>div{
    flex: 0 0 70%;
    line-height: 25px;
    text-align: left;
    padding-left: 10px;
    font-size: 10px;
  }
  #navbar .sizePop .pic>div span{
    display: block;
  }
  #navbar .sizePop .pic>div span:nth-child(1){
    color:red;
    font-weight: bold;
    font-size:16px;
  }
  #navbar .sizePop .pic>span{
    display: block;
    width:20px;
    height:20px;
    line-height:18px;
    border:1px solid #000;
    border-radius: 50%;
  }
  #navbar .sizePop .colorSize{
    text-align: left;
    line-height: 25px;
    padding: 10px;
    border-bottom:1px solid #eee;
  }
  #navbar .sizePop .colorSize span{
    background: #eee;
    margin-right:10px;
    padding:3px 8px;
    border-radius: 5px;
    font-size:12px;
  }
  #navbar .sizePop .payNumber{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content:space-between;
    text-align: left;
    line-height: 25px;
    padding: 10px;
    border-bottom:1px solid #eee;
    margin-bottom: 50px;
  }

  /**/
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

