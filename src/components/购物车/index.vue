<template>
  <div id="cart" v-if="cartData">
    <yd-navbar title="我的购物车">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <router-link to="#" slot="right" @click.native="delShow=!delShow">
        <span v-if="delShow==false">编辑</span><span v-else>完成</span>
      </router-link>
    </yd-navbar>
    <div class="shop" v-if="cartData.list.length>0">
      <yd-checklist v-model="cartList" ref="checklistDemo" :callback="change"  :label="false">
        <yd-checklist-item v-for="(item,key) in cartData.list" :key="key" :val="item.id">
          <img :src="item.thumb">
          <div class="right">
            <h6>{{item.title}}</h6>
            <p>{{item.optiontitle}}</p>
            <div class="priceNum">
              <span>￥{{item.ggprice}}</span>
              <span class="yd-spinner" style="height: 0.6rem; width: 2rem;">
                <a href="#" @click="addOrReduceOrDel(['减',item.total,item.id,item.optionid])"></a>
                <input type="number" pattern="[0-9]*" v-model="item.total" class="yd-spinner-input">
                <a href="#" @click="addOrReduceOrDel(['加',item.total,item.id,item.optionid])"></a>
              </span>
            </div>
          </div>
        </yd-checklist-item>
      </yd-checklist>
      <!--选择购买-->
      <div class="checkAll" v-if="delShow==false">
        <div class="left">
          <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">全选</yd-checkbox>
          <div class="rit">合计：<span>￥{{totalPrice}}</span> <p>不含运费</p></div>
        </div>
        <div class="right">结算({{cartData.list.length}})</div>
      </div>
      <!--编辑删除-->
      <div class="edit" v-else>
        <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">全选</yd-checkbox>
        <div class="delete" :class="{redDelete:cartList.length}" @click="addOrReduceOrDel(['删除'])">删除</div>
      </div>
    </div>
    <no-data v-else></no-data>
    <footers></footers>
  </div>
</template>
<script type="text/babel">
  import config from '../../myConfig'
  import noData from '@/components/购物车/noData'
  export default {
    components:{noData},
    data() {
      return {
        cartList: [],
        isCheckAll: false,
        curNum:0,
        delShow:false,
      }
    },
    watch:{
      cartList:{
        handler(newVal,oldVal){
          console.log(newVal)
        },
        deep:true
      }
    },
    computed:{
      cartData(){
         return this.$store.state.cartData
      },
      totalPrice:{
        get(){
          return this.$store.state.cartData.totalprice
        },
        set(newValue){
          this.$store.state.cartData.totalprice=newValue
        }
      }
    },
    methods: {
      change(value, isCheckAll) {
        this.isCheckAll = isCheckAll;
      },
      checkAll() {
        this.isCheckAll = !this.isCheckAll;
        this.$refs.checklistDemo.$emit('ydui.checklist.checkall', this.isCheckAll);
      },
      addOrReduceOrDel(arr){//---------------------------------------
        if(arr[0]=='加'){
          var total=parseInt(arr[1])+1;
          this.$store.dispatch({
            type:'cartUpdate',
            params:{
              total:total,
              optionid:arr[3],
              id:arr[2],
              t:config.t,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid')
            }
          })
          for(var k=0;k<this.cartData.list.length;k++){
            if(this.cartData.list[k].id==arr[2]){
              this.cartData.list[k].total++;
              this.totalPrice+=this.cartData.list[k].ggprice;
            }
          }
        }else if(arr[0]=='减'){
          var total=parseInt(arr[1])-1;
          this.$store.dispatch({
            type:'cartUpdate',
            params:{
              total:total,
              optionid:arr[3],
              id:arr[2],
              t:config.t,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid')
            }
          })
          for(var k=0;k<this.cartData.list.length;k++){
            if(this.cartData.list[k].id==arr[2]){
              if(this.cartData.list[k].total>1){
                this.cartData.list[k].total--;
                this.totalPrice-=this.cartData.list[k].ggprice;
              }else if(this.cartData.list[k].total==1){
                console.log([arr[2]])
                //如果减少到数量为一的时候，做删除的操作
                this.$store.dispatch({
                  type:'cartDelete',
                  params:{
                    mid:localStorage.getItem('userid'),
                    openid:localStorage.getItem('openid'),
                    ids:[arr[2]],
                    t:config.t,
                  }
                })
                this.totalPrice-=this.cartData.list[k].ggprice
                this.cartData.list.splice(k,1)
              }
              console.log(this.cartData.list)
            }
          }
        }else{
          console.log('ggggg')
          if(this.cartList){
            console.log(this.cartList)
            this.$store.dispatch({
              type:'cartDelete',
              params:{
                mid:localStorage.getItem('userid'),
                openid:localStorage.getItem('openid'),
                ids:this.cartList,
                t:config.t,
              }
            })
          }
          if(this.isCheckAll==true){
            console.log('全选')
            this.totalPrice=0
            this.cartData.list=[]
          }else{
            for(var k=0;k<this.cartData.list.length;k++){
              if(this.cartData.list[k].id==this.cartList[0]){
                this.totalPrice-=this.cartData.list[k].ggprice
                this.cartData.list.splice(k,1)
              }
            }
          }
        }
      },
      cartDelete(){
        if(this.cartList){
                console.log(this.cartList)
          this.$store.dispatch({
            type:'cartDelete',
            params:{
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid'),
              ids:this.cartList,
              t:config.t,
            }
          })
        }
      }
    },
    beforeCreate(){
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
</script>
<style>
  #cart header{
    height:1.5rem !important;
    align-items: center;
  }
  #cart .yd-navbar-center span{
    font-size:14px !important;
  }
  #cart .shop{
    margin-bottom:110px;
  }
  #cart .shop  .yd-checklist-content{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:10px 0;
    align-items: center;
  }
  #cart .shop  .yd-checklist-content img{
    width:70px;
    height:70px;
  }
  #cart .shop  .yd-checklist-content .right{
    margin-left:10px;
    text-align: left;
    flex: 0 0 65%;
  }
  #cart .shop  .yd-checklist-content .right h6{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size:12px;

  }
  #cart .shop  .yd-checklist-content .right p{
    margin:10px 0;
  }
  #cart .shop  .yd-checklist-content .right .priceNum{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #cart .shop  .yd-checklist-content .right .priceNum span{
    color:red;
  }
  #cart .shop .checkAll{
    position: fixed;
    bottom:60px;
    width:100%;
    height:50px;
    background: #fff;
    z-index: 1;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  #cart .shop .checkAll .left{
    flex: 0 0 70%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 10px;
  }
  #cart .shop .checkAll .left .rit{
    text-align: right;
  }
  #cart .shop .checkAll .left .rit span{
    color:#ff5555;
    font-weight: bold;
  }
  #cart .shop .checkAll .left .rit p{
    font-size:10px;
    color:#969696
  }
  #cart .shop .checkAll .right{
    flex: 0 0 30%;
    background: #ff5555;
    color:#fff;
    line-height: 50px;
  }
  #cart .shop .edit{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    z-index: 1;

    width:100%;
    height:50px;
    background: #fff;
    position: fixed;
    bottom:60px;

  }
  #cart .shop .edit label{
    flex: 0 0 70%;
    text-align: left;
    padding-left: 10px;
  }
  #cart .shop .edit>div{
    flex:0 0 30%;
    background: #ccc;
    height:100%;
    color:#fff;
    line-height: 50px;
  }
  #cart .shop .edit .delete{
    margin-right:5px;
  }
  #cart .redDelete{
    background: #ff5555 !important;
    color:#fff !important;
  }
</style>
