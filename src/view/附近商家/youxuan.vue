<template>
  <div id="youxuan">
    <router-link  to="#" class="head">
        
        <yd-icon name="star" size=".45rem" color="rgb(255, 104, 93)"></yd-icon>
        为您优选
        <yd-icon name="star" size=".45rem" color="rgb(255, 104, 93)"></yd-icon>
        
    </router-link>
    <div class="list">
      <router-link to="#">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        <div class="desc">
           <h5>高级考拉</h5>
           <span><b>¥20.4</b><s>¥40</s></span>
        </div>
      </router-link>
      <router-link to="#">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        <div class="desc">
           <h5>高级考拉巴拿马哈哈</h5>
           <span><b>¥20.4</b><s>¥40</s></span>
        </div>
      </router-link>
      <router-link to="#">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        <div class="desc">
           <h5>高级考拉</h5>
           <span><b>¥20.4</b><s>¥40</s></span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import config from '../../myConfig'
export default{
  data (){
    return {

    }
  },

  created(){
    this.$http.get(config.baseUrl+'/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category&t=4&i=4&uniacid=4')
    .then(res =>{
       console.log(res)
    })
    .catch(error =>{
        console.log(error)
    });
  }
}
</script>

<style>
#youxuan{
    background: #fff;
    padding-bottom: 8px;
}
#youxuan .head{
  display: block;
  padding:10px 0 8px;
  font-weight: bold;
  font-size: 0.48rem;
}
#youxuan .head span{
  float: right;
  font-size:12px;
  font-weight: normal;
}
#youxuan .head img{
  width:20px;
  height:20px;
  float: right;
}
#youxuan .list{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  font-size:12px;
  align-items: center;
  justify-content: center;
}
#youxuan .list a{
  display: block;
  width: 30%;
  margin-bottom: 10px;
  margin: 0 1%;
}
#youxuan .list img{
  display: block;
  width:100%;
  height: 100px;
}

#youxuan .list .desc{
  font-size: 0.44rem;
  background: #F8F8F8;
  padding-bottom: 8px;
}

#youxuan .list .desc h5{
  padding-top: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#youxuan .list .desc span{
  font-size: 0.42rem;
  display: inline-block;
}

#youxuan .list .desc span b{
  display: inline-block;
  margin-right: 2px;
  color: rgb(255, 104, 93);
}

#youxuan .list .desc span s{
  font-size: 0.38rem;
  color: #999;
}
</style>
