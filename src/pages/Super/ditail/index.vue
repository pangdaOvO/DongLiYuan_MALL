<template>
  <div class="detail">
    <section class="con">
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <Zoom :shopImge="superDitail" />
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">{{ superDitail.productTitle }}</h3>
            <p class="news">农家正品 产品优质健康</p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>{{ superDitail.productPrice }}</em>
                </div>
                <div class="remark">
                  <i>累计评价</i>
                  <em>324</em>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
                </div>
                <div class="fixWidth">
                  <i class="red-bg">限时促销</i>
                  <em class="t-gray">全场满199.00立减20.00元</em>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">
                  生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鲜
                </div>
                <div class="fixWidth">
                  24小时发货 泡沫保温 非质量问题不支持退换！
                </div>
              </div>
              <div class="supportArea">
                <div class="title">配 送 至</div>
                <div class="fixWidth">四川省 宜宾市 翠屏区</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
              <dl>
                <dt class="title">商品重量选择</dt>
                <dd changepirce="0" class="active">1斤装</dd>
                <dd changepirce="40">2斤装</dd>
                <dd changepirce="90">3斤装</dd>
              </dl>
              <dl>
                <dt class="title">快递默认</dt>
                <dd changepirce="0" class="active">顺丰</dd>
              </dl>
            </div>
            <div class="cartWrap">
              <div class="controls">
                <input
                  autocomplete="open"
                  value="1"
                  class="itxt"
                  v-model="shopNum"
                />
                <a @click="shopNum++" class="plus">+</a>
                <a @click="shopNum > 1 ? shopNum-- : shopNum" class="mins">-</a>
              </div>
              <router-link :to="`/super/addShopCart/${shopNum}`">
                <div class="add">
                  <a @click="addSuperShopCart">加入购物车</a>
                </div>
              </router-link>
              <router-link to="/super/superShopCart">
                 <div class="buy">
                <a href="">立即购买</a>
              </div>
              </router-link>
             
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="product-detail">
      <aside class="aside">
        <div class="tabWraped">
          <h4 class="active">相关分类</h4>
        </div>
        <div class="tabContent">
          <div class="tab-pane active">
            <ul class="partList">
              <li>肉类</li>
              <li>蛋类</li>
              <li>果仁类</li>
              <li>柑橘类</li>
              <li>有机蔬菜</li>
              <li>菌类</li>
              <li>淡水鱼类</li>
              <li>蟹类</li>
            </ul>
            <ul class="goodsList">
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img :src="superDitail.productImg" />
                  </div>
                  <div class="attr">{{ superDitail.productTitle }}</div>
                  <div class="price">
                    <em>¥</em>
                    <i>{{ superDitail.productPrice }}</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="../images/8.jpg" />
                  </div>
                  <div class="attr">
                    <em>微山湖农家散养鸭蛋青皮绿</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6.5/斤</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="../images/14.jpg" />
                  </div>
                  <div class="attr">
                    <em>白沙花生米农家生花生仁</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>7.8/斤</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="../images/24.jpg" />
                  </div>
                  <div class="attr">
                    <em>有机菠菜新鲜洋菠菜番杏蔬菜</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>2.2/斤</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="../images/32.jpg" />
                  </div>
                  <div class="attr">
                    <em>鲜鱼肉质细嫩活体鲜活草鱼</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>8.9/斤</i>
                    </strong>
                  </div>
                  <div class="operate">
                    <a href="javascript:void(0);">加入购物车</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </aside>
      <div class="detail">
        <div class="fitting">
          <h4 class="kt">选择搭配</h4>
          <div class="good-suits">
            <div class="master">
              <img :src="superDitail.productImg" />
              <p>¥{{ superDitail.productPrice }}</p>
              <i>+</i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="../images/7.jpg" />
                <p>土鸡蛋农家散养</p>
                <label>
                  <input type="checkbox" value="39" />
                  <span>5.8</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="../images/16.jpg" />
                <p>零食坚果炒货开心果</p>
                <label>
                  <input type="checkbox" value="50" />
                  <span>17.8</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="../images/18.jpg" />
                <p>冻橙水果新鲜当季柑橘</p>
                <label>
                  <input type="checkbox" value="59" />
                  <span>3.5</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="../images/30.jpg" />
                <p>农家精挑银耳雪木耳</p>
                <label>
                  <input type="checkbox" value="99" />
                  <span>8.9</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">￥{{ taocanPrice }}</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wraped">
            <li class="active">
              <a href="###"> 商品介绍 </a>
            </li>
            <li>
              <a href="###"> 规格与包装 </a>
            </li>
            <li>
              <a href="###"> 售后保障 </a>
            </li>
            <li>
              <a href="###"> 商品评价 </a>
            </li>
            <li>
              <a href="###"> 手机社区 </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>发货：24小时内顺风包邮</li>
                <li>商品名称：东篱园</li>
                <li>商品编号：18104011109</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：四川省成都市</li>
              </ul>
              <div class="intro-detail">
                <img src="../images/jinaguo_sale.png" />
                <img src="../images/fruit_sale.png" />
                <img src="../images/juzi_sale.png" />
                <img src="../images/shucai_sale.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Zoom from "../Zoom/Zoom";
