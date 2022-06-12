<template>
  <div class="product">
    
    <div class="product_nav">
      <li class="li_now" @click="changeRouter">全部分类</li>
        <li
          v-for="fenlei in superList"
          :key="fenlei.id"
          @click="shopCategorie(fenlei.id)"
        >
          {{ fenlei.shopName }}
        </li>
    </div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from '@/components/Footer';
export default {
  name: "super",
  components:{
    Footer,
  },
  mounted() {
    this.$store.dispatch("getSuperList");
  },
  computed: {
    ...mapState({
      superList: (state) => state._super.superList,
    }),
  },
  methods: {
    shopCategorie(id) {
      this.$router.push({path:`/super/categories/${id}`});
      this.$store.dispatch('getCategorieList',this.$route.params.typeId)
    },
    changeRouter(){
      this.$router.push('/super/product')
    }
  },
};
</script>

<style lang="less" scoped>
.product {
  width: 1200px;
  margin: 0 auto;
}
.product_nav {
  width: 1200px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.product_nav li {
  width: 11.11%;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  font-size: 17px;
  font-weight: 400;
  background-color: #eee;
}
.product_nav li:hover {
  color: #2b2;
  background-color: #ddd;
}
.product_nav .li_now {
  color: #2b2;
  background-color: #ddd;
}
</style>
