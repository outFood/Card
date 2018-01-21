<template>
  <div id="fujin">
    <!--<yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">-->
      <!--<yd-list theme="1" slot="list">-->
        <!--<yd-pullrefresh :callback="pullrefresh" ref="pullrefreshDemo">-->
          <!--&lt;!&ndash;-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;-->
          <!---->
        <!--</yd-pullrefresh>-->
      <!--</yd-list>-->
      <!--&lt;!&ndash; 数据全部加载完毕显示 &ndash;&gt;-->
      <!--<span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>-->
      <!--&lt;!&ndash; 加载中提示，不指定，将显示默认加载中图标 &ndash;&gt;-->
      <!--<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>-->
    <!--</yd-infinitescroll>-->
    <position></position>
    <banner></banner>
    <menu2></menu2>
    <youxuan></youxuan>
    <shop-list></shop-list>
    <footers></footers>
  </div>
</template>
<style>
  #fujin{
    padding-bottom: 300px;
  }
</style>
<script type="text/babel">
  import config from '../../myConfig'
  import position from '@/components/附近商家/position'
  import banner from '@/components/附近商家/banner'
  import menu2 from '@/components/商城首页/menu2'
  import youxuan from '@/components/附近商家/youxuan'
  import shopList from '@/components/附近商家/shopList'
  export default {
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
      loadList() {
        console.log('上拉加载')

      },
      pullrefresh() {
        console.log('下拉刷新')
      },
      resExclusiveShopData(id) {
        this.$store.dispatch({
          type: 'resExclusiveShopData',
          params:{
            merchid: id,
            t:config.t
          }
        })
      }
    },
    components: {position,banner,menu2,youxuan,shopList},
    beforeCreate(){
      console.log('哈哈哈')
      this.$store.dispatch({
        type:'resFujinData'
      })
    }
  }
</script>
