<template>
  <div id="set">
    <headers title="设置"></headers>
    <yd-button size="large" type="primary" @click.native="signOut">退出登录</yd-button>
  </div>
</template>
<script>
  import router from '@/router'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    methods:{
      signOut(){
        localStorage.setItem('openid','')
        localStorage.setItem('userid','')
        router.push({path: '/vipIndex/login'})
      }
    }
  }
</script>
