// pages/my/my.js
import { createStoreBindings, mobxMiniProgramBindings, toJS } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
import { getDivideOrders, deleOrders } from '../../api/orders'
import { showToast } from '../../api/message'

Page({



    /**
     * 页面的初始数据
     */
    data: {

        dataList_test: [{
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
            "isShow": true,
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
            "isShow": true,
            "leader": "王五",
            "orderId": 1000001,
            "phone": "12345678910",
            "status": 0,
            "typeList": null,
            "worker": "张三"
        }],
        dataList: null,
        active: 0,
        result: null,
        windowHeight: null,
        dateObj: { type: '-1' }
    },
    //在点击不同的tab键的时候，会触发不同的事件【待分配】、【未完成】、【已完成】
    tabChange(event) {
        //点击不同tab栏的时候，会进行变更active的值
        this.setData({
            active: event.detail.name
        })
        /*从store.js中拿到最新的dateObj，若用户没有选择时间，仅仅点击tab栏，
        则不进行请求数据,即不进行调用getMessageFromServer，直接return
        */
        this.data.dateObj = this.updateDateObj()
        if (this.data.dateObj == null) { return }
        this.getMessageFromServer()
    },
    async getMessageFromServer() {

        //从store.js中拿到最新的dateObj
        this.data.dateObj = {
            ...this.updateDateObj()
        }
        // console.log("从store.js中拿到最新的dateObj",this.data.dateObj);
        /*并将所处理过的active值添加到dateObj身上，作为post请求参数交给后端  */
        this.data.dateObj["status"] = this.data.active

        /*dataParam作为post请求的参数*/
        let dataParam = this.data.dateObj
        console.log("请求之前的参数", dataParam);
        //开始http请求，向后端进行http请求，获取所有工单信息
        const res = await getDivideOrders(dataParam)
        // 开始：判断是否有后端返回的状态码是否为200，不是的话则弹出错误
        // 对所有状态码为401的结果在http.js中进行统一处理
        console.log("this is the res's reuslt",res);
        if (res.code == 401) { return }

        else if (res.code !== 200) {
            showToast(res.message, 'none')
            return
        }

        // 结束
        // const endResult = res.result.rever
        this.setData({
            dataList: res.result
        })
        // console.log(this.data.dataList);
        // console.log(this.data.dataList.length == 0);

    },
    //#region  已经封装到tabItem组件中
    //每一个单元格点击所触发的函数事件，改变icon的图标样式，和将折叠面板显示出来
    // collapseItem(param) {
    //     const index = param.currentTarget.dataset.src
    //     // 将内容显现出来，并且改变icon的样式
    //     this.data.dataList[index].isShow = !this.data.dataList[index].isShow
    //     this.data.dataList[index].icon_name = this.data.dataList[index].isShow ? "arrow-down" : "arrow"
    //     this.setData({
    //         dataList: this.data.dataList
    //     })
    // },
    //#endregion


    // 跳转到分配页面
    gotoDistribute(event) {
        wx.navigateTo({
            url: '/pages/distribute/distribute?orderid=' + event.currentTarget.dataset.orderid + '&content=' + event.currentTarget.dataset.content,
        })
    },
    delOrders(event) {
        const out = this
        wx.showModal({
            content: '是否要删除',
            success: async (res) => {
                if (res.confirm) {
                    let dataParam = {
                        orderId: event.currentTarget.dataset.orderid
                    }
                    const res = await deleOrders(dataParam)
                    if (res.data.code == 200) { showToast("已删除", "success") }
                    // 对所有状态码为401的结果在http.js中进行统一处理
                    else if (res.data.code == 401) { return }

                    else { showToast("出现错误，请重试", "error") }
                    out.getMessageFromServer()
                }
                //   else if (res.cancel) {}
            }
        })

    },
    onLoad() {
        //开始使用全局事件,并定义为bindings
        this.bindings = createStoreBindings(this, {
            store,
            fields: ['dateObj', 'test'],
            actions: {
                updateDateObj: 'updateDateObj',
                commitDateObj: "commitDateObj"
            }
        });

    },

    /*在分配完工单之后，用生命函数钩子进行对数据的重新渲染
      就是指当分配完成之后，调回本页面会重新渲染当前数据
    */
    onShow() {


        console.log("触发了onshow", this.data.test);

        const windowHeight = wx.getSystemInfoSync().windowHeight
        this.setData({
            windowHeight
        })

        if (this.data.dateObj == null) { return }
        this.getMessageFromServer()
        // console.log("我没有return出来");
        // console.log("onShow之后的dataList值",this.data.dataList);


    },
    onHide() {
        // 当触发onHide的时候，将页面数据清空
        // 清空要请求的参数，将dateObj的值设置为null
        // this.commitDateObj(null)

        console.log("触发了onhide");
        this.setData({
            dataList: null
        })
        console.log("onhide之后的dataList值", this.data.dataList);
    },

    //点击返回键的时候，会触发该函数
    onUnload() {
        // 清空要请求的参数，将dateObj的值设置为默认值{type:'-1'}
        this.commitDateObj({ type: '-1' })
        console.log("this is onUnload for my's page");
        this.bindings.destroyStoreBindings()
        this.setData({
            dataList: null
        })
        console.log("onUnload之后的dataList值", this.data.dataList);
    }

})