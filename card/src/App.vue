<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @font-face {
    font-family: footericon;
    src: url("../static/fontwaimai.ttf") format("truetype");
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
  }
  body{
    background: #f5f5f5;
  }
  a{
    text-decoration: none;
    color:#444
  }
</style>

