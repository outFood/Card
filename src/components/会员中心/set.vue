<template>
  <div id="set">
    <yd-button size="large" type="primary" @click.native="signOut">退出登录</yd-button>
  </div>
</template>
<script>
  import router from '@/router'
  export default {
    methods:{
      signOut(){
        localStorage.setItem('openid','')
        localStorage.setItem('userid','')
        router.push({path: '/vipIndex/login'})
      }
    }
  }
</script>
