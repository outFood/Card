<template>
  <div id="getCoupon" :style="{background:coupon.style.background,marginTop:coupon.style.margintop+'px',marginBottom:coupon.style.margintop+'px'}">
    <div :class="{coupon:true,width33:coupon.params.couponstyle==2,width50:coupon.params.couponstyle==3}" v-for="(item,key) in myCoupon" :key="key" :style="{marginTop:coupon.style.margintop+'px',marginBottom:coupon.style.margintop+'px',marginLeft:coupon.style.marginleft+'px',marginRight:coupon.style.marginleft+'px',background:item.background,borderColor:item.bordercolor,color:item.textcolor}">
      <h6>{{item.name}}</h6>
      <h6>{{item.price}}</h6>
      <span>{{item.desc}}</span>
    </div>
  </div>
</template>
<script>
  export default {//couponstyle coupon width33
    data(){
      return{
        myCoupon:[]
      }
    },
    computed:{
      coupon(){
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=="coupon"){
            return this.$store.state.homeData[key]
          }
        }
      }
    },
    created(){
      setTimeout(()=>{
        for(var key in this.coupon.data){
          this.myCoupon.push(this.coupon.data[key])
        }
        console.log(this.myCoupon)
      },1000)
    }
  }
</script>
<style>
  #getCoupon{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  #getCoupon .coupon{
    border:1px solid #000;
    border-radius: 10px;
    padding: 8px 0;
  }
  #getCoupon .width33{
    flex: 0 0 30%;
  }
  #getCoupon .width50{
    flex: 0 0 33%;
  }
</style>
