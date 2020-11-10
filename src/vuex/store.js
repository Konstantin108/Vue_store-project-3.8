import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'     //<-- axios импортируется в файле api-requests.js
import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from "@/vuex/mutations/mutations"
import getters from "@/vuex/getters/getters"

const actions = {...commonActions, ...apiRequests}     //<-- подключение двух файлов с actions

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        searchValue: '',
        products: [],
        cart:[]
    },
    mutations,
    actions,
    getters
});

export default store;