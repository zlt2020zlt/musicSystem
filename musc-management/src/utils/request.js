import axios from 'axios'
// import { MessageBox, Toast.loading } from 'element-ui'
// import store from '@/store'
import { MessageBox, Message } from 'element-ui'
// import { Toast, Dialog } from 'vant';
// import { getToken } from '@/utils/auth'
import { mpUrl } from '@/api/test'
// var wx = require('weixin-js-sdk');

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    baseURL: '',
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 10000, // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        const token = window.sessionStorage.getItem('token')
        console.log('token: ' + token)
        if (token) {
            config.headers['token'] = token
        }

        // config.headers['token'] = 'b2038ba7525443b0aeccd1582b81ae89'
        // console.log(config)
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data

        // 导出放过
        if (response.headers['content-type'] === 'application/octet-stream;charset=utf-8') {
            return response.data
        }

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 20000) {
            if (res.code === 20008) {
                window.sessionStorage.setItem('token', '')
                var redirectUrlObj = {
                    redirectUrl: encodeURI('http://www.maleiyisheng.cn')
                }
                mpUrl(redirectUrlObj).then(response => {
                    window.location.href = response.data
                })
            } else {
                Message({
                    message: res.message || 'Error',
                    type: 'error',
                    duration: 2 * 1000
                })
            }
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            //   // to re-login
            //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
            //     confirmButtonText: 'Re-Login',
            //     cancelButtonText: 'Cancel',
            //     type: 'warning'
            //   }).then(() => {
            //     store.dispatch('user/resetToken').then(() => {
            //       location.reload()
            //     })
            //   })
            // }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error) // for debug
            // Toast.loading({
            //   message: '服务器开小差了,请您稍后再试',
            //   type: 'error',
            //   duration: 2 * 1000
            // })
        MessageBox.confirm(
            '服务器开小差了,请您稍后再试', {
                confirmButtonText: '刷新重试',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
            // on confirm
            location.reload()
        }).catch(() => {
            // on cancel
            window.WeixinJSBridge.call('closeWindow');
        });
        return Promise.reject(error)
    }
)

export default service