<template>
  <div class="home">
    <swiper />
    <div class="section" v-for="(item,index) in songsList" :key="index">
      <div class="section-title">{{item.name}}</div>
      <content-list :contentList="item.list"></content-list>
    </div>
    <user-song-audio/>
    <user-the-aside/>
    <scroll-top/>
    <the-footer/>
  </div>
</template>

<script>
import ScrollTop from '../components/ScrollTop';
import TheFooter from '../components/TheFooter';
import userSongAudio from '../components/userSongAudio';
import userTheAside from '../components/userTheAside';
import Swiper from "../components/Swiper";
import contentList from '../components/ContentList';
import {getAllSinger,getAllSongList} from '../api/index';
import {mapGetters} from 'vuex';
export default {
  name: 'home',
  components: {
    Swiper,
    contentList,
    ScrollTop,
    TheFooter,
    userSongAudio,
    userTheAside,
  },
  computed:{
    ...mapGetters([
        'loginIn'        //用户是否已登录
    ])
  },
  data () {
    return {
      songsList: [
        {name:"歌单",list: []},
        {name:"歌手",list: []}
      ]
    }
  },
  created () {
    if(!this.loginIn){
      this.$router.push({path: '/'});
    }
   this.getSongList();
   this.getSinger();
  },
  methods: {
    getSongList(){                      //获取前十条歌单
      getAllSongList().then((res) => {
        this.songsList[0].list = res.slice(0,10);
      }).catch((err) => {
        console.log(err);
      })
    },
    getSinger(){                      //获取前十名歌手
      getAllSinger().then((res) => {
        this.songsList[1].list = res.slice(0,10);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/home.scss';
@import '../assets/css/app.scss';
</style>
