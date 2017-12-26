<template>
  <div id="fujin">
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-list theme="1" slot="list">
        <yd-pullrefresh :callback="pullrefresh" ref="pullrefreshDemo">
          <!----------------------------------------------------------->
          <yd-cell-group id="position">
            <yd-cell-item arrow>
              <span slot="left"><img src="/static/img/position_white.png" alt=""></span>
              <input slot="right" type="text" @click.stop="show1 = true" v-model="cityName" readonly id="allmap">
              <span slot="right"><img src="/static/img/triangle.png" alt=""></span>
            </yd-cell-item>
          </yd-cell-group>
          <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
          <!---->
          <div id="sort">
            <div class="part1">
              <div class="sortItem" v-for="(item,key) in part1" @click="setCurSelSort([item.catename,item.id])"><img :src="item.thumb" alt="">{{item.catename}}</div>
            </div>
            <span class="lookMore" @click="lookMore" v-if="part2.length>0">查看更多</span>
            <div class="part2" v-if="part2Show">
              <div class="sortItem" v-for="(item,key) in part2" :key="key"><img :src="item.thumb" alt="">{{item.catename}}</div>
            </div>
          </div>
          <!---->
          <div id="Fujin_List">
            <yd-accordion>
              <yd-accordion-item :title="'当前选择:  '+curSelSort">
                <div style="padding: .24rem;">
                  <p v-for="(item,key) in Fujin_sortData2" @click="setCurSelSort([item.catename,item.id])">{{item.catename}}</p>
                </div>
              </yd-accordion-item>
            </yd-accordion>
            <div class="list">
              <router-link to="#" class="listItem" v-for="(item,key) in Fujin_ListData.result.list" :key="key" @click.native="resExclusiveShopData(item.id)">
                <img src="http://weixinxiaochengxun.oss-cn-beijing.aliyuncs.com/attachment/images/1041/2017/11/CFEu5vse16xVSgWgEXUnwe01PuZa0y.jpg" alt="">
                <div class="middle">
                  <h6>{{item.merchname}}</h6>
                  <p>地址：{{item.address}}</p>
                  <p>电话：{{item.tel}}</p>
                  <p>分类：{{item.desc}}</p>
                </div>
                <div class="right">
                  <p>1000km</p>
                  <img src="/static/img/position.png" alt="">
                  <img src="/static/img/phone.png" alt="">
                </div>
              </router-link >
            </div>
          </div>
          <!----------------------------------------------------------->`
        </yd-pullrefresh>
      </yd-list>
      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
      <!-- 加载中提示，不指定，将显示默认加载中图标 -->
      <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
    </yd-infinitescroll>
    <footers></footers>
  </div>
</template>
<style>
  #fujin>div:nth-child(1){
    margin-bottom: 60px;
  }
  #fujin #position .yd-cell-item{
    background: #ffb403;
  }
  #fujin #position img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #fujin #position input{
    background: transparent !important;
    color:#fff;
    flex:0 0 80%
  }
  #fujin #position .yd-cell:after{
    border-bottom: none;
  }
  #fujin #position .yd-cell-arrow:after{
    display: none;
  }
  #fujin #position .yd-cell-right{
    justify-content: space-around;
  }
  #fujin #position .yd-cell-box{
    margin-bottom: 0;
  }
  #fujin #sort{
    background: #fff;
    color:#2b2b2b;
    padding: 10px 0;
    padding-bottom:50px;
    font-size:12px;
    position: relative;
    margin-bottom:10px;
  }
  #fujin #sort>div{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  #fujin #sort .sortItem{
    flex: 0 0 25%;
    margin-bottom:10px;
  }
  #fujin #sort .sortItem img{
    width:50px;
    height:50px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
  }
  #fujin #sort .lookMore{
    position: absolute;
    bottom:10px;
    left:37%;
    border:1px solid blue;
    padding:5px 15px;
    border-radius: 15px;
    color:blue;
  }
  #fujin #Fujin_List .yd-accordion p{
    border-bottom:1px solid #eee;
    padding:5px 0;
  }
  #fujin #Fujin_List .yd-accordion-content div{
    padding: 0 !important;
  }
  #fujin #Fujin_List .yd-accordion-head-content span{
    font-weight: bold;
  }
  #fujin #Fujin_List .list{
    padding:0 10px;
    background: #fff;
    font-size:12px;
  }
  #fujin #Fujin_List .list .listItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:10px 0;
    border-bottom:1px solid #eee;
  }
  #fujin #Fujin_List .list .listItem>img{
    width:25%;
    height:60px;
  }
  #fujin #Fujin_List .list .listItem .middle{
    width:55%;
    text-align: left;
    padding-left: 10px;
  }
  #fujin #Fujin_List .list .listItem .middle p{
    width:100%;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
  #fujin #Fujin_List .list .listItem .right{
    width:20%;
  }
  #fujin #Fujin_List .list .listItem .right img{
    display: block;
    width:16px;
    height:16px;
    margin:0 auto;
    margin-top: 10px;

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
        cityName:'定位中...',
        part2Show:false,
        part1:[],
        part2:[],
        curSelSort:'全部'
      }
    },
    computed:{
      Fujin_sortData(){
        return this.$store.state.Fujin_sortData
      },
      Fujin_sortData2(){
        return this.$store.state.Fujin_sortData
      },
      Fujin_ListData(){
        return this.$store.state.Fujin_ListData
      }
    },
    created(){
      if(this.Fujin_sortData.length>8){
        this.part1=this.Fujin_sortData.splice(0,8)
        this.part2=this.Fujin_sortData
      }else{
        this.part1=this.Fujin_sortData
        console.log('小于8')
      }
    },
    methods: {
      lookMore(){
        this.part2Show=!this.part2Show
      },
      setCurSelSort(items){
        console.log(items)
        this.curSelSort=items[0]
        this.$store.dispatch({
          type:'resFujinData',
          id:items[1]
        })
      },
      loadList() {
        console.log('上拉加载')

      },
      pullrefresh() {
        console.log('下拉刷新')
      },
      result1(ret) {
        this.cityName = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      loadmap(){
        const map = new AMap.Map('allmap');
      },
      resExclusiveShopData(id){
        this.$store.dispatch({
          type:'resExclusiveShopData',
          id:id
        })
      }
    },

    mounted(){
      this.loadmap();     //加载地图和相关组件formattedAddress
      var me=this;
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
          zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', function (complate) {
//          me.$store.dispatch({
//            type:'saveCityName',
//            position:complate.formattedAddress
//          })
          me.cityName=complate.formattedAddress
        });//返回定位信息
        AMap.event.addListener(geolocation, 'error', function (err) {
          me.cityName='获取位置失败'
        });      //返回定位出错信息
      })
    }
  }
</script>
