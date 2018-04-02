<template>
  <div id="sort" v-if="sortData">
    <header>
      <yd-search @click.native="toSomeSort"></yd-search>
    </header>
    <yd-scrolltab>
      <yd-scrolltab-panel v-for="(item,key) in parent" :label="item.name" icon="demo-icons-category1" :key="key" :style="{height:screenHeight+'px'}">
        <!---->
        <span v-if="item.isSecondSort==true" class="secondSort">
          <img :src="item.advimg" v-if="item.advimg">
          <router-link to="#" class="sortItem"  v-for="(secondSort,key) in item.curSort" :key="key">
            <img :src="secondSort.thumb"  @click="resCommodityListData(secondSort)">{{secondSort.name}}
          </router-link>
        </span>
        <!---->
        <span v-else class="infoItem">
          <img :src="item.advimg" v-if="item.advimg">
          <div class="infoCon">
            <router-link to="#" v-for="(infoItem,key) in item.curSort" :key="key" @click.native="resCommodityDetailData(infoItem.id)">
            <img :src="infoItem.thumb">
            <div>
              <h6>{{infoItem.title}}</h6>
              <i>￥{{infoItem.minprice}}</i>
            </div>
          </router-link>
          </div>
        </span>
        <!---->
      </yd-scrolltab-panel>
    </yd-scrolltab>
    <footers></footers>
  </div>
</template>
<style>
  .yd-search-input{
    background: #fff !important;
  }
  .yd-scrolltab-content{
    overflow-y: hidden !important;
  }
  .yd-scrolltab-content-title{
    display: none !important;
  }
  .yd-scrolltab-item{
    height:1.3rem;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .infoItem .infoCon{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .infoItem .infoCon a{
    flex: 0 0 48%;
    text-align: left;
    margin-bottom:0.3125rem;
    border:1px solid #eee;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .infoItem .infoCon a:nth-child(2n-1){
    margin-right:4%;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .infoItem .infoCon a div{
    padding:0.15rem;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .infoItem .infoCon a img{
    width:100%;
    height:3rem;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .infoItem .infoCon a h6{
    font-size:0.4rem;
    margin:0.15rem 0 0.3125rem 0;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .infoItem .infoCon a i{
    color:#ed2822;
    font-weight: bold;
  }
  <!---->
  #sort{

  }
  #sort header{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom:1px solid #eee;
  }
  #sort header>div{
    flex:0 0 100%
  }
  #sort header form{
    background: #eee;
  }
  #sort header img{
    width:0.78125rem;
    height:0.78125rem;
  }
  #sort .yd-scrolltab {
    position: absolute;
    top:1.59375rem;
    margin-bottom:1.875rem;
    word-break: break-all; word-wrap:break-word;
  }
  /*#sort .yd-scrolltab strong{*/
    /*display: none;*/
  /*}*/
  #sort .yd-scrolltab .yd-scrolltab-content-item .secondSort{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item span>img{
    width:100%;
    height:3.125rem;
    margin-top:0.15rem
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .secondSort .sortItem{
    flex: 0 0 33%;
    padding-top: 0.5rem;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .secondSort .sortItem img{
    display: block;
    width:1.55rem;
    height:1.55rem;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom:0.15rem;
  }
  .yd-scrolltab-active{
    border-left: 2px solid red;
  }
  #sort .yd-scrolltab-title{
    font-size:.5rem;
    max-width: 2rem;
  }
  .yd-scrolltab-active .yd-scrolltab-title{
    color:red;
  }
</style>
<script>
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    data(){
      return{
        screenHeight:window.screen.height
      }
    },
    methods:{
      toSomeSort(){
        router.push({path: '/sortIndex/someSort'})
      },
      resCommodityListData(secondSort){
        if(secondSort.name=='全部商品'){
          secondSort.id=0
        }
        this.$store.dispatch({
          type:'resCommodityListData',
          params:{
            page:1,
            pagesize:10,
            cate:secondSort.id,
            t:config.t,
            openid:localStorage.getItem('openid'),
            order:'',
            keywords:'',
            ishot:0,
            isnew:0,
            isdiscount:0,
            istime:0,
            isrecommand:0,
            issendfree:0,
            by:'',
            mid:0,
            frommyshop:0,
          }
        })
      },
      resCommodityDetailData(id){
        this.$store.dispatch({
          type:'resCommodityDetailData',
          params:{
            id:id,
            t:config.t,
            i:config.i,
            uniacid:config.uniacid,
            mid:config.mid,
            openid:config.openid,
          }
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    },
    computed:{
      sortData(){
        return this.$store.state.sortData
      },
      prefix(){//轮播图片前缀
        return this.$store.state.prefix
      },
      parent(){
        var keys=[]
        for(var key in this.$store.state.sortData.children){
          keys.push(key)
        }
        for(var i=0;i<this.$store.state.sortData.parent.length;i++){
          var count=0;
          for(var k in this.$store.state.sortData.children[keys[i]][0]){
            count++
            this.$store.state.sortData.children[keys[i]][0]
          }
          this.$store.state.sortData.parent[i].curSort=this.$store.state.sortData.children[keys[i]]
          if(count>20){
            this.$store.state.sortData.parent[i].isSecondSort=false
          }else{
            this.$store.state.sortData.parent[i].isSecondSort=true
          }
        }
        return this.$store.state.sortData.parent
      },
      children(){
        var keys=[]
        for(var key in this.$store.state.sortData.children){
          keys.push(key)
        }
        for(var i=0;i<this.$store.state.sortData.parent.length;i++){
          var count=0;
          for(var k in this.$store.state.sortData.children[keys[i]][0]){
            count++
            this.$store.state.sortData.children[keys[i]][0]
          }
          this.$store.state.sortData.parent[i].curSort=this.$store.state.sortData.children[keys[i]]
          if(count>20){
            this.$store.state.sortData.parent[i].isSecondSort=false
          }else{
            this.$store.state.sortData.parent[i].isSecondSort=true
          }
        }
        return this.$store.state.sortData.children
      }
    },
    beforeCreate(){

      this.$store.dispatch({
        type:'resSortData',
        params:{
          i:config.i,
          t:config.t,
          uniacid:config.uniacid
        }
      })
    }
  }
</script>
