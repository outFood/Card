<template>
  <div>
    <div class="address-item" v-for="(item,key) in myAddressData" :key="key">
      <div @click="selAddress(item)">
        <yd-flexbox>
          <yd-flexbox-item>{{item.realname}}</yd-flexbox-item>
          <yd-flexbox-item>{{item.mobile}}</yd-flexbox-item>
        </yd-flexbox>
        <div class="address">{{item.province}}   {{item.address}}</div>
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
    <router-link to="/vipIndex/addAddress">
      <yd-button size="large" type="primary">添加新地址</yd-button>
    </router-link>


    <router-view></router-view>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data() {
      return {
        defaultAddress:''
      }
    },
    computed:{
      myAddressData(){
        return this.$store.state.myAddressData
      }
    },
    methods:{
      delAddress(id){
        this.$dialog.confirm({
          mes: '删除后无法恢复，确定要删除吗！',
          opts: () => {
            this.$store.dispatch({
              type:'resDelAddress',
              params:{
                id:id,
                mid:localStorage.getItem('userid'),
                t:config.t
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
            mid:config.mid
          }
        })
      },
      selAddress(item){
        this.$store.dispatch({
          type:'saveSelAddress',
          item:item
        })
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
    }
  }
</script>
<style scoped>
  .address-item {
    background: #fff;
    font-size: 14px !important;
    color: #3d4245;
    margin-bottom: 10px;
  }
  .address-item .yd-flexbox {
    padding: 15px;
  }
  .address-item .yd-flexbox .yd-flexbox-item:nth-child(1) {
    text-align: left;
  }
  .address-item .yd-flexbox .yd-flexbox-item:nth-child(2) {
    text-align: right;
  }
  .address-item .address {
    padding: 0px 20px 20px 15px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }
  .address-item .use {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .address-item .use .setDefault img{
    width:15px;
    height:15px;
    vertical-align: middle;
    margin-right:5px;
  }
  .address-item .use>div:nth-child(2) div {
    display: inline-block;
  }
  .address-item .use>div:nth-child(2) div:first-child {
    margin-right: 10px;
  }
  button {
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height: 50px !important;
    font-size: 16px !important;
  }
</style>
