// pages/my/my.js
const app = getApp()
import { acceptOrders, getOrdersByStatus, finishOrders } from '../../api/orders'
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { showToast } from '../../api/message'
import { store } from '../../store/store'

Page({
    /**
     * 页面的初始数据
     */
    data: {

        active: 0,
        dataInfo_test: [{
            "address": "江门蓬江",
            "beginTime": "2023-04-26 16:53:15",
            "contactMan": "赵六",
            "content": "修理打印机",
            "createBy": "李四",
            "createTime": "2023-04-20 17:07:38",
            "customerId": 1000001,
            "customerName": "阿尔卑斯2",
            "department": "行政部",
            "detail": "打印机损坏需更换零件",
            "endTime": "2023-04-26 16:53:12",
            "icon_name": "arrow",
            "imgListStr": null,
            "isShow": false,
            "leader": "王五",
            "orderId": 1000001,
            "phone": "12345678910",
            "status": 0,
            "typeList": null,
            "worker": "张三"
        }, {
            "address": "江门蓬江",
            "beginTime": "2023-04-26 16:53:15",
            "contactMan": "赵六",
            "content": "修理打印机",
            "createBy": "李四",
            "createTime": "2023-04-20 17:07:38",
            "customerId": 1000001,
            "customerName": "阿尔卑斯2",
            "department": "行政部",
            "detail": "打印机损坏需更换零件",
            "endTime": "2023-04-26 16:53:12",
            "icon_name": "arrow",
            "imgListStr": null,
            "isShow": false,
            "leader": "王五",
            "orderId": 1000001,
            "phone": "12345678910",
            "status": 0,
            "typeList": null,
            "worker": "张三"
        }],
        dataInfo: null,
        index: "",
        displayShow: "display:none",
        windowHeight: null,
        dotInfo:null,
        isToDetail:null
    },
    onLoad() {
        const storageInfo = wx.getStorageSync('info')
        this.setData ({
            dotInfo : storageInfo.dotInfo
        })
    },

    //在点击不同的tab键的时候，会触发不同的事件【待接单】、【未完成】、【已完成】
    tabChange(event) {
        //点击不同tab栏的时候，会进行变更active的值
        this.setData({
            active: event.detail.name
        })
        // console.log(this.data.active);
        this.initInformation()
    },

    // 当用户点击接受或者拒绝会触发该事件
    async isAccept(param) {
        // this.currentTimeStamp = new Date().getTime()
        const out = this
        // type代表的是接受与拒接工单：
        const type = param.currentTarget.dataset.type
        const active = param.currentTarget.dataset.active
        const orderId = param.currentTarget.dataset.orderid
        let dataParam = {
            orderId: orderId,
            type: type
        }

        // 开始进行http请求，请求类型是：PUT，表示是否接受工单，参数为工单的id和是否接受，以及token

        let info = type == 0 ? "拒绝" : "接受"
        if (active == "revoke") { info = "撤销" }
        wx.showModal({
            content: info + "该工单",
            async success(res) {
                // 若用户同意
                if (res.confirm) {
                    const result = await acceptOrders(dataParam)
                    if (result.data.code == 200) {
                        showToast(type == 1 ? "已接受" : active == "revoke" ? "已撤销" : "已拒绝", "success")

                    }
                    // 对所有状态码为401的结果在http.js中进行统一处理
                    else if (result.data.code == 401) { return }
                    else { showToast(res.data.message, "none"); return }

                    // 如果操作不是撤销的话，则进行对小红点数量的 -1 操作
                    // console.log(out.data.dotInfo);
                    out.initInformation()
                }
                else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })





    },
    // 重新初始化数据
    async initInformation() {
        // 真的http请求
        //#region 
        let dataParam = {
            status: this.data.active + 1
        }
        console.log("getOrdersByStatus请求的参数为", dataParam);

        const res = await getOrdersByStatus(dataParam)
        // 当请求的数据返回的code不为200的时候，输出后端传来的数据
        // 对所有状态码为401的结果在http.js中进行统一处理
        if (res.data.code == 401) { return }
        else if (res.data.code != 200) {
            this.setData({ dataInfo: null })
            wx.showToast({ title: res.data.message, icon: 'none' })
            return
        }
        //对所得到的数据进行处理，向每一个对象中添加两个字段分别控制【单元格的图标】和【下拉菜单的显示】
        res.data.data.forEach((item) => {
            item['isShow'] = false
            item['icon_name'] = "arrow"
        })
        // 更新展示的列表
        this.setData({ dataInfo: res.data.data })

    },
    async finishOrders(event) {
        const out = this
        await wx.showModal({
            content: '即将完成订单，是否有单？',
            success: async (res) => {
                if (res.confirm) {
                    const result = await finishOrders(event.currentTarget.dataset.orderid)
                    if (result.data.code == 200) { showToast("已完成", "success") }
                    // 对所有状态码为401的结果在http.js中进行统一处理
                    else if (result.data.code == 401) { return }
                    else { showToast(res.data.message, "none") }
                    out.initInformation()
                }
                else {

                }
            }
        })
    },
    // 点击详情按钮进行跳转
    toDetails(event) {
        console.log(event.currentTarget.dataset.orderid);
        const orderid = JSON.stringify(event.currentTarget.dataset.orderid)
        wx.navigateTo({
            //   url: '/pages/details/details?orderid=' + orderid + '&currentTimeStamp=' + this.currentTimeStamp,
            url: '/pages/details/details?orderid=' + orderid,

        })
    },
    onShow() {

        const windowHeight = wx.getSystemInfoSync().windowHeight
        this.setData({
            windowHeight
        })

        // 在页面开始的时候，进行初始化页面数据
        this.initInformation()
    },
    mouseClick() {

    }

})

