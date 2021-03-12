import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: resolve => require(['../pages/LoginIn.vue'], resolve)
    },
    {
        path: '/sysLogin',
        component: resolve => require(['../pages/Login.vue'], resolve)
    },
    {
        path: '/sign-up',
        component: resolve => require(['../pages/SignUp.vue'], resolve)
    },
    {
        path: '/sysHome',
        component: resolve => require(['../components/Home.vue'], resolve),
        children: [{
                path: '/Info',
                component: resolve => require(['../pages/InfoPage.vue'], resolve)
            },
            {
                path: '/Consumer',
                component: resolve => require(['../pages/ConsumerPage.vue'], resolve)
            },
            {
                path: '/Singer',
                component: resolve => require(['../pages/SingerPage.vue'], resolve)
            },
            {
                path: '/SongList',
                component: resolve => require(['../pages/SongListPage.vue'], resolve)
            },
            {
                path: '/Song',
                component: resolve => require(['../pages/SongPage.vue'], resolve)
            },
            {
                path: '/ListSong',
                component: resolve => require(['../pages/ListSongPage.vue'], resolve)
            },
            {
                path: '/Collect',
                component: resolve => require(['../pages/CollectPage.vue'], resolve)
            },
            {
                path: '/Comment',
                component: resolve => require(['../pages/CommentPage.vue'], resolve)
            }

        ]
    },
    {
        path: '/userHome',
        component: resolve => require(['../pages/Home.vue'], resolve),
    },
    {
        path: '/my-music',
        component: resolve => require(['../pages/MyMusic.vue'], resolve)
    },
    {
        path: '/userSinger',
        component: resolve => require(['../pages/Singer.vue'], resolve)
    },
    {
        path: '/userSongList',
        component: resolve => require(['../pages/SongList.vue'], resolve)
    },
    {
        path: '/SongListPage',
        component: resolve => require(['../pages/SongListPage.vue'], resolve)
    },
    {
        path: '/search',
        component: resolve => require(['../pages/Search.vue'], resolve)
    },
    {
        path: '/lyric',
        component: resolve => require(['../pages/Lyric.vue'], resolve)
    },

    {
        path: '/setting',
        component: resolve => require(['../pages/Setting.vue'], resolve)
    },
    {
        path: '/singer-album/:id',
        component: resolve => require(['../pages/SingerAlbum.vue'], resolve)
    },
    {
        path: '/song-list-album/:id',
        component: resolve => require(['../pages/SongListAlbum.vue'], resolve)
    }
]

const router = new VueRouter({ routes });

export default router