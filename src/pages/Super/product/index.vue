<template>
      <div class="product_center">
      <div
        class="product_classify"
        id="meat"
        v-for="sup in superList"
        :key="sup.id"
      >
        <h1>{{ sup.shopName }}</h1>
        <ul>
          <li v-for="(suplist, index) in sup.meat" :key="index" @click="detailmess(suplist.productId)">
            <img :src="suplist.productImg" alt="" />
            <div class="product_dsc">
              <span>￥{{suplist.productPrice}}/<sub>斤</sub></span>
              <div class="buy">查看详情</div>
              <a>{{suplist.productTitle}}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "allProduct",
  methods:{
    detailmess(id){
     this.$router.push({path:`/super/superDitail/${id}`})
    },
	sendDate(){
		this.$emit('superList',this.superList)
	}
  },
   computed: {
    ...mapState({
      superList: (state) => state._super.superList,
    }),
  },
  mounted(){
	  this.sendDate()
  }
};
</script>

<style lang="less" scoped>
.product_center{
	width: 1200px;
	height:2800px;
}

.product_classify{
	width: 1200px;
	height: 350px;
}
.product_classify h1{
	height: 50px;
	line-height: 50px;
	text-align: center;
	padding-top: 10px;
	font-weight: 400;
	border-bottom:1px solid #aaa;
	padding-bottom:10px;
}
.product_classify ul{
	width: 1400px;
	height: 220px;
	position: relative;
	top: 15px;
	float: left;
	margin: auto;
}
.product_classify ul li{
	width: 220px;
	height: 250px;
	display: inline-block;
	border: 1px solid rgb(55, 55, 55);
	border-radius: 5px;
	margin-right: 20px;
	box-shadow: 10px,10px,10px rgb(0, 0, 0,.2);
	cursor: pointer;
}
.product_classify ul li:hover{
	outline: 1px solid #2b2;
}
.product_classify ul li img{
	width:90%;
	height: 160px;
	padding-left:10px;
	
}
.buy{
	width: 70px;
	text-align: center;
	float: left;
	height: 25px;
	margin-top: 7px;
	border: 2px solid #ab583e;
	background-color: #da8f78;
	border-radius: 5px;
	color: white;
	font-size: 14px;
	line-height: 30px;
}
.buy:hover{
	background-color: #aa6d65;
}
.product_classify ul li span{
	height: 30px;
	width: 90px;
	line-height: 30px;
	float: left;
	margin-left: 20px;
	margin-top: 5px;
	font-size: 18px;
	color: #bd7a00;
}
.product_classify ul li a{
	width: 197px;
	height: 25px;
	display: block;
	line-height: 25px;
	float: left;
	color: black;
	text-align: center;
	margin-top: 5px;
	font-size: 15px;
}
.product_classify ul li a:visited{
	color: black;
}
.product_classify ul li a:hover{
	color: #2b2;
}
.product_classify .li_last{
	margin-right: 0;
}
</style>
