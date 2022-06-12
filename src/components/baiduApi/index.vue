<template>
  <div class="abuot_cotainer">
    <article>
      <div class="aboutdly">
        <h1>企业简介</h1>
        <div class="text">
          <p>
            东篱园股份有限公司成立于2022年,是一家综合性电商网站。截止2022年6月交易额近2千万元，与超过200家大小企业合作，与数万家农户建立合作关系，从源头上保证农产品的品质与供应适应市场需求。
            东篱园股份有限公司由四川轻化工大学应届毕业生创办，凭借专业知识、市场营销知识以及互联网营销知识，公司一经创办即引来各方投资。公司创立不到一年即完成超过数十万单成功交易。
          </p>
        </div>
      </div>
      <div class="baiduInfo" id="baiduInfo"></div>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      position_NKYYGS: {
        Name: "四川轻化工大学（宜宾校区）",
        address: "宜宾市翠屏区宜宾临港经济技术开发区白塔路1号",
        phoneNumber: "183987677675",
        bdLNG: 104.67738,
        bdLAT: 28.81061,
      },
    };
  },
  mounted() {
    this.baiduMap();
  },
  methods: {
    baiduMap() {
      var map = new BMap.Map("baiduInfo"); // 创建地图实例
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.OverviewMapControl());
      map.addControl(new BMap.MapTypeControl());
      // map.setMapStyle({ style: 'midnight' }) //地图风格

      map.clearOverlays();
      //将数据遍历
      //自定义信息窗口内容
      var sContent =
        '<div style="width:300px;"><p style="font-size:16px;font-weight:bold;margin-top: 10px;color:#D07852">' +
        this.position_NKYYGS.Name +
        '</p><p style="font-size:13px;margin: 5px 0;">地址：' +
        this.position_NKYYGS.address +
        '</p><p style="font-size:13px;margin: 5px 0;">电话：' +
        this.position_NKYYGS.phoneNumber +
        '</p><p style="font-size:13px;margin: 5px 0;">坐标：' +
        this.position_NKYYGS.bdLNG +
        "," +
        this.position_NKYYGS.bdLAT;
      ("</div>");
      var point = new BMap.Point(
        this.position_NKYYGS.bdLNG,
        this.position_NKYYGS.bdLAT
      ); // 创建点坐标
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      map.centerAndZoom(point, 16); // 初始化地图，设置中心点坐标和地图级别
      // //点击图标时候调用信息窗口
      var infoWindow = new BMap.InfoWindow(sContent);
      marker.addEventListener("click", function () {
        this.openInfoWindow(infoWindow);
      });
    },
  },
};
</script>


<style scoped lang='less'>
.abuot_cotainer {
  width: 100%;
  height: 700px;
  background: url("./image/background.png");
  article {
    width: 1300px;
    height: 580px;
    background: rgba(84, 83, 83, 0.2);
    border: 1px solid rgb(159, 158, 158);
    margin: auto;
    box-shadow: 2px, 2px, 2px rgba(0, 0, 0, 0.3);
    .aboutdly {
      h1 {
        line-height: 80px;
        letter-spacing: 5px;
        font-size: 28px;
        color: rgb(242, 234, 234);
      }
      .text {
        width: 100%;
        height: auto;
        text-indent: 30px;
        font-size: 20px;
        line-height: 30px;
        color: rgb(242, 234, 234);
      }
    }
    .baiduInfo {
      width: 100%;
      height: 90%;
      border: 1px dashed rgba(113, 59, 59, 0.4);
    }
  }
}
</style>