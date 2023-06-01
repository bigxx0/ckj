// pages/details/details.js
import { showToast } from '../../api/message';
import { formatTime } from '../../utils/get_time'
import { updateOrders } from '../../api/orders'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderid: null,
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
        begin: "选择开始时间",
        end: "选择结束时间",
        type: "",
        detail: "",
        isClick: false,
        isOrder:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        try {
            const orderid = options.orderid
            this.setData({
                orderid
            })
        } catch (error) {
            // pass
        }
        // console.log(this);
        // console.log(this.data.orderid);
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
        switch (this.data.type) {
            case "beginTime":
                this.setData({
                    begin: time,
                    show: false
                })
                break;
            case "endTime":
                this.setData({
                    end: time,
                    show: false
                })
                break;
        }
        //   console.log("this is confirmTime",this.data.msg);

    },
    //获取到用户修改的时间，并返回给currentDate，形式是时间戳
    onInput(event) {
        // console.log("这里是event",this.ChangeTimeType(event.detail))
        this.setData({
            currentDate: event.detail,
        });
    },
    showPopup(e) {
        this.setData({ show: true, pickerShow: true, type: e.currentTarget.dataset.type });
    },
    //弹出页面消失
    onClose() {
        this.setData({ show: false, pickerShow: false });
    },
    getCurrentTime(options) {
        const currentTime = formatTime(new Date().getTime())
        console.log(currentTime);
        switch (options.currentTarget.dataset.type) {
            case "beginTime":
                this.setData({
                    begin: currentTime
                })
                break;
            case "endTime":
                this.setData({
                    end: currentTime
                })
                break;
        }
    },
    // 接收到数据，并进行防抖处理
    getTextArea(e) {
        // 清除上一次的定时器
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.setData({
                detail: e.detail.value
            })
        }, 500)

    },

    //设置按钮按键的按和离开效果
    mouseClick() {
        this.setData({
            isClick: true
        })
    },
    mouseMove() {
        this.setData({
            isClick: false
        })
    },
    isOrders(event){
        this.setData ({
            isOrder:event.detail.value
        })
    },
    async commit() {
        // 判断是否有输入信息
        if (this.data.begin == "选择开始时间") { showToast("请输入正确信息", "error"); return }
        if (this.data.end == "选择结束时间") { showToast("请输入正确信息", "error"); return }
        
        const dataParam = {
            orderId: this.data.orderid,
            detail: this.data.detail,
            beginTime: this.data.begin,
            endTime: this.data.end,
            isOrder:this.data.isOrder
        }
        console.log("这是提交之前的参数",dataParam);
        const res = await updateOrders(dataParam)
        if (res.data.code == 200) {
            showToast("已提交", "success")
            setTimeout(() => {
                wx.reLaunch({
                    url: '/pages/accept/accept',
                })
            }, 1500)
        }
        // 对所有状态码为401的结果在http.js中进行统一处理
        else if (res.data.code == 401) { return }

        else {
            showToast("请稍后再试", "error")
        }

    }
})