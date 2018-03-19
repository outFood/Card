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
        <div><i>*</i><input placeholder="请填写姓名" v-model="realname"></div>
      </div>
      <div class="item">
        <span>手机号</span>
        <div><i>*</i><input placeholder="请填写手机号" v-model="mobile"></div>
      </div>
      <div class="item">
        <span>邀请码</span>
        <div><i>*</i><input placeholder="默认邀请码为621666" v-model="code"></div>
      </div>
      <div class="item">
        <span>微信号</span>
        <div><input placeholder="请填写微信号" v-model="weixin"></div>
      </div>
      <div class="upload">
        上传代理资质

        <img class="picture" v-for="item in headerImage" :src="item"></img>
        <input type="file" id="upload" accept="image/*" @change="upload" onchange="var formdata = new FormData();formdata=this.files;">
        <span class="addMore">+</span>
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
        <div><input placeholder="请填写乡镇" v-model="township"></div>
      </div>
      <div class="item">
        <yd-checkbox-group v-model="readed" size="30" class="xieyi">
          <yd-checkbox val=""></yd-checkbox><span style="font-size:0.75rem;">我已经阅读并了解了</span><u @click="show1=true">【代理商申请协议】</u>
        </yd-checkbox-group>
      </div>

      <yd-popup v-model="show1" position="center" width="90%">
        <p class="xieyiCon">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam inventore iste labore optio perferendis sunt totam vitae! Accusamus consequuntur cum dolore minus neque, officia quaerat quibusdam sint totam ut. Voluptatibus.</p>
        <p style="text-align: center;">
          <yd-button @click.native="show1 = false">我已阅读</yd-button>
        </p>
      </yd-popup>
      <yd-button size="large" type="warning" @click.native="registAgent">申请成为</yd-button>
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
  padding:0.3125rem;
  background: #fff;
}
#daili u{
  text-decoration: none;
}
#daili form p{
  padding:0.3125rem 0;
}
*::-webkit-input-placeholder {
  color: #b0b0b0;
  font-size:0.375rem;
}
#daili form i{
  color:red;
}
#daili form .item{
  padding:0.3125rem 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding:0.3125rem 0;
  border-bottom: 1px solid #eee;
}
#daili form .item span{
  flex:0 0 25% ;
}
#daili form .item input{
  border: none;
  padding-left:0.3125rem;
}
#daili form .item img{
  width:0.625rem;
  height:0.625rem;
  vertical-align: middle;
}
#daili form .item .img{
  flex: 0 0 10%;
}
#daili form .yd-checkbox-icon {
  width: 0.46875rem !important;
  height: 0.46875rem !important;
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
  font-size:0.4375rem !important;
}
#daili form .xieyi u{
  color:#2e70a2;
  text-decoration: none;
  font-weight: bold;
}
#daili .xieyiCon{
   padding:0.3125rem !important;
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
#daili form .upload{
  text-align: left;background: #fff;padding:0.3125rem 0.3125rem 0.3125rem 0;
  position: relative;width:100%;height:2.5rem;
  border-bottom: 1px solid #eee;
}
#daili form .upload img{
  width:1.875rem;height:1.875rem;vertical-align: middle;
}
#daili form .upload input{
  opacity: 0;position: absolute;top: 0;right: 0px;height:100%;width:100%;z-index: 100
}
#daili form .upload .addMore{
  display: inline-block;
  width:1.25rem;
  height:1.25rem;
  border:1px solid #eee;
  margin: 0 auto;
  line-height:1.25rem;
  text-align: center;
  color:#eee;
  font-size:1.25rem;
}
</style>
<script>
  import Exif from 'exif-js'
  import config from '../../myConfig'
  /* 前提是已经安装了 ydui-district */
