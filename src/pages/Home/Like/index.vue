<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <img src="./images/moshui.png" alt="" />
            <div class="like-text">
              <p>文石BOOX 墨水屏平板便捷电纸书电子纸套装 看书学习办公电子笔记本 32GB</p>
              <h3>¥1540.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/toudai.png" alt="" />
            <div class="like-text">
              <p>Bose QuietComfort 35 二代蓝牙 主动降噪 头戴式 苹果安卓手机适用</p>
              <h3>¥799</h3>
            </div>
          </li>
          <li>
            <img src="./images/erji.png" alt="" />
            <div class="like-text">
              <p>Apple AirPods Pro 配MagSafe无线充电盒 主动降噪无线蓝牙耳机</p>
              <h3>¥1999</h3>
            </div>
          </li>
          <li>
            <img src="./images/kxo.png" alt="" />
            <div class="like-text">
              <p>卡西欧（CASIO）电子辞典 E-XA99BU 英汉辞典、高考、冰海蓝</p>
              <h3>¥2400</h3>
            </div>
          </li>
          <li>
            <img src="./images/beibao.png" alt="" />
            <div class="like-text">
              <p>adidas阿迪达斯2019中性EC ORG单肩包ED6877 ED6877 F</p>
              <h3>¥79.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/dianzishu.png" alt="" />
            <div class="like-text">
              <p>掌阅iReader Smart2 超级智能本 电子书阅读器 10.3英寸墨水屏电纸书 32G</p>
              <h3>¥2270.00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>   
<script>
export default {
  name: "",
};
</script>

<style scoped lang="less">
.like {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      overflow: hidden;

      .fl {
        float: left;
        font-size: 20px;
        line-height: 30px;
      }

      .fr {
        float: right;
        background-image: url(./images/icons.png);
        width: 66px;
        height: 25px;
        background-position: 182px -104px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        text-decoration: none;
      }
    }

    .bd {
      .favourate {
        border: 1px solid #e4e4e4;
        overflow: hidden;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;

        li {
          height: 250px;
          margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          position: relative;
          width: 16.667%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 142px;
            height: 142px;
            transition: all 400ms;

            &:hover {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          .like-text {
            padding: 0;
            width: 142px;
            border-right: 1px solid #e4e4e4;

            p {
              margin: 5px 0;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
