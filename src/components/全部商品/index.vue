<template>
  <div id="sort">
    <header>
      <img src="/static/img/back_black.png" alt=""><yd-search></yd-search>
    </header>
    <yd-scrolltab>
      <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        <router-link to="/sortIndex/someSort" class="sortItem">
          <img src="/static/img/allSort.png">普通会员
        </router-link>
        <router-link to="/sortIndex/someSort" class="sortItem">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">普通会员
        </router-link>
      </yd-scrolltab-panel>

      <!-- ... -->
    </yd-scrolltab>
    <footers></footers>
  </div>
</template>
<style>
  #sort{

  }
  #sort header{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom:1px solid #eee;
  }
  #sort header>div{
    flex:0 0 90%
  }
  #sort header form{
    background: #eee;
  }
  #sort header img{
    width:25px;
    height:25px;
  }
  #sort .yd-scrolltab {
    position: absolute;
    top: 51px;
  }
  #sort .yd-scrolltab strong{
    display: none;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item>img{
    width:100%;
    height:100px;
    margin-top:5px
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .sortItem{
    flex: 0 0 33%;
    padding: 10px 0;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .sortItem img{
    display: block;
    width:40px;
    height:40px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .yd-scrolltab-active{
    border-left: 2px solid red;
  }
</style>
<script>
  export default {
  }
</script>
