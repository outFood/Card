<template>
  <div id="sort">
    <header>
      <img src="/static/img/back_black.png" alt=""><yd-search></yd-search>
    </header>
    <yd-scrolltab>
      <yd-scrolltab-panel v-for="(item,key) in parent" :label="item.name" icon="demo-icons-category1" :key="key">
        <div v-if="item.isSort==true" v-for="haha in item.curSort">
          {{item.isSort}}
          分类
          <!--<img :src="prefix+item.advimg">-->
          <!--<router-link to="/sortIndex/someSort" class="sortItem" v-for="(haha,key) in sortData.children['4316']" :key="key">-->
            <!--<img :src="prefix+haha.advimg">{{haha.name}}{{haha.description}}-->
          <!--</router-link>-->
        </div>
        <div v-else>
          {{item.isSort}}
          商品信息
        </div>
      </yd-scrolltab-panel>
    </yd-scrolltab>
    <footers></footers>
  </div>
</template>
<style>
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
    width:25px;
    height:25px;
  }
  #sort .yd-scrolltab {
    position: absolute;
    top: 51px;
  }
  #sort .yd-scrolltab strong{
    display: none;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item>img{
    width:100%;
    height:100px;
    margin-top:5px
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .sortItem{
    flex: 0 0 33%;
    padding: 10px 0;
  }
  #sort .yd-scrolltab .yd-scrolltab-content-item .sortItem img{
    display: block;
    width:40px;
    height:40px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .yd-scrolltab-active{
    border-left: 2px solid red;
  }
</style>
<script>
  export default {
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
    mounted(){
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
          this.parent[i].isSort=false
        }else{
          this.parent[i].curSort=this.children[keys[i]]
          this.parent[i].isSort=true
        }
      }
      console.log(this.parent)
      console.log(this.children)

    }
  }
</script>
