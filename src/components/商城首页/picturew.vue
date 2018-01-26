<template>
	<div id="picturew" v-if="picturewData">
			<div class="sort1">
        <div class="pic_two" v-if="picturewData.params.row==1&&picturewData.params.length==2">
          <img :src="prefix+picturewData.params['1'].imgurl" alt="">
          <img :src="prefix+picturewData.params['2'].imgurl" alt="">
        </div>
        <div class="pic_three" v-if="picturewData.params.row==1&&picturewData.params.length==3">
          <img :src="prefix+picturewData.params['1'].imgurl" alt="">
          <div class="right">
            <img :src="prefix+picturewData.params['2'].imgurl" alt="">
            <img :src="prefix+picturewData.params['3'].imgurl" alt="">
          </div>
        </div>
        <div class="pic_four" v-if="picturewData.params.row==1&&picturewData.params.length==4">
          <img :src="prefix+picturewData.params['1'].imgurl" alt="">
          <div class="right">
            <img :src="prefix+picturewData.params['2'].imgurl" alt="">
            <div class="bottom">
              <img :src="prefix+picturewData.params['3'].imgurl" alt="">
              <img :src="prefix+picturewData.params['4'].imgurl" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="sort2" v-if="picturewData.params.row==2">
        <img :src="prefix+item.imgurl" v-for="(item,key) in arrData" :key="key">
      </div>
      <div class="sort3" v-if="picturewData.params.row==3">
        <img :src="prefix+item.imgurl" v-for="(item,key) in arrData" :key="key">
      </div>
      <div class="sort4" v-if="picturewData.params.row==4">
        <img :src="prefix+item.imgurl" v-for="(item,key) in arrData" :key="key">
      </div>
	</div>
</template>

<script>
export default{
  computed:{
    picturewData(){
      for(var key in this.$store.state.homeData){
        if(this.$store.state.homeData[key].id=="picturew"){
          return this.$store.state.homeData[key]
        }
      }
    },
    arrData(){//堆叠方式比较有规律，所以把数据转成数组，好用循环
      var arrData=[];
      for(var key in this.$store.state.homeData){
        if(this.$store.state.homeData[key].id=="picturew"){
          for(var oo in this.$store.state.homeData[key].data){
            arrData.push(this.$store.state.homeData[key].data[oo])
          }
        }
      }
      return arrData
    },
    prefix(){//图标附加前缀
      return this.$store.state.prefix
    }
  },
  mounted(){
  }
}
</script>

<style>
  #picturew .sort1{
    width:100%;
  }
  #picturew .sort1>div{
    width:100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin:0;padding: 0;
  }
  #picturew .sort1 .pic_two img{
		width: 50%;
		height: 150px;
	}
  #picturew .sort1 .pic_three>img{
    width:50%;
    height:150px;
  }
  #picturew .sort1 .pic_three .right{
    width:50%;
    height:150px;
  }
  #picturew .sort1 .pic_three .right img{
    width:100%;
    height:50%;
    margin-bottom:-4px;
  }
  #picturew .sort1 .pic_four>img{
    width:50%;
    height:150px;
  }
  #picturew .sort1 .pic_four .right{
    width:50%;
    height:150px;
  }
  #picturew .sort1 .pic_four .right>img{
    width:100%;
    height:50%;
  }
  #picturew .sort1 .pic_four .right .bottom{
    width:100%;
    height:50%;
    margin-top:-4px;
  }
  #picturew .sort1 .pic_four .right .bottom img{
    width: 49%;
    height: 100%;
    margin-right: -3px;
  }
  /*///////////////*/
  #picturew .sort2{
    width:100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #picturew .sort2 img{
    width:50%;
    height:150px;
  }
  /*///////////////*/
  #picturew .sort3{
    width:100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #picturew .sort3 img{
    width:33%;
    height:100px;
  }
  /*///////////////*/
  #picturew .sort4{
    width:100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #picturew .sort4 img{
    width:25%;
    height:60px;
  }
</style>
