import {reqGetSuperList,reqGetCategorieList,reqGetSuperDitail,reqAddShopCart,reqGetSuperShopCartList,reqDeleteSuper} from '@/api';

const state = {
    superList:[],
    categorieList:[],
    superDitail:[],
    shopCartList:{}
};
const mutations = {
    GetSuperList(state,data){
        state.superList = data
    },
    GetCateGrorieList(state,data){
        state.categorieList = data
    },
    GetSuperDitail(state,superDitail){
        state.superDitail=superDitail
    },
    GetSuperShopCartList(state,shopCart){
        state.shopCartList = shopCart
    }
};
const actions = {
    async getSuperList({ commit }) {
        //服务器返回banner数据--->存储于vuex当中
        let result = await reqGetSuperList();
       if(result.code==200){
           commit('GetSuperList',result.data)
       }
    },
    async getCategorieList({commit},id){
        let {data:res} =await reqGetCategorieList(id)||[]
        commit("GetCateGrorieList",res)
    },
    async getSuperDetail ({commit},id){
        let res = await reqGetSuperDitail(id)||[]
        if(res.code == 200){
            commit('GetSuperDitail',res.data)
        }
    },
    // 加入购物车
    async addSuperShopCart({commit},{productId,count}){
        let res = await reqAddShopCart(productId,count)||{}
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 获取购物车的数据
    async getSuperShopCartList({commit}){
        let res = await reqGetSuperShopCartList()||[]
        console.log(res);
        if(res.code==200){
           commit('GetSuperShopCartList',res.data)
        }else{
            return Promise.reject(new Error('faile')); 
        }
    },
    //删除超市商品购物车的数据
    async deleteSuperShop({commit},shopCartId){
        let res =await reqDeleteSuper(shopCartId)
        console.log(res);
    }    
};
const getters = {
    categorieData(state) {
        return state.categorieList[0] || []
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}