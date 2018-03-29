<template>
	<div id="picturew" v-if="picturewData">
			<div class="sort1">
        <div class="pic_two" v-if="picturewData.params.row==1&&picturewData.params.length==2">
          <img :src="picturewData.params['1'].imgurl" alt="" @click="toSomewhere(picturewData.params['1'].type)">
          <img :src="picturewData.params['2'].imgurl" alt="" @click="toSomewhere(picturewData.params['2'].type)">
        </div>
        <div class="pic_three" v-if="picturewData.params.row==1&&picturewData.params.length==3">
          <img :src="picturewData.params['1'].imgurl" alt="" @click="toSomewhere(picturewData.params['1'].type)">
          <div class="right">
            <img :src="picturewData.params['2'].imgurl" alt="" @click="toSomewhere(picturewData.params['2'].type)">
            <img :src="picturewData.params['3'].imgurl" alt="" @click="toSomewhere(picturewData.params['3'].type)">
          </div>
        </div>
        <div class="pic_four" v-if="picturewData.params.row==1&&picturewData.params.length==4">
          <img :src="picturewData.params['1'].imgurl" alt="" @click="toSomewhere(picturewData.params['1'].type)">
          <div class="right">
            <img :src="picturewData.params['2'].imgurl" alt="" @click="toSomewhere(picturewData.params['2'].type)">
            <div class="bottom">
              <img :src="picturewData.params['3'].imgurl" alt="" @click="toSomewhere(picturewData.params['3'].type)">
              <img :src="picturewData.params['4'].imgurl" alt="" @click="toSomewhere(picturewData.params['4'].type)">
            </div>
          </div>
        </div>
      </div>
      <div class="sort2" v-if="picturewData.params.row==2">
        <img :src="item.imgurl" v-for="(item,key) in arrData" :key="key" @click="toSomewhere(item.type)">
      </div>
      <div class="sort3" v-if="picturewData.params.row==3">
        <img :src="item.imgurl" v-for="(item,key) in arrData" :key="key" @click="toSomewhere(item.type)">
      </div>
      <div class="sort4" v-if="picturewData.params.row==4">
        <img :src="item.imgurl" v-for="(item,key) in arrData" :key="key" @click="toSomewhere(item.type)">
      </div>
	</div>
</template>

<script>
  import router from '@/router'
  import config from '../../myConfig'
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
  },

  methods:{
    toSomewhere(type){
      console.log(type)
      if(type==5){
        this.$store.dispatch({
          type:'lookCart',
          params:{
            t:config.t,
            i:config.i,
            uniacid:config.uniacid,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid')
          }
        })
      }else if(type==2){
        this.$store.dispatch({
          type:'resSortData',
          params:{
            i:config.i,
            t:config.t,
            uniacid:config.uniacid
          }
        })
      }else if(type==3){
        router.push({path: '/sortIndex/someSort'})
      }else if(type==1){
        this.$store.dispatch({
          type:'resHomeData',
          params:{
            id:config.homeid,
            t:config.t,
            i:config.i,
            uniacid:config.uniacid
          }
        })
      }else if(type==12){
        this.$store.dispatch({
          type: 'resWode',
          params:{
            openid:localStorage.getItem('openid'),
            mid:localStorage.getItem('userid'),
            t:config.t,
            uniacid:config.uniacid,
            i:config.i
          }
        })
      }else if(type==13){
        this.$store.dispatch({
          type:'resMyOrder',
          text:'全部订单'
        })
      }else if(type==19){
        router.push({path: '/vipIndex/myLike'})
      }else if(type==20){
        router.push({path: '/vipIndex/zuji'})
      }else if(type==20){
        router.push({path: '/vipIndex/recharge'})
      }
    }
  },
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
		height:4.6875rem;
	}
  #picturew .sort1 .pic_three>img{
    width:50%;
    height:4.6875rem;
  }
  #picturew .sort1 .pic_three .right{
    width:50%;
    height:4.6875rem;
  }
  #picturew .sort1 .pic_three .right img{
    width:100%;
    height:50%;
    margin-bottom:-4px;
  }
  #picturew .sort1 .pic_four>img{
    width:50%;
    height:4.6875rem;
  }
  #picturew .sort1 .pic_four .right{
    width:50%;
    height:4.6875rem;
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
    width: 50%;
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
    height:4.6875rem;
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
    height:3.125rem;
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
    height:1.875rem;
  }
</style>
