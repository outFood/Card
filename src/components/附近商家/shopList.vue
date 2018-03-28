<template>
  <div id="shopList" :style="{height:191*Fujin_ListData.length+'px'}">
    <nav>
      <yd-accordion>
        <yd-accordion-item title="综合排序">
          <div>
            <p v-for="(item,key) in Fujin_sortData" :key="key" @click="changeCateid(item.id)">{{item.catename}}</p>
          </div>
        </yd-accordion-item>
        <yd-accordion-item title="优惠排序">
          <div>
            <p>分为冯绍峰</p>
          </div>
        </yd-accordion-item>
        <yd-accordion-item title="智能排序">
          <div>
            <p>二维若的无</p>
          </div>
        </yd-accordion-item>
      </yd-accordion>
    </nav>
    <section>
      <yd-infinitescroll :callback="loadMoreShop" ref="infinitescrollDemo">
        <yd-list theme="1" slot="list">
          <div class="listItem" v-for="(item,key) in Fujin_ListData" :key="key">
            <div class="top">
              <img :src="item.logo">
              <div class="center">
                <h6>{{item.merchname}}</h6>
                <p>地址:{{item.address}}</p>
                <p>电话:{{item.tel}}</p>
              </div>
              <div class="right">
                <router-link to="#" @click.native="resExclusiveShopData(item.id)">进店</router-link>
                1389394m
              </div>
            </div>
            <div class="bottom">
              <div @click="openMap(item)">打开地图</div>
              <div><a :href="'tel:'+item.tel">联系商家</a></div>
            </div>
          </div>
        </yd-list>
        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

      </yd-infinitescroll>
    </section>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
      }
    },
    computed:{//exclusiveShopData
      Fujin_sortData(){
        return this.$store.state.Fujin_sortData
      },
      Fujin_ListData(){
        return this.$store.state.Fujin_ListData
      },
      exclusiveShopData(){
        return this.$store.state.exclusiveShopData
      }
    },
    watch:{
      exclusiveShopData:{
        handler: function (val, oldVal) {
          console.log('val:' + val + ' - oldVal: ' + oldVal);
          // window.location.href=val
        },
        deep: true
      },
    },
    methods:{
      openMap(item){
        this.$store.dispatch({
          type:'saveCurSelShop',
          params:item
        })
      },
      resExclusiveShopData(id) {//      /fujin/exclusiveShop
        this.$store.dispatch({
          type: 'resExclusiveShopData',
          params:{
            merchid: id,
            t:config.t,
            i:config.i,
            uniacid:config.uniacid,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid'),
          }
        })
      },
      changeCateid(cateid){
        this.$store.dispatch({
          type:'changeCateid',
          cateid:cateid,
        })
      },
      loadMoreShop(){//根据当前的page和当前的分类状态
        console.log('加载更多')
        this.$store.dispatch({
          type:'loadMoreShop'
        })
        if (this.Fujin_ListData.length%10!=0) {
          /* 所有数据加载完毕 */
          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          return;
        }
        /* 单次请求数据完毕 */
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
      },
    }
  }
</script>
<style>
  #shopList{
    font-size:0.4375rem;
    position: relative;
    /*padding-bottom: 61rem;*/
    /*height:190px;*/
  }
  #shopList nav .yd-accordion .yd-accordion-head{
    width:33.3%;
    float:left;
    padding:0.1875rem 0.625rem;
    background: #fff;
  }
  #shopList nav .yd-accordion-content{
    background: #fff;
    z-index: 1000;
    width:100%;
    position: absolute;
    top:1.625rem;
  }
  #shopList nav .yd-accordion-head-content .yd-accordion-title{
    font-size:0.43rem;
  }
  #shopList nav .yd-accordion .yd-accordion-content p{
    padding: 0.3125rem 0;
    padding-right:8px;
  }
  #shopList nav .yd-accordion .yd-accordion-content p:not(:last-child){
    border-bottom: 1px solid #eee;
  }
  #shopList section{
    position: absolute;
    top:1.4rem;
    bottom:0;
    left:0;
    right:0;
  }
  #shopList section .listItem{
    background: #fff;
    margin-top:10px;
  }
  #shopList section .listItem:last-child{
    margin-bottom:100px;
  }
  #shopList section .listItem .top{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:10px;
    align-items: center;
  }
  #shopList section .listItem .top img{
    width:2.8rem;
    height:1.875rem;
  }
  #shopList section .listItem .top .center{
    text-align: left;
    flex: 0 0 53%;
    padding-left:5px;
  }
  #shopList section .listItem .top .center p{
    font-size:0.375rem;
  }
  #shopList section .listItem .top .right{
    flex: 0 0 20%;
    color:red;
    font-size:0.375rem;
  }
  #shopList section .listItem .top .right a{
    display: block;
    padding:2px 6px;
    border:1px solid red;
    border-radius: 3px;
    margin-bottom:10px
  }
  #shopList section .listItem .bottom{
    border-top:1px solid #d9d9d9;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  #shopList section .listItem .bottom>div{
    flex:0 0 50%;
    text-align: center;
    padding:10px 0;
  }
  #shopList section .listItem .bottom>div:nth-child(1){
    border-right:1px solid #d9d9d9;
  }
  #shopList section .listItem:last-child{
    margin-bottom:2.5rem;
  }
</style>
