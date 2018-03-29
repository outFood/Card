<template>
  <div id="position">
    <yd-cell-group>
      <yd-cell-item arrow>
        <span slot="left"><img src="/static/img/position_white.png" alt=""></span>
        <input slot="right" type="text" @click.stop="show1 = true" v-model="formattedAddress" readonly id="allmap">
        <!--<span slot="right"><img src="/static/img/triangle.png" alt=""></span>-->
      </yd-cell-item>
    </yd-cell-group>
    <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
  </div>
</template>
<style>
  #position .yd-cell-item {
    background: #ffb403;
  }
  #position img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  #position input {
    background: transparent !important;
    color: #fff;
    flex: 0 0 80%
  }
  #position .yd-cell:after {
    border-bottom: none;
  }
  #position .yd-cell-arrow:after {
    display: none;
  }
  #position .yd-cell-right {
    justify-content: space-around;
  }
  #position .yd-cell-box {
    margin-bottom: 0;
  }
</style>
<script type="text/babel">
  import config from '../../myConfig'
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';
  export default {
    data() {
      return {
        show1: false,
        district: District,
      }
    },
    computed:{
      formattedAddress(){
        return this.$store.state.formattedAddress?this.$store.state.formattedAddress:'定位中...'
      }
    },
    methods: {
      result1(ret) {
        this.cityName = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
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
          me.$store.dispatch({
            type:'resFujinData',
            params:{
              page:1,
              pagesize:10,
              cateid:'',
              lat:complete.position.lat,
              lng:complete.position.lng,
              uniacid:config.t,
              t:config.t,
              i:config.i,
            },
          })
        });//返回定位信息
        AMap.event.addListener(geolocation, 'error', function (error) {

        });      //返回定位出错信息
      });

    },
  }
</script>
