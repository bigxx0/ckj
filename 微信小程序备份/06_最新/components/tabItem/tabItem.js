// components/tabItem/tabItem.js
import { acceptOrders, finishOrders } from '../../api/orders'
import { showToast } from '../../api/message'
Component({
    options: { multipleSlots: true },
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: { icon_name: "arrow" }
        },
        index: {
            type: Number,
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        selectedId: null
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //每一个单元格点击所触发的函数事件，改变icon的图标样式，和将折叠面板显示出来
        collapseItem(param) {
            if(this.data.item.icon_name == "arrow"){
                // console.log(param);
                // // console.log(param.target.offsetTop);
                // wx.pageScrollTo({
                //     scrollTop: param.detail.y,   // 滚动到页面顶部
                //     duration: 300   // 滚动动画时长，单位毫秒，默认为300ms
                //   })
            }

            
            // 将内容显现出来，并且改变icon的样式
            this.data.item.isShow = !this.data.item.isShow
            this.data.item.icon_name = this.data.item.isShow ? "arrow-down" : "arrow"
            this.setData({
                item: this.data.item,
            })
        },
        //设置按钮按键的按和离开效果
        mouseClick(options) {
            const orderid = options.currentTarget.dataset.orderid
            this.setData({
                selectedId: orderid
            })
        },
        mouseMove() {
            this.setData({
                selectedId: null
            })
        },

    },
    lifetimes: {
        attached: function () {

            // console.log(this.data.item.icon_name);
        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
    },

})
