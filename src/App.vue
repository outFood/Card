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
  beforeCreate(){
    var map, geolocation,me=this;
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container', {
      resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function() {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition:'RB'
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', function (complete) {
        me.$store.dispatch({
          type:'savePositionInfo',
          params:complete
        })
      });//返回定位信息
      AMap.event.addListener(geolocation, 'error', function (error) {

      });      //返回定位出错信息
    });

  }
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

