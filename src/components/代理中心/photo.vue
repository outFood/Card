<template>
  <div class="scan">
    <h6 title="正在绑定" @goBack="goIndex"></h6>
    <div id="bcid">
      <div style="height:40%"></div>
      <p class="tip">...载入中...</p>
    </div>
    <!--<footer>
      <button @click="startScan">开始扫描</button>
      <button @click="cancelScan">结束扫描</button>
      <button @click="startRecognize">创建控件</button>
      <button @click="closeScan">关闭控件</button>
    </footer>-->
  </div>
</template>

<script type='text/ecmascript-6'>

  var scan = null;

  export default {
    data() {
      return {
        groupId: '',
        cdId: '',
        cdName: '',

        codeUrl: '',
      }
    },
    created: function () {
    },
    mounted: function () {
      this.startRecognize();
      this.startScan();
    },
    methods: {
      //返回上一页
      goIndex() {
        this.closeScan();
      },
      //创建扫描控件
      startRecognize() {
        let that = this;
        if (!window.plus) return;
        scan = new plus.barcode.Barcode('bcid');
        scan.onmarked = onmarked;

        function onmarked(type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR';
              break;
            case plus.barcode.EAN13:
              type = 'EAN13';
              break;
            case plus.barcode.EAN8:
              type = 'EAN8';
              break;
            default:
              type = '其它' + type;
              break;
          }
          result = result.replace(/\n/g, '');
          that.codeUrl = result;
          that.closeScan();
          that.$router.push({path: '/serviceDesk', query: {id: that.groupId, cdId: that.cdId, codeUrl: that.codeUrl}});
        }
      },
      //开始扫描
      startScan() {
        if (!window.plus) return;
        scan.start();
      },
      //关闭扫描
      cancelScan() {
        if (!window.plus) return;
        scan.cancel();
      },
      //关闭条码识别空间
      closeScan() {
        if (!window.plus) return;
        scan.close();
      },
    }
  }
</script>

<style lang="scss" scoped>
  .scan {
    height: 100%;
    background: #000;
    #bcid {
      width: 100%;
      position: absolute;
      top: 0.88rem;
      bottom: 0;
      text-align: center;
      color: #fff;
    }
  }
</style>
