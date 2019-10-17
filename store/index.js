import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		userinfor:{}
    },
    mutations: {
        login(state, userinfor) {
            state.userName = userinfor.userName || '新用户';
            state.hasLogin = true;
			state.userinfor=userinfor;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
