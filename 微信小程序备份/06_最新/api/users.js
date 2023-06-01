import { request } from '../utils/http'

/**
 *  
1.1身份验证(已完成)
    请求类型：Get
    测试地址：http://182.43.58.52:9001/dispatch/user/login/{code}

| 参数名称 | 是否必须 | 实例      | 说明                |
| ---- | ---- | ------- | ----------------- |
| code | 是    | “xxxxx” | 小程序向企业微信请求获取的code |
 */

const getAccesstoken = (code) => request({ url: '/user/login', data: { code: code }, method: 'GET' })


// const getUserProfile = () => {
//     wx.getUserProfile({
//         desc: '需要授权来获取用户信息',
//         success: (res) => {

//         }
//     })
// }


// 对getUserProfile进行封装
const getUserProfile = () => new Promise((resolve) => {

    wx.getUserProfile({
        desc: '需要授权来获取用户信息',
        success: ({ userInfo }) => {
            userInfo.code = 200
            wx.setStorageSync('userInfo', {
                nickName: userInfo.nickName,
                avatarUrl: userInfo.avatarUrl
            })
            resolve(userInfo)
        },
        fail: function (err) {
            console.log(err);
        }
    })
})

const getQyWxCode = () => new Promise((resolve)=>{
    wx.qy.login({
        success: ({code}) => {
            resolve(code)
        }
    })
})


/**
    4.1 员工列表获取
    请求类型：Get
    测试地址：http://182.43.58.52:9001/dispatch/user/getUserList
    参数列表

| 参数名称          | 是否必须 | 实例     | 说明     |
| ------------- | ---- | ------ | ------ |
| authorization | 是    | “xxxx“ | 访问权限认证 |
 */

 const getUserList = () => request({url:'/user/getUserList'})




export { getAccesstoken , getUserProfile , getQyWxCode , getUserList }