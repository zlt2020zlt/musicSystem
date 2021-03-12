<template>
  <div id="app">
    <!-- <SongAudio /> -->
    <router-view></router-view>
 
  </div>
</template>

<script>

import SongAudio from './components/SongAudio';
export default {
  name: 'App',
  components: {
    SongAudio,
 
  },
}
</script>

<style  lang="scss" scoped>
@import './assets/css/app.scss';
</style>
