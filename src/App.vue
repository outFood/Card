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
    font-size:0.4375rem;
  }
  body{
    background: #f5f5f5;
  }
  a{
    text-decoration: none;
    color:#444
  }
  .yd-search-input{
    background-color:transparent ;
  }
  .yd-search-input:before{
    border-top:none;
  }
  .yd-search-input:after{
    border-bottom:none;
  }
</style>

