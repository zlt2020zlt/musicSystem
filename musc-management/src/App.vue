<template>
  <div id="app">
    <user-the-header v-if="loginIn"/>
    <SongAudio v-if="mIslogin"/>
    <router-view></router-view>
    <user-play-bar v-if="loginIn"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import SongAudio from './components/SongAudio';
import userPlayBar from './components/userPlayBar';
import userTheHeader from './components/userTheHeader';
export default {
  name: 'App',
  components: {
    SongAudio,
    userPlayBar,
    userTheHeader
  },
  computed:{
    ...mapGetters([
        'loginIn',        //用户是否已登录
        'mIslogin'        //管理原是否登录
    ]),
  }
}
</script>

<style  lang="scss" scoped>
@import './assets/css/app.scss';
</style>
