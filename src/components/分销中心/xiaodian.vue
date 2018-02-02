<template>
  <div id="daili">
    <yd-navbar title="小店设置">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <form action="#">
      <div class="item">
        <span>名称</span>
        <div><input placeholder="填写默认为您的昵称"></div>
      </div>
      <div class="upload">
        图标
        <img class="picture" v-for="item in headerImage" :src="item"></img>
        <input type="file" id="upload" accept="image/*" @change="upload" onchange="var formdata = new FormData();formdata=this.files;">
        <span class="addMore">+</span>
      </div>
      <yd-button size="large" type="warning" @click.native="setXiaoDian">申请成为</yd-button>
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
  #daili form .upload{
    text-align: left;background: #fff;padding:10px 10px 10px 0;
    position: relative;width:100%;height:80px;
    border-bottom: 1px solid #eee;
  }
  #daili form .upload img{
    width:60px;height:60px;vertical-align: middle;
  }
  #daili form .upload input{
    opacity: 0;position: absolute;top: 0;right: 0px;height:100%;width:100%;z-index: 100
  }
  #daili form .upload .addMore{
    display: inline-block;
    width:40px;
    height:40px;
    border:1px solid #eee;
    margin: 0 auto;
    line-height: 40px;
    text-align: center;
    color:#eee;
    font-size:40px;
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
        headerImage:[], picValue: '',
      }
    },
    methods: {
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
      back:function () {
        this.$router.go(-1)
      },
      setXiaoDian(){

      }
    }
  }
</script>
