<template>
  <div id="footers">
    <div v-for="(item,key) in footerMsg" :key="key">
      <router-link  to="#">
        <img :src="item.ico" alt="" @click="resData(item.path)">
        <div>
          {{item.name}}
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
  import router from '@/router'
  import config from '../myConfig'
  export default {
    data() {
      return {
        footerMsg: [{
          name: '商城首页',
          ico: '/static/img/shopIndex.png',
          path: '/shopIndex/'
        }, {
          name:'全部商品',
          path: '/sortIndex/',
          ico: '/static/img/sort.png'
        },{
          name: 'E聊',
          ico: '/static/img/eChart.png',
          path: '/eChart/'
        }, {
          name:'附近商家',
          ico: '/static/img/fujin.png',
          path: '/fujin/'
        }, {
          name:'购物车',
          ico: '/static/img/cart_black.png',
          path: '/cart/'
        }, {
          name: '会员中心',
          ico: '/static/img/vip.png',
          path: '/vipIndex/'
        }],
      tipBoxShow:false
      }
    },
    methods:{
      loadmap() {
        const map = new AMap.Map('allmap');
      },
      resData(path){
        var type='',
        path=path.replace('/','')//去掉前面的
        path=path.replace('/','')//去掉后面的
        if(path=='shopIndex'){//请求首页
          this.$store.dispatch({
            type:'resHomeData',
            params:{
              id:config.homeid,
              t:config.t,
              uniacid:config.uniacid
            }
          })
        }else if(path=='sortIndex'){//请求分类
          this.$store.dispatch({
            type:'resSortData'
          })
        }else if(path=='eChart'){//请求E聊
          console.log('eChart')
        }else if(path=='fujin'){//请求附近
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
              me.$store.dispatch({
                type:'resFujinData',
                params:{
                  page:1,
                  pagesize:10,
                  cateid:'',
                  t:config.t,
                  uniacid:config.t,
                  i:config.i,
                  lat:complate.position.lat,
                  lng:complate.position.lng
                },
                positionInfo:complate
              })
            });//返回定位信息
            AMap.event.addListener(geolocation, 'error', function (err) {
              me.cityName = '获取位置失败'
            });      //返回定位出错信息
          })
        }else if(path=='cart'){
          this.$store.dispatch({
            type:'lookCart',
            params:{
              t:config.t,
              uniacid:config.uniacid,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid')
            }
          })
        }else{//请求个人中心
          console.log('个人中心')
          this.$store.dispatch({
            type: 'resWode',
            params:{
              openid:localStorage.getItem('openid'),
              mid:localStorage.getItem('userid'),
              t:config.t,
              uniacid:config.uniacid
            }
          })
        }
      }
    },
  }
</script>
<style>
#footers{
  z-index: 100;
  position: fixed;
  bottom:-1px;
  left:0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 5px;
  width:100%;
  background: #fff;
  box-shadow:    0px -3px 0px 0px rgba(0,0,0,0.01)  /*设置上阴影*/
}
#footers>div{
  -webkit-box-flex: 0;
  -ms-flex: 0 0 14.2%;
  flex: 0 0 16.6%;
}
#footers a{
  color:#707070;
  font-size:12px;
}
#footers a img{
  width:25px;
  height:25px;
}
#footers div:nth-child(3) img{
  width:38px !important;
}
</style>

