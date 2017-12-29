<template>
  <div id="order">
    <yd-tab>
      <yd-tab-panel label="全部">

        <no-order></no-order>
      </yd-tab-panel>
      <yd-tab-panel label="待付款">

        <no-order></no-order>
      </yd-tab-panel>
      <yd-tab-panel label="待发货">

        <no-order></no-order>
      </yd-tab-panel>
      <yd-tab-panel label="待收货">

        <no-order></no-order>
      </yd-tab-panel>
      <yd-tab-panel label="退换货">

        <no-order></no-order>
      </yd-tab-panel>
    </yd-tab>
  </div>
</template>
<style>
  #order .yd-tab-panel{
    background: transparent;
  }

</style>
<script>
  import noOrder from '@/components/会员中心/noOrder'
  export default {
    data(){
      return{

      }
    },
    components:{noOrder}
  }
</script>