import District from 'ydui-district/dist/jd_province_city_area_id';
  export default {
    data(){
      return{
        sort:'',
        readed: ['3'],
        isReaded:false,
        headerImage:[], picValue: '',
        nickname:'',
        //选择省
        curShow: false,
        curSel: '',
        district: District,
        curPlaceholder:'',
        show1: false,
        realname:'吴巧红',
        mobile:'15658163225',
        code:'',
        weixin:'1741432444',
        aagenttype:0,//0是用户没有选择代理类型时候的默认值
        province:'',
        city:'',
        area:'',
        township:'',
        tipMsg:'',
      }
    },
    computed:{
      registAgentMsg(){
        return this.$store.state.registAgentMsg
      }
    },
    watch: {
      sort: {
        handler: function (val, oldVal) {
          if(val=='省级'){
            this.aagenttype=1;
            this.curPlaceholder='请选择代理省份'
          }else if(val=='市级'){
            this.aagenttype=2;
            this.curPlaceholder='请选择代理城市'
          }else if(val=='区级'){
            this.aagenttype=3;
            this.curPlaceholder='请选择代理地区'
          }else if(val=='乡镇'){
            this.aagenttype=4;
            this.curPlaceholder='请选择代理地区'
          }
          console.log(this.aagenttype)
        },
        deep: true
      },
      readed: {
        handler: function (val, oldVal) {
          if(val.length==1){
            this.isReaded=false
          }else{
            this.isReaded=true
          }
        },
        deep: true
      },
    },
    methods: {
      result(ret) {
        if(this.sort=='省级'){
          this.curSel = ret.itemName1;
          this.province=ret.itemName1
        }else if(this.sort=='市级'){
          this.curSel =ret.itemName1+ret.itemName2;
          this.province=ret.itemName1;
          this.city=ret.itemName2;
        }else if(this.sort=='区级'){
          this.curSel =ret.itemName1+ret.itemName2 + ' ' + ret.itemName3
          this.province=ret.itemName1;
          this.city=ret.itemName2;
          this.area=ret.itemName3;
        }else if(this.sort=='乡镇'){
          this.curSel =ret.itemName1+ret.itemName2 + ' ' + ret.itemName3
          this.province=ret.itemName1;
          this.city=ret.itemName2;
          this.area=ret.itemName3;
        }
      },
      upload(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.picValue = files[0];
        this.imgPreview(this.picValue);
      },
      imgPreview(file) {
        let self = this;
        let Orientation;
        //去获取拍照时的信息，解决拍出来的照片旋转问题
        Exif.getData(file, function () {
          Orientation = Exif.getTag(this, 'Orientation');
        });
        // 看支持不支持FileReader
        if (!file || !window.FileReader) return;

        if (/^image/.test(file.type)) {
          // 创建一个reader
          let reader = new FileReader();
          // 将图片2将转成 base64 格式
          reader.readAsDataURL(file);
          // 读取成功后的回调
          reader.onloadend = function () {
            let result = this.result;
            let img = new Image();
            img.src = result;
            //判断图片是否大于5K,是就直接上传，反之压缩图片
            if (this.result.length <= (1 * 1024)) {
              self.headerImage.push(this.result);
//              self.postImg();点击保存按钮才调用接口保存图片和昵称
            } else {
              img.onload = function () {
                let data = self.compress(img, Orientation);
                self.headerImage.push(data);
//                self.postImg();点击保存按钮才调用接口保存图片和昵称
              }
            }
          }
        }
      },
      rotateImg(img, direction, canvas) {
        //最小与最大旋转方向，图片旋转4次后回到原方向
        const min_step = 0;
        const max_step = 3;
        if (img == null) return;
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错
        let height = img.height;
        let width = img.width;
        let step = 2;
        if (step == null) {
          step = min_step;
        }
        if (direction == 'right') {
          step++;
          //旋转到原位置，即超过最大值
          step > max_step && (step = min_step);
        } else {
          step--;
          step < min_step && (step = max_step);
        }
        //旋转角度以弧度值为参数
        let degree = step * 90 * Math.PI / 180;
        let ctx = canvas.getContext('2d');
        switch (step) {
          case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            break;
          case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height);
            break;
          case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height);
            break;
          case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0);
            break;
        }
      },
      compress(img, Orientation) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');
        //瓦片canvas
        let tCanvas = document.createElement("canvas");
        let tctx = tCanvas.getContext("2d");
        let initSize = img.src.length;
        let width = img.width;
        let height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        let ratio;
        if ((ratio = width * height / 4000000) > 1) {
          console.log("大于400万像素")
          ratio = Math.sqrt(ratio);
          width /= ratio;
          height /= ratio;
        } else {
          ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
        //        铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        let count;
        if ((count = width * height / 1000000) > 1) {
          console.log("超过100W像素");
          count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
          //            计算每块瓦片的宽和高
          let nw = ~~(width / count);
          let nh = ~~(height / count);
          tCanvas.width = nw;
          tCanvas.height = nh;
          for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
              tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
              ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
          }
        } else {
          ctx.drawImage(img, 0, 0, width, height);
        }
        //修复ios上传图片的时候 被旋转的问题
        if (Orientation != "" && Orientation != 1) {
          switch (Orientation) {
            case 6://需要顺时针（向左）90度旋转
              this.rotateImg(img, 'left', canvas);
              break;
            case 8://需要逆时针（向右）90度旋转
              this.rotateImg(img, 'right', canvas);
              break;
            case 3://需要180度旋转
              this.rotateImg(img, 'right', canvas);//转两次
              this.rotateImg(img, 'right', canvas);
              break;
          }
        }
        //进行最小压缩
        let ndata = canvas.toDataURL('image/jpeg', 0.1);
        console.log('压缩前：' + initSize);
        console.log('压缩后：' + ndata.length);
        console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;
      },
      openAlert() {
        this.$dialog.alert({
          mes:this.tipMsg
        });
      },
      registAgent(){
        var regMobile = /^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8}$/;
        if(this.realname==''){
          this.tipMsg='请填写姓名!'
          this.openAlert()
        }else if(this.mobile==''){
          this.tipMsg='请填写手机号!'
          this.openAlert()
        }else if(this.mobile.length!=11){
          this.tipMsg='请填写11位手机号!'
          this.openAlert()
        }else if(!regMobile.test(this.mobile)){
          this.tipMsg='手机号格式输入有误!'
          this.openAlert()
        }else if(this.code==''){
//          this.tipMsg='请填写邀请码!'
//          this.openAlert()
        }else if(this.weixin==''){
          this.tipMsg='请填写微信号!'
          this.openAlert()
        }else if(this.aagenttype==0){
          this.tipMsg='请选择代理类型!'
          this.openAlert()
        }else if(this.isReaded==false){
          this.tipMsg='请阅读分销商申请协议!'
          this.openAlert()
        }else{
          this.$store.dispatch({
            type:'registAgent',
            params:{
              realname:this.realname,
              mobile:this.mobile,
              code:this.code,
              weixin:this.weixin,
              aagenttype:this.aagenttype,
              province:this.province,
              city:this.city,
              area:this.area,
              township:this.township,
              t:config.t,
              openid:localStorage.getItem('openid'),
              mid:localStorage.getItem('userid'),
              uniacid:config.uniacid,
              i:config.i,
              ispost:1,
            }
          })
          setTimeout(()=>{
            if(this.registAgentMsg!=''){
              this.$dialog.toast({
                mes:this.registAgentMsg,
                timeout: 1000
              });
            }
          },500)
        }
      }
    }
  }
</script>
