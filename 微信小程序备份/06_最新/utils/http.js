const app = getApp()
// let dispatchUrl = 'http://182.43.58.152:9001/dispatch'
let dispatchUrl = 'http://182.43.58.52:9001/dispatch'
let time = 200;//全局loading防抖
// let header = app.globalData.test_header


// 默认请求为GET，默认请求体为{}
const request = ({ url, data = {}, method = "GET" }) => new Promise((resolve, reject) => {

    //   let timer = setTimeout(()=>wx.showLoading({
    //     title: '加载中',
    //   }),time)

    wx.request({
        url: dispatchUrl + url,
        data,
        method,
        // header : {
        //     'content-type': 'application/json',
        //     'authorization': wx.getStorageSync('assess_key').authorization
        // },
        header:app.globalData.test_header,
        success: function (res) {

            //统一处理错误
            handleError(res);
            resolve(res)
            console.log("这里是http.js中的res",res);
        },
        fail: function (err) {
            reject(err)
        },
        complete: function () {
            // wx.hideLoading();
            // clearTimeout(timer)

        }
    })
})

// 处理错误函数
function handleError(res) {
    if (res.data.code !== 200) {
        wx.showToast({
            title: res.data.message,
            icon: 'none'
        })
    }
    if (res.data.code == 401) {
        wx.showToast({
            title: '登录过期，请重新登录',
            icon: 'none'
        })
        //   该功能是清除所有缓存
        //   wx.clearStorageSync()

        //   该API是清除指定的缓存,清除掉之前登录的数据，让用户重新进行登录
        wx.removeStorageSync('userInfo')
        // 清除掉之前的token
        wx.removeStorageSync('assess_key')
        //   找到当前页面的路径，用reverse进行反置，拿到当前的页面路径进行判断
        const currentPage = getCurrentPages().reverse()[0].route
        //   若当前页面路径已经是index的话，则进行跳转之后直接return，防止一直循环 ？？？
        if (currentPage == "pages/index/index") {
            setTimeout(() => {
                wx.redirectTo({
                    url: '/pages/index/index',
                })
            }, 1000)
             return; 
            }
        //   展示完错误信息之后，等待1s之后进行跳转到index页面
        setTimeout(() => {
            wx.redirectTo({
                url: '/pages/index/index',
            })
        }, 1000)
    }


}



export { request, dispatchUrl }