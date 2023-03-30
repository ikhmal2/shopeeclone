import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    productList: [],
  },
  mutations: {
    addProduct(state, newProduct) {
      state.productList.push(newProduct);
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios("https://fakestoreapi.com/products").then((response) => {
        commit("addProduct", response.data);
      });
    },
  },
  getters: {
    getProducts(state) {
      return state.productList;
    },
  },
});
