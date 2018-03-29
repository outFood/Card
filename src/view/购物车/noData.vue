<template>
  <div id="noData">
    <div>
      购物车是空的
      <router-link to="/shopIndex" class="goPlayer">到处逛逛</router-link>
    </div>
  </div>
</template>
<style>
  #noData>div{
    margin-top:100px;
    color:#aaa;
    font-size:16px;
  }

  #noData .goPlayer {
    display: block;
    width:80px;
    height:30px;
    line-height: 30px;
    border-radius:5px;
    margin:20px auto;
    border:1px solid #aaa;
    color:#000;
    font-size:14px;
  }
</style>
