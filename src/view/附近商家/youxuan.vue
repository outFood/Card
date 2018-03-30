<template>
  <div id="youxuan">
    <router-link  to="#" class="head">
      为您优选
      <img :src="require('@/assets/more.png')" alt="">
      <span>更多</span>
    </router-link>
    <div class="list">
      <router-link to="#">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        哈哈
      </router-link>
      <router-link to="#">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        哈哈
      </router-link>
      <router-link to="#">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        哈哈
      </router-link>
      <router-link to="#">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        哈哈
      </router-link>
    </div>
  </div>
</template>
<style>
#youxuan{
    background: #fff;
}
#youxuan .head{
  display: block;
  padding:10px;
  font-weight: bold;
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
}
#youxuan .list a{
  display: block;
  flex:0 0 33%;
  margin-bottom: 10px;
}
#youxuan .list img{
  display: block;
  width:80%;
  margin:5px auto;
}
</style>
