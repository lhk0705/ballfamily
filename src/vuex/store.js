import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import ball from "./community/ball";
import sites from "./community/sites";
import comments from "./community/comments";
import joinBall from "./community/joinBall";
import marks from "./community/marks";
import user from "./user";

export const store=new Vuex.Store({
    modules:{
        ball,sites,comments,joinBall,user,marks
    }
})