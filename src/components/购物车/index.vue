<template>
  <div id="cart">
    <yd-navbar title="我的购物车">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <router-link to="#" slot="right" @click.native="delShow=!delShow">
        <span v-if="delShow==false">编辑</span><span v-else>完成</span>
      </router-link>
    </yd-navbar>
    <div class="shop">
      <yd-checklist v-model="cartList" ref="checklistDemo" :callback="change"  :label="false">
        <yd-checklist-item v-for="(item,key) in cartData.list" :key="key" :val="item.id">
          <img :src="item.thumb">
          <div class="right">
            <h6>{{item.title}}</h6>
            <p>{{item.optiontitle}}</p>
            <div class="priceNum">
              <span>￥19.9</span>
              <span class="yd-spinner" style="height: 0.6rem; width: 2rem;">
                <a href="#" @click="addOrReduce(['减',item.total,item.goodsid,item.optionid])"></a>
                <input type="number" pattern="[0-9]*" v-model="item.total" class="yd-spinner-input">
                <a href="#" @click="addOrReduce(['加',item.total,item.goodsid,item.optionid])"></a>
              </span>
            </div>
          </div>
        </yd-checklist-item>
      </yd-checklist>
      <!--选择购买-->
      <div class="checkAll" v-if="delShow==false">
        <div class="left">
          <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">全选</yd-checkbox>
          <div class="rit">合计：<span>￥{{cartData.totalprice}}</span> <p>不含运费</p></div>
        </div>
        <div class="right">结算(3)</div>
      </div>
      <!--编辑删除-->
      <div class="edit" v-else>
        <yd-checkbox v-model="isCheckAll" shape="circle" :change="checkAll">全选</yd-checkbox>
        <div class="delete" :class="{redDelete:cartList.length}" @click='cartDelete'>删除</div>
      </div>
    </div>

    <footers></footers>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        cartList: [],
        isCheckAll: false,
        curNum:0,
        delShow:false
      }
    },
    computed:{
      cartData(){
         return this.$store.state.cartData
      }
    },
    watch: {
      cartList: {
        handler: function (val, oldVal) { console.log(val)},
        deep: true
      },
    },
    methods: {
      change(value, isCheckAll) {
        this.isCheckAll = isCheckAll;
      },
      checkAll() {
        this.isCheckAll = !this.isCheckAll;
        this.$refs.checklistDemo.$emit('ydui.checklist.checkall', this.isCheckAll);
      },
      addOrReduce(arr){//---------------------------------------
        this.$store.dispatch({//用于改变当前是加入购物车还是购买的状态
          type:'changePayStaus',
          payStatus:'加入购物车'
        })
        if(arr[0]=='加'){
          this.$store.dispatch({
            type:'cartOrPay',
            params:{
              total:parseInt(arr[1])+1,
              optionid:arr[3],
              id:arr[2],
              state:'we7sid-989f479443e701453157a809d00e2e0f',
              sign:'deed3cf80284327c2f52c9ac56b8d5d8'
            }
          })
        }else{
          this.$store.dispatch({
            type:'cartOrPay',
            params:{
              total:parseInt(arr[1])-1,
              optionid:arr[3],
              id:arr[2],
              state:'we7sid-989f479443e701453157a809d00e2e0f',
              sign:'deed3cf80284327c2f52c9ac56b8d5d8'
            }
          })
        }
      },
      cartDelete(){
        console.log(this.cartList)
        if(this.cartList){
          this.$store.dispatch({
            type:'cartDelete',
            ids:this.cartList
          })
        }
      }
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
