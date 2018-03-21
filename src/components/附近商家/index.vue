<template>
  <div id="fujin">
    <!--<headers title="附近商家"></headers>-->
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-list theme="1" slot="list">
        <!----------------------------------------------------------->
        <position></position>
        <search></search>
        <banner></banner>
        <sort-slide></sort-slide>
        <youxuan></youxuan>
        <shop-list></shop-list>
        <!----------------------------------------------------------->
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
  #fujin{
    padding-bottom: 80px;
  }
</style>
<script type="text/babel">
  import config from '../../myConfig'
  import position from '@/components/附近商家/position'
  import search from '@/components/附近商家/search'
  import banner from '@/components/附近商家/banner'
  import sortSlide from '@/components/附近商家/sortSlide'
  import youxuan from '@/components/附近商家/youxuan'
  import shopList from '@/components/附近商家/shopList'
  import headers from '@/components/headers'
  export default {
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
      loadList() {

//        if (this.newCommodityListData.length < 10) {
//          /* 所有数据加载完毕 */
//          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
//          return;
//        }
//        /* 单次请求数据完毕 */
//        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
      },
      pullrefresh() {
        console.log('下拉刷新')
      },
    },
    components: {headers,position,search,banner,sortSlide,youxuan,shopList},
  }
</script>
