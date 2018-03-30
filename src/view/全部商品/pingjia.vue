<template>
  <div id="pingjia">
    <div class="nav">
      <p>宝贝评价({{evaluteTotal}})</p>
      <span @click="evaluteFilter('')" :class="{curColor:level==''}">全部({{commodityPingjiaData.count.all}})</span>
      <span @click="evaluteFilter('good')" :class="{curColor:level=='good'}">好评({{commodityPingjiaData.count.good}})</span>
      <span @click="evaluteFilter('normal')" :class="{curColor:level=='normal'}">中评({{commodityPingjiaData.count.normal}})</span>
      <span @click="evaluteFilter('bad')" :class="{curColor:level=='bad'}">差评({{commodityPingjiaData.count.bad}})</span>
      <span @click="evaluteFilter('pic')" :class="{curColor:level=='pic'}">晒图({{commodityPingjiaData.count.pic}})</span>
    </div>
    <div class="list">
      <yd-infinitescroll :callback="loadMoreList" ref="infinitescrollDemo">
        <yd-list theme="1" slot="list">
          <div class="list-item" v-for="(item,key) in commodityPingjiaSortData">
            <p class="top">
              <img :src="item.headimgurl" class="headImg">
              {{item.nickname}}
              <!--<img :src="require('@/assets/two-heart.png')" alt="" class="two-heart"/>-->
            </p>
            <div class="middle">
              <p class="colorsize">{{item.createtime}}</p>
              <p class="pingjia">{{item.content}}</p>
              <p class="imgs">
                <img :src="imgItem" v-for="(imgItem,key) in item.images[0]">
              </p>
            </div>
            <div class="bottom" v-if="item.reply_content!=''||item.reply_images.length>0">
              首次回复：{{item.reply_content}}
              <p><img :src="replyImg" alt="" v-for="(replyImg,key) in item.reply_images" :key="key"></p>
            </div>
            <div class="bottom" v-if="item.append_content!=''||item.append_images.length>0">
              追加评价：{{item.append_content}}
              <p><img :src="appendImgs" alt="" v-for="(appendImgs,key) in item.append_images" :key="key"></p>
            </div>
            <div class="bottom" v-if="item.append_reply_content!=''||item.append_reply_images.length>0">
              追加回复：{{item.append_reply_content}}
              <p><img :src="appendImg" alt="" v-for="(appendImg,key) in item.append_reply_images" :key="key"></p>
            </div>
          </div>
        </yd-list>
        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

      </yd-infinitescroll>

    </div>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        level:''
      }
    },
    computed:{
      commodityPingjiaData(){
        return this.$store.state.commodityPingjiaData
      },
      commodityPingjiaSortData(){
        return this.$store.state.commodityPingjiaSortData
      },
      evaluteTotal(){
        return this.$store.state.evaluteTotal
      },
      commodityDetailData(){
        return this.$store.state.commodityDetailData
      }
    },
    methods:{
      loadMoreList(){//根据当前的page和当前的分类状态
        console.log('哈哈')
        this.$store.dispatch({
          type:'loadMoreEvalute',
          id:this.commodityDetailData.result.goods.id
        })
        if (this.commodityPingjiaSortData.length%10!=0) {
          /* 所有数据加载完毕 */
          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          return;
        }
        /* 单次请求数据完毕 */
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
      },
      evaluteFilter(level){
        this.level=level
        this.$store.dispatch({
          type:'evaluteFilter',
          params:{
            level:level,
            id:this.commodityDetailData.result.goods.id,
            t:config.t,
            page:1,
            pagesize:10
          }
        })
      }
    }
  }
</script>
<style>
  .curColor{
    background: red !important;color:#fff !important;
  }
  #pingjia{
    text-align:left;
  }
  #pingjia .nav{
    padding: 10px;
    background: #fff;
  }
  #pingjia .nav p{
  }
  #pingjia .nav span{
    display: inline-block;
    background: #fbebeb;
    color:#665953;
    padding:2px 10px;
    border-radius: 3px;
    margin:10px 0;
  }
.yd-tab-panel{
    background: #fafafa !important;
  }
  .yd-tab-panel .list-item{
  background: #fff;
    padding:10px;
    margin-bottom: 10px;
}
  #pingjia .list{

  }
  #pingjia .list .list-item{

  }
  #pingjia .list .list-item .top{

  }
  #pingjia .list .list-item .top .headImg{
    width:1.25rem;height:1.25rem;
    border-radius: 50%;vertical-align: middle;
  }
  #pingjia .list .list-item .top .two-heart{
    width:0.625rem;height:0.625rem;
  }
  #pingjia .list .list-item .middle{

  }
  #pingjia .list .list-item .middle .colorsize{
    color:#8a8a8a;font-size:0.375rem;margin:0.46875rem 0;
  }
  #pingjia .list .list-item .middle .pingjia{
    line-height:0.78125rem;
  }
  #pingjia .list .list-item .middle .imgs{
    margin:0.46875rem 0;
  }
  #pingjia .list .list-item .middle .imgs img{
    width:32%;
    height:2.3125rem;
  }
  #pingjia .list .list-item .bottom{
    background: #fafafa;
    padding:10px;
  }
  #pingjia .list .list-item .bottom img{
    width:32%;
    height:2.3125rem;
    margin-top:10px;
  }
  #pingjia .list .list-item .bottom img:not(:last-child){
    margin-right:5px;
  }
</style>
