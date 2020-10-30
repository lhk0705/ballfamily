import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import ball from "./bussiness/ball";
import sites from "./bussiness/sites";

export const store=new Vuex.Store({
    modules:{
        ball,sites,
    }
})