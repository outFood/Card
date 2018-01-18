<template>
  <div id="position">
    <yd-cell-group>
      <yd-cell-item arrow>
        <span slot="left"><img src="/static/img/position_white.png" alt=""></span>
        <input slot="right" type="text" @click.stop="show1 = true" v-model="cityName" readonly id="allmap">
        <span slot="right"><img src="/static/img/triangle.png" alt=""></span>
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
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';

  export default {
    data() {
      return {
        show1: false,
        district: District,
        cityName: '定位中...',
      }
    },
    methods: {
      result1(ret) {
        this.cityName = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      loadmap() {
        const map = new AMap.Map('allmap');
      },
    },
    mounted() {
      this.loadmap();     //加载地图和相关组件formattedAddress
      var me = this;
      var mapObj = new AMap.Map('iCenter');
      mapObj.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', function (complate) {
//          me.$store.dispatch({
//            type:'saveCityName',
//            position:complate.formattedAddress
//          })
          me.cityName = complate.formattedAddress
        });//返回定位信息
        AMap.event.addListener(geolocation, 'error', function (err) {
          me.cityName = '获取位置失败'
        });      //返回定位出错信息
      })
    },
  }
</script>
