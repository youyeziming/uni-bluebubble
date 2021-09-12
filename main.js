import Vue from 'vue';
import App from './App';
import isLogin from "@/mixin/isLogin.ts";

Vue.config.productionTip = false

Vue.mixin(isLogin);
App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()

