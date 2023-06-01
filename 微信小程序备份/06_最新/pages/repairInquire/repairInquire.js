// pages/details/details.js
import { showToast } from '../../api/message';
import { formatTime } from '../../utils/get_time'
import { addRepairList,getRepairList } from '../../api/repairs'
let app = getApp()
let oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
Page({

    /**
     * 页面的初始数据
     */
    data: {
        minDate: oneYearAgo.getTime(),
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
        minTime: "最小时间",
        maxTime: "最大时间",
        type: "",
        isSearch:true,
        isOrder:null


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
    },
    selectCustomer() {
        app.globalData.isFromRepair = 1
        wx.navigateTo({
            url: '/pages/add/add',
        })
    },



    //用于取消选择时间的时候弹出的页面框
    cancelTime() {
        this.setData({
            show: false
        })
    },
    //用于确认用户确认的时间，弹出的页面框的【确认】按钮
    confirmTime(e) {
        console.log("asdasdasfasgsdhbsfnbdfxhnjdgh");
        const time = formatTime(e.detail)
        switch (this.data.type) {
            case "minTime":
                this.setData({
                    minTime: time,
                    show: false
                })
                break;
            case "maxTime":
                this.setData({
                    maxTime: time,
                    show: false
                })
                break;
        }
        //   console.log("this is confirmTime",this.data.msg);

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
    isOrders(event){
        // console.log(event.detail.value);
        this.setData ({
            isOrder:event.detail.value
        })

    },


    async search(){
        let dataParam = {
            status:this.data.isOrder,
            maxTime:this.data.maxTime,
            minTime:this.data.minTime,

        }

        const res = await getRepairList(dataParam)
        if(res.data.code !== 200){showToast("出现错误，请重试","none");return}
        if(res.data.data.length == 0){
            showToast("暂时没有数据","none")
        }
        else{
            this.setData ({
                isSearch:!this.data.isSearch
            })
        }
    
    }


})