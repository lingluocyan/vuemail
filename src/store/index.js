import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutation'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: 
    mutations
  ,
  actions: 
    actions
  ,
  getters,
  modules: {}
});
