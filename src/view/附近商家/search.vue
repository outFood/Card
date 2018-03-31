<template>
  <div id="searchShopList">
    <!-- <input type="text" placeholder="请输入商家名称" v-model="keyword">
    <span @click="searchShop"><img :src="require('@/assets/search-white.png')" alt=""></span> -->
    <yd-flexbox>
        <div class="address">
             <div class="icon">
                <yd-icon name="location" size=".5rem" color="#FFF"></yd-icon>
             </div>
             <div class="city">
                <span>{{userCity}}</span>
             </div>
        </div>
        <div class="ipt">请输入关键词</div>  
      </yd-flexbox>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        keyword:'',
        
      }
    },
    computed:{
      lat(){
        this.$store.state.lat
      },
      lng(){
        this.$store.state.lng
      },
      userCity(){
         return this.$store.state.userCity ? this.$store.state.userCity : '定位中...'
      }
    },
    methods:{
      searchShop(){
        console.log()
        this.$store.dispatch({
          type:'resFujinData',
          params:{
            keyword:this.keyword,
            page:1,
            pagesize:10,
            cateid:'',
            t:config.t,
            uniacid:config.t,
            i:config.i,
            lat:this.lat,
            lng:this.lng
          }
        })
      }
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
<style>
  #searchShopList{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #eebc11;
    padding:10px 5px;
    color: #FFF;
  }
  #searchShopList .yd-flexbox{
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
  }

  #searchShopList .yd-flexbox .address{
    overflow: hidden;
    width: 22%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    align-items: center;
     height: 100%;
  }

  #searchShopList .yd-flexbox .address div.city{
      margin-left: 3px;
  }

  #searchShopList .yd-flexbox .ipt{
    width: 75%;
    height: 100%;
    line-height: 30px;
    margin-left: 2%;
    text-align: center;
    background: #F2F2F2;
    border-radius: 5px;
    color: #c2c2c2
  }
  
  #searchShopList img{
    width:30px;height:30px;
  }
  #searchShopList span{
    flex: 0 0 20%;
    height:40px;
    line-height: 60px;
  }
</style>
