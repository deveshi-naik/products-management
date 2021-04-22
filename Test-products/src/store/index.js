import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        productsList: [{
            id: 1,
            title: 'product 1',
            description: 'here is product description',
            price: '1000$',
            rating: 3,
            location: 'gujarat',
            trashFlag: false
        }]
    },
    mutations: {
        PRODUCTS_LIST_ADD_MUTATION(state, payload) {
            return state.productsList.push(payload)
        },
        PRODUCTS_LIST_UPDATE_MUTATION(state, payload) {
            return state.productsList = payload
        }
    },
    actions: {
        productListAction(context, payload) {
            context.commit('PRODUCTS_LIST_ADD_MUTATION', payload)
        },
        productListRemoveAction(context, payload) {
            context.commit('PRODUCTS_LIST_UPDATE_MUTATION', payload)
        }
    },
    getters: {
        getProductsList(state) {
            return state.productsList
        }
    }
})
export default store;