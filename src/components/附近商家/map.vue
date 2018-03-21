<template>
  <div id="map">
    <headers title="商户地图"></headers>
    <div id="mapContainer"></div>
    <div class="contact">
      <img :src="curSelShop.logo">
      <div><h6>{{curSelShop.merchname}}</h6><span>联系电话：{{curSelShop.tel}}</span></div>
      <a :href="'tel:'+curSelShop.tel"><img src="/static/img/phone.png" alt="" class="phone"></a>
    </div>
  </div>
</template>
<script>
  import headers from '@/components/headers'
  export default {
    components:{headers},
    computed:{
      curSelShop(){
        return this.$store.state.curSelShop
      },
    },
    methods:{
      newMap(){
        var map = new AMap.Map('mapContainer',{
          resizeEnable: true,
          zoom: 13,
          center:[this.curSelShop.lng,this.curSelShop.lat]
        });
        var infoWindow = new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)});
        var marker=new AMap.Marker({
          position:[this.curSelShop.lng,this.curSelShop.lat],
          map:map,
        });
        function markerClick(e){
          infoWindow.setContent(e.target.content);
          infoWindow.open(map, e.target.getPosition());
        }
        AMap.plugin('AMap.Geocoder',()=>{
          var geocoder = new AMap.Geocoder({
            city: ""//城市，默认：“全国”
          });
//          map.setFitView();
          geocoder.getAddress([this.curSelShop.lng,this.curSelShop.lat],function(status,result){
            if(status=='complete'){
              marker.content=result.regeocode.formattedAddress+'<a href="http://uri.amap.com/marker?" style="display: block;width:100%;border:1px solid #A3A3A3;color:#A3A3A3;font-size:0.375rem;margin:0.625rem 0 0 0;padding:5px 0;text-align: center">到这里去</a>';
              marker.on('click',markerClick);
              marker.emit('click',{target:marker});
            }
          })

        });
      }
    },
    mounted(){
      this.newMap()
    }
  }
</script>
<style>
  #map header{
    z-index: 1;
  }
  #map #mapContainer{
    width:100%;
    position: fixed !important;
    top:0;
    right:0;
    bottom: 0;
    left:0;
  }
  #map .contact{
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    z-index:1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:0.3125rem;
    align-items: center;
    background: #fff;
    padding:0.46875rem;
  }
  #map .contact div{
    flex:0 0 80%;
    text-align: left;
    padding-left:0.3125rem;
  }
  #map .contact div span{
    font-size:0.375rem;
  }
  #map .contact img:nth-child(1){
    width:1.25rem;
    height:1.25rem;
  }
  #map .contact .phone{
    width:0.9375rem;height:0.9375rem;
  }
</style>
