// pages/create/create.js
const app = getApp()
import { ordersCreate } from '../../api/orders'
import { formatTime } from '../../utils/get_time'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderInfo: {},
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            }
            if (type === 'month') {
                return `${value}月`;
            }
            if (type === 'day') {
                return `${value}日`;
            }
            if (type === 'hour') {
                return `${value}点`;
            }
            if (type === 'minute') {
                return `${value}分`;
            }
            return value;
        },
        msg: "请选择维修时间",
        customerInfo: {}
    },
    //用于取消选择时间的时候弹出的页面框
    cancelTime() {
        this.setData({
            show: false
        })
    },
    //用于确认用户确认的时间，弹出的页面框的【确认】按钮
    confirmTime(e) {
        const time = formatTime(e.detail)
        this.setData({
            show: false,
            msg: time
        })
        //   console.log("this is confirmTime",this.data.msg);
        this.data.orderInfo['taskTime'] = time
        console.log(this.data.orderInfo)

    },
    //获取到用户修改的时间，并返回给currentDate，形式是时间戳
    onInput(event) {
        // console.log("这里是event",this.ChangeTimeType(event.detail))
        this.setData({
            currentDate: event.detail,
        });
    },
    //用于获取到每一个input框的数据
    onInputInfo(event) {
        //防抖处理，此处clearTimeout为清理定时器
        clearTimeout(this.timer)
        // 防抖处理，此处创建定时器作用：当500毫秒内不触发onInput函数的时候，就会执行函数体的内容
        this.timer = setTimeout(() => {
            this.data.orderInfo[`${event.currentTarget.dataset.params}`] = event.detail.value
            // this.setData({
            //   orderInfo: this.data.orderInfo
            // })
            console.log(this.data.orderInfo)
        }, 300)

    },
    //展示弹出页面
    showPopup() {
        this.setData({ show: true, pickerShow: true });
    },
    //弹出页面消失
    onClose() {
        this.setData({ show: false, pickerShow: false });
    },

    //之后用来http请求上传数据到服务器
    async commit_btn() {
        console.log(this.data.orderInfo);
        const dataParm = this.data.orderInfo
        // http请求
        const res = await ordersCreate(dataParm)

        console.log(res);
        if (res.data.code == 200) {
            wx.showToast({
                title: '已创建',
                icon: "success"
            })
            setTimeout(() => {
                // 在消息框消失后进行一些操作
                wx.reLaunch({
                    url: '/pages/index/index',
                })
            }, 2000); // 延迟 2 秒执行
        }
        // 对所有状态码为401的结果在http.js中进行统一处理
        else if (res.data.code == 401) { return }
        else {
            wx.showToast({
                title: "创建失败",
                icon: "error"
            })
        }

    },
    onShow() {
        console.log("this is onshow");
        this.setData({
            customerInfo: wx.getStorageSync('customerInfo')
        })
        this.data.orderInfo['customerId'] = this.data.customerInfo['customerId']
    },
    gotoAdd(){
        app.globalData.isFromRepair = 0
        wx.navigateTo({
          url: '/pages/add/add',
        })
    }
})