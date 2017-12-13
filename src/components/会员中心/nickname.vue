<template>
  <div id="nickname">
    <yd-navbar title="头像/昵称">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="updatePic">
      <span>修改头像</span><img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
    </div>
    <div class="updateNickname">
      修改昵称 <span>*</span><input type="text" v-model="nickname">
    </div>
    <yd-button size="large" type="primary">保存</yd-button>
  </div>
</template>
<style>
  #nickname header{
    height:1.5rem !important;
    align-items: center;
    font-size:16px;
    font-weight: bold;
  }
  #nickname>div{
    background: #fff;
    padding: 10px;
  }
  #nickname .updatePic{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
    margin: 10px 0;
}
  #nickname .updatePic img{
    width:50px;height:50px;
  }
  #nickname .updateNickname{
    text-align: left;
    margin-bottom: 10px;
  }
  #nickname .updateNickname span{
    color:red;
    margin: 0 10px;
  }
  #nickname .updateNickname input{
    background-color: #fff;
    border: none;
    width:50%
  }
  #nickname button{
    width:90%;
    margin: 0 auto;
    font-size:14px;
  }
</style>
<script>
  export default {
    data(){
      return{
        nickname:'晴愔'
      }
    }
  }
</script>
