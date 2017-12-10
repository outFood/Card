<template>
  <div id="headers">
    <img src="/static/img/sort-white.png" alt="">
    <yd-search></yd-search>
    <img src="/static/img/cart.png" alt="">
  </div>
</template>
<style>
  #headers{
    position: fixed;
    top:0;
    left:0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 0.3125rem;
    width:100%;
    background: #efbe10;
  }
  #headers img{
    width:0.78rem;
    height:0.78rem;
  }
  .yd-search-input {
    background-color: transparent;
  }
  #headers .yd-search-input:before{
    border-top:none;
  }
  #headers .yd-search-input:after{
    border-bottom:none;
  }
</style>
