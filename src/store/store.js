import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    productList: [],
  },
  mutations: {
    addProduct(state, newProduct) {
      for (let i = 0; i < newProduct.length; i++) {
        const prod = newProduct[i];
        state.productList.push(prod);
      }
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios('https://fakestoreapi.com/products').then((response) => {
        commit('addProduct', response.data);
      });
    },
  },
  getters: {
    getProducts(state) {
      return state.productList;
    },
    getTotalProducts(state) {
      return state.productList.length;
    },
  },
});
