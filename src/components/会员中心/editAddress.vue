<template>
  <div id="editAddress">
    <form action="#">
      <div class="item">
        <span>收件人</span>
        <div><input placeholder="请填写收件人姓名" v-model="wantEditAddress.realname"></div>
      </div>
      <div class="item">
        <span>联系电话</span>
        <div><input placeholder="请填写联系电话" v-model="wantEditAddress.mobile"></div>
      </div>
      <div class="item">
        <span>所在地区</span>
        <div><input placeholder="请选择所在地区" v-model="wantEditAddress.province"></div>
      </div>
      <div class="item">
        <span>详细地址</span>
        <div><input placeholder="街道、楼牌号等" v-model="wantEditAddress.address"></div>
      </div>
    </form>
    <yd-button size="large" type="primary" @click.native="updateAddress">保存地址</yd-button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
      }
    },
    computed:{
      wantEditAddress(){
        return this.$store.state.wantEditAddress
      }
    },
    methods:{
      updateAddress(){
        this.$store.dispatch({
          type:'updateAddress',
          params:{
            id:this.wantEditAddress.id,
            address:this.wantEditAddress.address,
            areas:this.wantEditAddress.province,
            mobile:this.wantEditAddress.mobile,
            realname:this.wantEditAddress.realname
          }
        })
      }
    }
  }
</script>
<style>
  #editAddress form{
    text-align: left;
    padding: 10px;
    background: #fff;
  }
  #editAddress form i{
    color:red;
  }
  #editAddress form .item{
    padding: 10px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  #editAddress form .item span{
    flex:0 0 25% ;
  }
  #editAddress form .item>div{
    flex:0 0 70%;
  }
  #editAddress form .item input{
    border: none;
    padding-left: 5px;
    width:95%;
  }
  *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:12px;
  }
  #editAddress button {
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height: 50px !important;
    font-size: 16px !important;
  }
</style>

