<template>
  <yd-navbar :title="title">
    <router-link to="#" slot="left">
      <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
    </router-link>
  </yd-navbar>
</template>
<style>
  header {
    height: 1.5rem !important;
    align-items: center;
  }
    header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
</style>
<script>
  export default {
    props:['title'],
    methods: {
      back:function () {
        this.$router.go(-1)
      }
    },
  }
</script>
