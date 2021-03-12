<template>
  <div id="app">
    <SongAudio v-if="mIslogin"/>
    <router-view></router-view>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import SongAudio from './components/SongAudio';

export default {
  name: 'App',
  components: {
    SongAudio,
  },
  computed:{
    ...mapGetters([
        'mIslogin'        //管理原是否登录
    ]),
  }
}
</script>

<style  lang="scss" scoped>
@import './assets/css/app.scss';
</style>
