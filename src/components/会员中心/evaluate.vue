<template>
  <div id="evaluate">
    <headers title="评价商品"></headers>
    <div class="item">
      <div class="middle">
        <p><img src="/static/img/shop_black.png" alt="">E卡系统</p>
        <div class="shopInfo" v-for="(item,key) in evaluatPage.goods">
          <img :src="item.thumb">
          <div class="mid"><h6>{{item.title}}</h6><span>{{item.optiontitle}}</span></div>
          <div><h6>￥{{item.price}}</h6><span>X{{item.total}}</span></div>
        </div>
      </div>
    </div>
    <p class="notes">整单评价</p>
    <form action="#">
      <div class="item">
        <span>评分</span>
        <yd-rate slot="left" count="5" v-model="star"></yd-rate>
      </div>
      <div class="upload">
        晒图
        <img class="picture" v-for="item in headerImage" :src="item"></img>
        <input type="file" id="upload" accept="image/*" @change="upload" onchange="var formdata = new FormData();formdata=this.files;">
        <span class="addMore">+</span>
      </div>
      <yd-cell-group title="评论" class="leaveWord">
        <yd-cell-item>
          <yd-textarea slot="right" placeholder="50字以内（选填）" maxlength="50" v-model="leaveWord"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
      <yd-button size="large" type="warning" @click.native="submitEvaluate">提交评价</yd-button>
    </form>
  </div>
</template>
<script>
  import Exif from 'exif-js'
  import config from '../../myConfig'
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return{
        headerImage:[], picValue: '',leaveWord:'',star:'0'
      }
    },
    computed:{
      evaluatPage(){
        return this.$store.state.evaluatPage
      },
      goodsidArr(){
        var goodsidArr=[]
        for(var i=0;i<this.$store.state.evaluatPage.goods.length;i++){
          goodsidArr.push(this.$store.state.evaluatPage.goods[i].goodsid)
        }
        return goodsidArr
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
      submitEvaluate(){
        this.$store.dispatch({
          type:'submitEvaluate',
          params:{
            uniacid:config.uniacid,
            t:config.t,
            i:config.i,
            openid:localStorage.getItem('openid'),
            mid:localStorage.getItem('userid'),
            goodsid:this.goodsidArr,
            level:this.star,
            content:this.leaveWord,
            orderid:this.evaluatPage.order.id,
            images:this.headerImage,
          }
        })
      }
    }
  }
</script>
<style>
  #evaluate header {
    height: 1.5rem !important;
    align-items: center;
  }
  #evaluate header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #evaluate .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #evaluate .item{
    background: #fff;
    margin-top:0.3125rem;
    padding:0.3125rem;
  }
  #evaluate .item .shopInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #evaluate .item .middle{
    margin-bottom: 0.3125rem;
  }
  #evaluate .item .middle>p{
    text-align: left;
    margin-bottom:0.3125rem;
  }
  #evaluate .item .middle>p img{
    width:0.625rem;
    height:0.625rem;
    vertical-align: middle;
  }
  #evaluate .item .middle .shopInfo{
    margin:0.3125rem 0;
  }
  #evaluate .item .middle .shopInfo img{
    width:2.1875rem;
    height:1.875rem;
  }
  #evaluate .item .middle .shopInfo span{
    display: block;
    font-size:0.375rem;
    color:#aaa;
    margin-top:0.3125rem;
    text-align: right;
  }
  #evaluate .item .middle .shopInfo .mid span{
    text-align: center !important;
  }
  #evaluate .notes{
    padding:0.3125rem;text-align: left;color:#858585
  }
  /**/
  #evaluate form{
    text-align: left;
    padding: 0.3125rem;
    background: #fff;
  }
  *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:0.375rem;
  }
  #evaluate form i{
    color:red;
  }
  #evaluate form .item{
    padding: 0.3125rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:0.3125rem 0;
    border-bottom: 1px solid #eee;
  }
  #evaluate form .item span{
    flex:0 0 25% ;
  }
  #evaluate form .item input{
    border: none;
    padding-left: 0.3125rem;
  }
  #evaluate form .upload{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;background: #fff;padding:0.3125rem 0.3125rem 0.3125rem 0;
    position: relative;width:100%;
    border-bottom: 1px solid #eee;
  }
  #evaluate form .upload img{
    width:1.875rem;height:1.875rem;vertical-align: middle;
    margin:0 0 0.3125rem 0.3125rem;
  }
  #evaluate form .upload input{
    opacity: 0;position: absolute;top: 0;right: 0px;height:100%;width:100%;z-index: 100
  }
  #evaluate form .upload .addMore{
    display: inline-block;
    width:1.25rem;
    height:1.25rem;
    border:1px solid #eee;
    line-height:1.25rem;
    text-align: center;
    color:#eee;
    font-size:1.25rem;
    margin-left: 0.3125rem;
  }
  #evaluate form .yd-cell-title{
    font-size: 14px !important;
  }
  #evaluate .yd-btn-warning{
    position: fixed;bottom:0;left:0;right:0;
  }
</style>
