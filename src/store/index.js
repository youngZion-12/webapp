import Vue from 'vue'
import Vuex from 'vuex'

import first from './modules/firstTime'
import second from './modules/secondTime'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        first,
        second
    }
})

export default store

