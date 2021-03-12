import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import configure from './configure'
import user from './user'
import song from './song'
const store = new Vuex.Store({
    modules: {
        configure,
        user,
        song
    },
    // state: {
    //     HOST: 'http://127.0.0.1:8888',
    //     isPlay: false, //是否播放中
    //     url: '', //歌曲地址
    //     id: '' //歌曲id
    // },
    // getters: {
    //     isPlay: state => state.isPlay,
    //     url: state => state.url,
    //     id: state => state.id
    // },
    // mutations: {
    //     setIsPlay: (state, isPlay) => { state.isPlay = isPlay },
    //     setUrl: (state, url) => { state.url = url },
    //     setId: (state, id) => { state.id = id }
    // }
})

export default store