import { mapState } from "vuex";
export default {
  name: "Detail",
  components: {
    Zoom,
  },
  data() {
    return {
      shopNum: 1,
      shopId: "",
    };
  },
  created() {
    this.$store.dispatch("getSuperDetail", this.$route.params.shopId);
  },
  computed: {
    ...mapState({
      superDitail: (state) => state._super.superDitail,
    }),
    taocanPrice() {
      let price = parseInt(this.superDitail.productPrice) + 30;
      return price;
    },
  },
  methods: {
    async addSuperShopCart() {
      try {
        await this.$store.dispatch("addSuperShopCart", {
          productId: this.$route.params.shopId,
          count: this.shopNum,
        });
      } catch (error) {
        this.$alert("<strong>购物车已有该数据</strong>", "信息提示", {
          dangerouslyUseHTMLString: true,
        });
        
      }
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  .con {
    width: 1200px;
    margin: 15px auto 0;
    .mainCon {
      overflow: hidden;
      margin: 5px 0 15px;

      .previewWrap {
        float: left;
        width: 400px;
        position: relative;
      }

      .InfoWrap {
        width: 700px;
        float: right;

        .InfoName {
          font-size: 14px;
          line-height: 21px;
          margin-top: 15px;
        }

        .news {
          color: #75b10d;
          margin-top: 15px;
        }

        .priceArea {
          background: rgba(117, 178, 13, 0.4);
          padding: 7px;
          margin: 13px 0;

          .priceArea1 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              float: left;
              margin-right: 15px;
            }

            .price {
              float: left;
              color: #c81623;

              i {
                font-size: 16px;
              }

              em {
                font-size: 24px;
                font-weight: 700;
              }

              span {
                font-size: 12px;
              }
            }

            .remark {
              float: right;
            }
          }

          .priceArea2 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              margin-right: 15px;
              float: left;
            }

            .fixWidth {
              width: 520px;
              float: left;

              .red-bg {
                background: #75b10d;
                color: #fff;
                padding: 3px;
              }

              .t-gray {
                color: #999;
              }
            }
          }
        }

        .support {
          border-bottom: 1px solid #ededed;
          padding-bottom: 5px;

          .supportArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              margin-right: 15px;
              float: left;
            }

            .fixWidth {
              width: 520px;
              float: left;
              color: #999;
            }
          }
        }

        .choose {
          .chooseArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            dl {
              overflow: hidden;
              margin: 13px 0;

              dt {
                margin-right: 15px;
                float: left;
              }

              dd {
                float: left;
                margin-right: 5px;
                color: #666;
                line-height: 24px;
                padding: 2px 14px;
                border-top: 1px solid #eee;
                border-right: 1px solid #bbb;
                border-bottom: 1px solid #bbb;
                border-left: 1px solid #eee;

                &.active {
                  color: green;
                  border: 1px solid green;
                }
              }
            }
          }

          .cartWrap {
            .controls {
              width: 48px;
              position: relative;
              float: left;
              margin-right: 15px;

              .itxt {
                width: 38px;
                height: 37px;
                border: 1px solid #ddd;
                color: #555;
                float: left;
                border-right: 0;
                text-align: center;
              }

              .plus,
              .mins {
                width: 15px;
                text-align: center;
                height: 17px;
                line-height: 17px;
                background: #f1f1f1;
                color: #666;
                position: absolute;
                right: -8px;
                border: 1px solid #ccc;
              }

              .mins {
                right: -8px;
                top: 19px;
                border-top: 0;
              }

              .plus {
                right: -8px;
              }
            }

            .add {
              float: left;

              a {
                background-color: #75b10d;
                padding: 0 25px;
                font-size: 16px;
                color: #fff;
                height: 36px;
                line-height: 36px;
                display: block;
              }
            }
            .buy {
              float: left;

              a {
                background-color: #75b10d;
                padding: 0 25px;
                font-size: 16px;
                margin-left: 10px;
                color: #fff;
                height: 36px;
                line-height: 36px;
                display: block;
              }
            }
          }
        }
      }
    }
  }

  .product-detail {
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;

    .aside {
      width: 210px;
      float: left;
      border: 1px solid #ccc;

      .tabWraped {
        height: 40px;
        border-bottom: 1px solid rgb(193, 191, 191);

        h4 {
          border-top: 3px solid #fff;
          float: left;
          line-height: 37px;
          width: 100%;
          text-align: center;
          border-bottom: 1px solid rgb(193, 191, 191);
          &.active {
            border-bottom: 0;
            font-weight: normal;
          }
        }
      }

      .tabContent {
        padding: 10px;

        .tab-pane {
          display: none;

          &.active {
            display: block;
          }

          &:nth-child(1) {
            .partList {
              overflow: hidden;

              li {
                width: 50%;
                float: left;
                border-bottom: 1px dashed #ededed;
                line-height: 28px;
              }
            }

            .goodsList {
              & > li {
                margin: 5px 0 15px;
                border-bottom: 1px solid #ededed;
                padding-bottom: 5px;

                .list-wrap {
                  .p-img {
                    text-align: center;

                    img {
                      width: 152px;
                    }
                  }

                  .price {
                    font-size: 16px;
                    color: #c81623;
                  }

                  .operate {
                    text-align: center;
                    margin: 5px 0;

                    a {
                      background-color: transparent;
                      border: 1px solid #8c8c8c;
                      color: #8c8c8c;
                      display: inline-block;
                      padding: 2px 14px;
                      line-height: 18px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .detail {
      width: 980px;
      float: right;

      .fitting {
        border: 1px solid #ddd;
        margin-bottom: 15px;

        .kt {
          border-bottom: 1px solid #ddd;
          background: #f1f1f1;
          color: #333;
          padding: 5px 0 5px 15px;
        }

        .good-suits {
          height: 170px;
          padding-top: 10px;

          .master {
            width: 127px;
            height: 165px;
            text-align: center;
            position: relative;
            float: left;

            img {
              margin-top: 20px;
              height: 100px;
            }

            p {
              color: #c81623;
              font-size: 16px;
              font-weight: 700;
            }

            i {
              position: absolute;
              top: 48px;
              right: -25px;
              font-size: 16px;
            }
          }

          .suits {
            width: 668px;
            height: 165px;
            float: left;

            .suitsItem {
              float: left;
              width: 127px;
              padding: 0 20px;
              text-align: center;

              img {
                margin-left: 15px;
                height: 120px;
              }

              p {
                font-size: 12px;
              }

              label {
                display: block;
                position: relative;

                input {
                  vertical-align: middle;
                }

                span {
                  vertical-align: middle;
                }
              }
            }
          }

          .result {
            border-left: 1px solid #ddd;
            width: 153px;
            height: 165px;
            padding-left: 20px;
            float: left;

            .num {
              font-size: 14px;
              margin-bottom: 10px;
              margin-top: 10px;
            }

            .price-tit {
              font-weight: bold;
              margin-bottom: 10px;
            }

            .price {
              color: #b1191a;
              font-size: 16px;
              margin-bottom: 10px;
            }

            .addshopcar {
              background-color: #75b10d;
              border: 1px solid #75b10d;
              padding: 10px 25px;
              font-size: 16px;
              color: #fff;
              display: inline-block;
              box-sizing: border-box;
            }
          }
        }
      }

      .intro {
        .tab-wraped {
          background: #ededed;
          // border: 1px solid #ddd;
          overflow: hidden;

          li {
            float: left;

            & + li > a {
              border-left: 1px solid #ddd;
            }

            &.active {
              a {
                // border: 0;
                background: #75b10d;
                color: #fff;
              }
            }

            a {
              display: block;
              height: 40px;
              line-height: 40px;
              padding: 0 11px;
              text-align: center;
              color: #666;
              background: #fcfcfc;
              border-top: 1px solid #ddd;
              border-bottom: 1px solid #ddd;
            }
          }
        }

        .tab-content {
          .tab-pane {
            display: none;

            &.active {
              display: block;
            }

            &:nth-child(1) {
              .goods-intro {
                padding-left: 10px;

                li {
                  margin: 10px 0;
                }
              }

              .intro-detail {
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>