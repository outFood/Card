<template>
  <div id="daili">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <form action="#">
      <p>欢迎加入 <i>E卡平台</i>，请填写申请信息</p>
      <div class="item">
        <span>姓名</span>
        <div><i>*</i><input placeholder="请填写姓名"></div>
      </div>
      <div class="item">
        <span>手机号</span>
        <div><i>*</i><input placeholder="请填写手机号"></div>
      </div>
      <div class="item">
        <span>邀请码</span>
        <div><i>*</i><input placeholder="请填写邀请码"></div>
      </div>
      <div class="item">
        <span>微信号</span>
        <div><input placeholder="请填写微信号"></div>
      </div>
      <div class="item">
        <span>代理类型</span>
        <div>
          <yd-radio-group v-model="sort" color="#F00">
            <yd-radio val="省级"></yd-radio>
            <yd-radio val="市级"></yd-radio>
            <yd-radio val="区级"></yd-radio>
            <yd-radio val="乡镇"></yd-radio>
          </yd-radio-group>
        </div>
      </div>
      <div class="item" v-if="sort.length>0">
        <span><u v-if="sort=='省级'">代理省份</u><u v-else-if="sort=='市级'">代理城市</u><u v-else-if="sort=='区级'">代理地区</u><u v-else-if="sort=='乡镇'">代理地区</u></span>
        <div><input slot="right" type="text" @click.stop="curShow = true" v-model="curSel" readonly :placeholder="curPlaceholder"></div>
        <yd-cityselect v-model="curShow" :callback="result" :items="district"></yd-cityselect>
      </div>
      <div class="item" v-if="sort=='乡镇'">
        <span>乡镇</span>
        <div><input placeholder="请填写乡镇"></div>
      </div>
      <div class="item">
        <yd-checkbox-group v-model="readed" size="30" class="xieyi">
          <yd-checkbox val=""></yd-checkbox><span style="font-size: 24px;">我已经阅读并了解了</span><u @click="show1=true">【分销商申请协议】</u>
        </yd-checkbox-group>
      </div>

      <yd-popup v-model="show1" position="center" width="90%">
        <p class="xieyiCon">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam inventore iste labore optio perferendis sunt totam vitae! Accusamus consequuntur cum dolore minus neque, officia quaerat quibusdam sint totam ut. Voluptatibus.</p>
        <p style="text-align: center;">
          <yd-button @click.native="show1 = false">我已阅读</yd-button>
        </p>
      </yd-popup>
      <yd-button size="large" type="warning">申请成为</yd-button>
      <div class="item">
        <span class="img"><img src="/static/img/tequan.png" alt=""></span>
        <div>特权</div>
      </div>
      <div class="item">
        <span class="img"><img src="/static/img/hebei.png" alt=""></span>
        <div>坐享分红 <br>成为后，您可以享受您代理的区域营业额的分红收益</div>
      </div>
    </form>
  </div>
</template>
<style>
#daili form{
  text-align: left;
  padding: 10px;
  background: #fff;
}
#daili u{
  text-decoration: none;
}
#daili form p{
  padding: 10px 0;
}
*::-webkit-input-placeholder {
  color: #b0b0b0;
  font-size:12px;
}
#daili form i{
  color:red;
}
#daili form .item{
  padding: 10px 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding:10px 0;
  border-bottom: 1px solid #eee;
}
#daili form .item span{
  flex:0 0 25% ;
}
#daili form .item input{
  border: none;
  padding-left: 10px;
}
#daili form .item img{
  width:20px;
  height:20px;
  vertical-align: middle;
}
#daili form .item .img{
  flex: 0 0 10%;
}
#daili form .yd-checkbox-icon {
  width: 15px !important;
  height: 15px !important;
}
#daili form .yd-checkbox-icon i{
  width:7px !important;
  height:9px !important;
}
#daili form .xieyi{
  flex: 0 0 100% !important;
}
#daili form .xieyi .yd-checkbox {
  display: inline;
  padding-right:5px;
}
#daili form .xieyi  span{
  font-size:14px !important;
}
#daili form .xieyi u{
  color:#2e70a2;
  text-decoration: none;
  font-weight: bold;
}
#daili .xieyiCon{
   padding:10px !important;
   text-indent: 1rem
 }
#daili form .xieyi u{
  color:#2e70a2;
  text-decoration: none;
  font-weight: bold;
}
#daili  .yd-radio {
  margin-bottom:5px;
}
</style>
<script>/* 前提是已经安装了 ydui-district */
import District from 'ydui-district/dist/jd_province_city_area_id';
  export default {
    data(){
      return{
        sort:'',
        readed: ['3'],
        //选择省
        curShow: false,
        curSel: '',
        district: District,
        curPlaceholder:'',
        show1: false,
      }
    },
    watch: {
      sort: {
        handler: function (val, oldVal) {
          this.curSel=''
          if(val=='省级'){
            this.curPlaceholder='请选择代理省份'
          }else if(val=='市级'){
            this.curPlaceholder='请选择代理城市'
          }else if(val=='区级'){
            this.curPlaceholder='请选择代理地区'
          }else if(val=='乡镇'){
            this.curPlaceholder='请选择代理地区'
          }
        },
        deep: true
      },
    },
    methods: {
      result(ret) {
        if(this.sort=='省级'){
          this.curSel = ret.itemName1;
        }else if(this.sort=='市级'){
          this.curSel =ret.itemName1+ret.itemName2;
        }else if(this.sort=='区级'){
          this.curSel =ret.itemName1+ret.itemName2 + ' ' + ret.itemName3
        }else if(this.sort=='乡镇'){
          this.curSel =ret.itemName1+ret.itemName2 + ' ' + ret.itemName3
        }
      }
    }
  }
</script>
