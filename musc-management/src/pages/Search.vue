<template>
    <div class="search">
        <nav class="searchList-nav" ref="change">
            <span :class="{isActive: toggle=='Songs'}" @click="handleChangeView('Songs')">歌曲</span>
            <span :class="{isActive: toggle=='SongLists'}" @click="handleChangeView('SongLists')">歌单</span>
        </nav>
        <component :is="currentView"></component>
    </div>
</template>
<script>
import searchSongs from '../components/search/SearchSongs'
import searchSongLists from '../components/search/SearchSongLists'
import {mapGetters} from 'vuex';

export default {
   name: 'search',
   components: {
       searchSongs,
       searchSongLists
   },
    computed:{
        ...mapGetters([
            'loginIn'        //用户是否已登录
        ])
    },
   data(){
       return {
           toggle: 'Songs',
           currentView: 'searchSongs'
       }
   },
   created(){
    if(!this.loginIn){
            this.$router.push({path: '/'});
    }
   },
   methods:{
       //切换组件
       handleChangeView(component){
           this.currentView = 'search'+component;
           this.toggle = component;
       }
   } 
}
</script>
<style lang="scss" scoped>
@import '../assets/css/search.scss';
</style>