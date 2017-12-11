<template>
  <div id="slider">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <router-link to="/shopIndex/exclusiveShop">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </router-link>
      </yd-slider-item>
    </yd-slider>

  </div>
</template>
<style scoped>
 #slider img{
   height:140px;
 }
  .yd-slider-pagination{
    bottom:1.1rem;
  }
</style>
