<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
  },
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
html{
  font-size:32px !important;
}
  body{
    background: #fafafa;
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

