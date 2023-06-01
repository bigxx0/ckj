const app = getApp()
import { dispatchOrders } from '../../api/orders'
import { showToast } from '../../api/message'
import {getUserList} from '../../api/users'
import {} from "../../api/users"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderId: null,
        content: null,
        nameWhole: "刘卓楷",
        employeeList: ""

    },
    async dispatch(dataParam) {
        const res = await dispatchOrders(dataParam)
        // 对所有状态码为401的结果在http.js中进行统一处理
        if (res.data.code == 401) { return }

        else if (res.data.code !== 200) { showToast(res.data.message, "success"); return }
        showToast("分配成功", "success")
        setTimeout(() => {
            wx.navigateBack({
                delta: 1 // 返回页面数，这里为 1 表示返回到上一级页面，即 tabBar 页面
            })
        }, 1000)

    },
    orderConfirm(event) {
        const root = this
        let orderId = this.data.orderId
        let employeeId = event.currentTarget.dataset.employeeid
        let employeeName = event.currentTarget.dataset.employeename
        wx.showModal({
            title: '确认',
            content: '【' + this.data.content + '】分配给【' + employeeName + '】',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    let dataParam = {
                        orderId: orderId,
                        employeeId: employeeId
                    }
                    console.log("分配工单的参数", dataParam);
                    root.dispatch(dataParam)
                }
                //   else if (res.cancel) {}
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        const res = await getUserList()
        console.log(res.data.data);
        // 把my页面传递过来的参数进行获取，并且进行赋值
        this.setData({
            orderId: options.orderid,
            content: options.content,
            employeeList:res.data.data
        })





    }
})


// 对人名进行切割
// let lastTwoChars = name.slice(-2);


