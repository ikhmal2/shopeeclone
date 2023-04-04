import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    productList: [],
    categories: [],
  },
  mutations: {
    addProduct(state, newProduct) {
      for (let i = 0; i < newProduct.length; i++) {
        const prod = newProduct[i];
        state.productList.push(prod);
      }
    },
    addCategories(state, categories) {
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        state.categories.push(category);
      }
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios('https://fakestoreapi.com/products').then((response) => {
        commit('addProduct', response.data);
      });
    },
    fetchCategories({ commit }) {
      axios('https://fakestoreapi.com/products/categories').then((response) => {
        commit('addCategories', response.data);
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
    getCategories(state) {
      return state.categories;
    },
    getTotalCategories(state) {
      return state.categories.length;
    },
  },
});
