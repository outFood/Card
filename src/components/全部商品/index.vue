<template>
  <div id="sort">
    <header>
      <img src="/static/img/back_black.png" alt=""><yd-search></yd-search>
    </header>
    <yd-scrolltab>
      <yd-scrolltab-panel v-for="(item,key) in parent" :label="item.name" icon="demo-icons-category1" :key="key">
        <!---->
        <span v-if="item.isSecondSort==true" class="secondSort">
          <img :src="prefix+item.advimg" v-if="item.advimg">
          <router-link to="#" class="sortItem"  v-for="(secondSort,key) in item.curSort" :key="key">
            <img :src="prefix+secondSort.thumb"  @click="resCommodityListData(secondSort.name)">{{secondSort.name}}
          </router-link>
        </span>
        <!---->
        <span v-else class="infoItem">
          <img :src="prefix+item.advimg" v-if="item.advimg">
          <div class="infoCon">
            <router-link to="#" v-for="(infoItem,key) in item.curSort" :key="key" @click.native="resCommodityDetailData(infoItem.id)">
            <img :src="prefix+infoItem.thumb">
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
    height:2.5rem;
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
    flex:0 0 90%
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
    padding: 0.3125rem 0;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .secondSort .sortItem img{
    display: block;
    width:1.25rem;
    height:1.25rem;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom:0.15rem;
  }
  .yd-scrolltab-active{
    border-left: 2px solid red;
  }
  .yd-scrolltab-active .yd-scrolltab-title{
    color:red;
  }
</style>
<script>
  export default {
    methods:{
      resCommodityListData(name){
        console.log(name)
        this.$store.dispatch({
          type:'resCommodityListData',
//          params:{
//            order:'all'
//          }
        })
      },
      resCommodityDetailData(id){
        console.log('ppp')
        this.$store.dispatch({
          type:'resCommodityDetailData',
          id:id
        })
      }
    },
    computed:{
      sortData(){
        return this.$store.state.sortData
      },
      prefix(){//轮播图片附加前缀
        return this.$store.state.prefix
      },
      parent(){
        return this.$store.state.sortData.parent
      },
      children(){
        return this.$store.state.sortData.children
      }
    },
    created(){
      var keys=[]
      for(var key in this.children){
        keys.push(key)
      }
      for(var i=0;i<this.parent.length;i++){
        var count=0;
        for(var k in this.children[keys[i]][0]){
          count++
        }
        if(count>20){
          this.parent[i].curSort=this.children[keys[i]]
          this.parent[i].isSecondSort=false
        }else{
          this.parent[i].curSort=this.children[keys[i]]
          this.parent[i].isSecondSort=true
        }
      }
      console.log(this.parent)
      console.log(this.children)

    }
  }
</script>
