//左侧导航栏
const navMsg = [
    { name: '首页', path: '/userHome' },
    { name: '歌单', path: '/userSongList' },
    { name: '歌手', path: '/userSinger' },
    { name: '我的音乐', path: '/my-music' }
]

//右侧导航栏
const loginMsg = [
    // { name: '登录', path: '/userHome/login-in' },
    // { name: '注册', path: '/sign-up' }
]

//用户下拉菜单
const menuList = [
    { name: '设置', path: '/setting' },
    { name: '退出', path: 0 }
]


export {
    navMsg,
    loginMsg,
    menuList
}