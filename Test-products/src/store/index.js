import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        productsList: []
    },
    mutations: {
        PRODUCTS_LIST_MUTATION(state, payload) {
            return state.productsList.push(payload)
        }
    },
    actions: {
        productListAction(context, payload) {
            context.commit('PRODUCTS_LIST_MUTATION', payload.productsList)
        }
    },
    getters: {
        getProductsList(state) {
            return state.productsList
        }
    }
})
export default store;