<template>
  <div id="shopList" :style="{height:103*Fujin_ListData.length+70 +'px'}">
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
              <span class="distance">
                    <yd-icon name="location" size=".4rem" color="#999"></yd-icon>
                    <i>{{item.distance}}</i>
              </span>
              <div class="center">
                <h6>{{item.merchname}}
                  
                </h6>
                <div class="classify">{{item.catename}} |</div>
                <div class="sale">
                    <span class="starbox">
                        <yd-icon name="star" size=".4rem" color="rgb(255, 104, 93)"></yd-icon>
                        <yd-icon name="star" size=".4rem" color="rgb(255, 104, 93)"></yd-icon>
                        <yd-icon name="star" size=".4rem" color="rgb(255, 104, 93)"></yd-icon>
                        <yd-icon name="star" size=".4rem" color="rgb(255, 104, 93)"></yd-icon>
                        <yd-icon name="star" size=".4rem" color="rgb(255, 104, 93)"></yd-icon>
                    </span>
                    <span>{{item.score}}分</span>
                    <span>已成交{{item.orderTatle}}单</span>
                </div>
              </div> 
            </div>
            
          </div>
        </yd-list>
        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">已加载全部~~</span>
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
    margin-top: 0.3125rem;
    font-size:0.4375rem;
    position: relative;
    /*padding-bottom: 61rem;*/
    /*height:190px;*/
  }
  #shopList nav .yd-accordion .yd-accordion-head{
    width:33.3%;
    float:left;
    padding:0.1rem 0;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #999;
  }

  .yd-accordion-head-content {
      -webkit-box-flex: none;
      -ms-flex: none;
      flex: none;
      margin-right: 5px;
  }
  #shopList nav .yd-accordion-content{
    background: #fff;
    z-index: 1000;
    width:100%;
    position: absolute;
    top:1.25rem;
    flex: none;
  }
  #shopList .yd-accordion-title-full {
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
}
  #shopList nav .yd-accordion-head-content .yd-accordion-title{
    font-size:0.43rem;
  }
  #shopList nav .yd-accordion .yd-accordion-content p{
    padding:0.3125rem 8px;
    text-align: left;
  }
  #shopList nav .yd-accordion .yd-accordion-content p:not(:last-child){
    border-bottom: 1px solid #eee;
  }
  #shopList section{
    position: absolute;
    top:1.25rem;
    bottom:0;
    left:0;
    right:0;
  }
  #shopList section .listItem{
    background: #fff;
    margin-bottom:5px;
  }
  /*#shopList section .listItem:last-child{
    margin-bottom:100px;
  }*/
  #shopList section .listItem .top{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:10px;
    align-items: center;
    position: relative;
  }
  #shopList section .listItem .top img{
    width:2.4rem;
    height:2.4rem;
    background: #F2F2F2;
  }
   #shopList section .listItem .top .distance{
    font-size: 0.42rem;
    display: block;
    position: absolute;
    right: 10px;
    top: 12px;
    color: #999;
  }

  #shopList section .listItem .top .center{
    text-align: left;
    padding-left:10px;
    width: 100%;
  }

  #shopList section .listItem .top .center h6{
    font-weight: bold;
    font-size: 0.52rem;
    
  }

 
  #shopList section .listItem .top .center .classify{
    color: #888;
    margin-top: 0.05rem
  }
  #shopList section .listItem .top .center .sale{
    margin-top: 0.3rem;
  }

  #shopList section .listItem .top .center .sale span{
    display: inline-block;
    margin-right: 4px;
    color: #666;
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
  /*#shopList section .listItem:last-child{
    margin-bottom:2.5rem;
  }*/
</style>
