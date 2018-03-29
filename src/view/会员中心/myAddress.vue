<template>
  <div id="myAddress">
    <yd-navbar title="收货地址">
      <router-link :to="toPath" slot="left" replace>
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="address-item" v-for="(item,key) in myAddressData" :key="key">
      <div @click="selAddress(item)">
        <yd-flexbox>
          <yd-flexbox-item>{{item.realname}}</yd-flexbox-item>
          <yd-flexbox-item>{{item.mobile}}</yd-flexbox-item>
        </yd-flexbox>
        <div class="address">{{item.province}} {{item.city}} {{item.area}} {{item.address}}</div>
      </div>
      <div class="use">
        <div class="setDefault" @click="setDefaultAddress(item.id)"><img src="/static/img/selected.png" alt="" v-if="item.isdefault==1"><img src="/static/img/circle.png" alt="" v-else>设为默认地址</div>
        <div>
          <div @click="delAddress(item.id)">
            <yd-icon name="delete"></yd-icon>
            删除
          </div>
          <router-link to="#" @click.native="saveWantEditAddress(item)">
            <yd-icon name="feedback"></yd-icon>
            <span>编辑</span></router-link>
        </div>
      </div>
    </div>
    <router-link to="#" @click.native="addAddress">
      <yd-button size="large" type="primary">添加新地址</yd-button>
    </router-link>
  </div>
</template>
<script>
  import config from '../../myConfig'
  import router from '@/router'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data() {
      return {
        defaultAddress:'',
        toPath:'/sortIndex/detail',//用来记录应该回退的地址
      }
    },
    computed:{
      myAddressData(){
        return this.$store.state.myAddressData
      },
      changeAddress(){
        return this.$store.state.changeAddress
      }
    },
    methods:{
      addAddress(){
        if(this.myAddressData.length<20){
          router.push({path: '/vipIndex/addAddress'})
        }else{
          this.$dialog.toast({
            mes: '单个用户最多可添加20个收货地址！',
            timeout: 1500
          });
        }
      },
      delAddress(id){
        this.$dialog.confirm({
          mes: '删除后无法恢复，确定要删除吗！',
          opts: () => {
            this.$store.dispatch({
              type:'resDelAddress',
              params:{
                id:id,
                mid:localStorage.getItem('userid'),
                t:config.t,
                openid:localStorage.getItem('openid'),
                uniacid:config.uniacid,
              }
            })
          },
        });
      },
      saveWantEditAddress(item){
        this.$store.dispatch({
          type:'saveWantEditAddress',
          params:item
        })
      },
      setDefaultAddress(id){
        this.defaultAddress=id
        this.$store.dispatch({
          type:'defaultAddress',
          params:{
            id:id,
            t:config.t,
            mid:config.mid,
            openid:localStorage.getItem('openid'),
            uniacid:config.uniacid
          }
        })
      },
      selAddress(item){
        this.$store.dispatch({
          type:'saveSelAddress',
          item:item
        })
      },
      back:function () {
        this.$router.go(-1)
      },
      back(){

      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resAddress',
        params:{
          t:config.t,
          mid:localStorage.getItem('userid')
        }
      })
    },
    mounted(){
      if(this.changeAddress==true){//当用户是从下单页进入地址列表页的时候，点击回退按钮就回退到下单页，否则就回退到会员中心页
        this.toPath='/sortIndex/buyPage'
      }else{
        this.toPath='/vipIndex'
      }
    }
  }
</script>
<style scoped>
  #myAddress{
    margin-bottom: 60px;
  }
  #myAddress .address-item {
    background: #fff;
    font-size: 0.4375rem !important;
    color: #3d4245;
    margin-bottom:0.3125rem;
  }
  #myAddress .address-item .yd-flexbox {
    padding:0.46875rem;
  }
  #myAddress .address-item .yd-flexbox .yd-flexbox-item:nth-child(1) {
    text-align: left;
  }
  #myAddress .address-item .yd-flexbox .yd-flexbox-item:nth-child(2) {
    text-align: right;
  }
  #myAddress .address-item .address {
    padding: 0px 0.625rem 0.625rem 0.46875rem;
    border-bottom: 1px solid #eee;
    text-align: left;
  }
  #myAddress .address-item .use {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.3125rem;
  }
  #myAddress .address-item .use .setDefault img{
    width:0.46875rem;
    height:0.46875rem;
    vertical-align: middle;
    margin-right:5px;
  }
  #myAddress .address-item .use>div:nth-child(2) div {
    display: inline-block;
  }
  #myAddress .address-item .use>div:nth-child(2) div:first-child {
    margin-right:0.3125rem;
  }
  #myAddress button {
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height: 1.5625rem !important;
    font-size: 0.5rem !important;
  }
</style>
