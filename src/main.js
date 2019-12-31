import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Index from "./components/Index"
import About from "./components/About"
import ErrorPage from "./components/ErrorPage";
import Product from "./components/Product";
import Products from "./components/Products";
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Router)


Vue.use(Vuex);

const  jwt= require('jsonwebtoken')

const store = new Vuex.Store({
    state: {
        amount: 0,
        message:"Welcome to The branch investmenst in vuex",
        token:null
    },
    mutations: { //synchronous
        invest (state,payload) {
          state.amount+=parseInt(payload)
        },
        genToken(state){
            state.token=jwt.sign({name:'michael'},'XAAShhasbcasbcajscascasncjabajh')
        }
    },
    actions:{ //asynchronous
        invest(state,payload){
            state.commit('invest',payload)
        },
        genToken(state){
            state.commit('genToken')
        }

    },
    getters:{
        message(state){
            return state.message.toUpperCase()
        },
        counter(state){
            return state.amount
        },
        tokenize(state){
            return state.token
        }

    }
});

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            component: Index,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/products',
            name: 'products',
            component: Products,
            children: [
                {
                    path: 'product/:name',
                    name: 'product',
                    component: Product
                }
            ]
        },
        {
            path: '*',
            name: 'error',
            component: ErrorPage
        }]
})

new Vue({
    router,
    store,
    data: function(){
        return{

        }
    },

    render: h => h(App),


}).$mount('#app')
