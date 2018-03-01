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
    computed:{
      positionInfo(){
        return this.$store.state.positionInfo
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
    mounted(){
      this.cityName=this.positionInfo.formattedAddress
    }
  }
</script>
