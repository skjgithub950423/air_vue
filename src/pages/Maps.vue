<template>
  <div class="hello">
    <div class="map-box">
      <h3 class="title">{{ msg }}</h3>
      <div class="amap-wrapper">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" bubble="false"> 
          <el-amap-marker :position="marker.position" :events="marker.events"  :draggable="marker.draggable" :url="marker.url"></el-amap-marker>
        </el-amap>
      </div>
      <div class="mcover" v-if="mcover" @click="isShow">
        <div class="mcover-box">
          <div class="mcover-title">定位到的位置是</div>
          <span>{{marker.position}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "HelloWorld",
  data() {
    return {
      mcover: false, // 蒙层是否显示
      msg: "Air的地址",
      zoom: 14,
      center: [123.4167194366, 41.7418747888],
      marker: {
        position: [123.4167194366, 41.7418747888],
        url: "../img/qrcode.jpg",
        bounds: [[123.4167194366, 41.7418747888],[123.4167194366, 41.7418747888]],
        events: {
          click: () => {
            this.clickthis();
          },
          dragend: e => {
            this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
          }
        },
        visible: true,
        draggable: false,
        template: "<span>1</span>"
      }
    };
  },
  methods: {
    clickthis() {
      let me = this;
      me.mcover = true;
    },
    isShow() {
      this.mcover = false;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.title {
  color: azure;
  text-align: center;
  padding: 30px 0;
}
.map-box {
  background-color: dimgrey;
  width: 98%;
  height: 800px;
  padding: 1%;
}
.amap-wrapper {
  width: 100%;
  height: 80%;
}
.mcover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 10;
}
.mcover-box {
  background-color: white;
  width: 30%;
  height: 300px;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  margin-left: -15%;
  top: 50%;
  transform: translateY(-50%);
}
.mcover-title {
  padding: 15px 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: antiquewhite;
  border-radius: 8px 8px 0 0;
  color: brown;
}
.mcover-box span {
  display: inline-block;
  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: -25%;
}
</style>
