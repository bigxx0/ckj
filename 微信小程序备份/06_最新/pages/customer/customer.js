
import { getCustomerByName , deleteCustomer } from '../../api/customers'
import {showToast} from '../../api/message'
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchList: null,
        showDel: false,
        menuPosition: null,
        customerId:'',
        selectedId:null
    },
    // 初始化搜索列表
    async initSearchList(){
        // http请求，当给后端的参数为空的时候，返回所有客户的信息
        const result = await getCustomerByName('')
        console.log(result);
        this.setData({
            searchList: result.data.data
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.initSearchList()

    },
    collapseItem(event) {
        let isFromRepair = app.globalData.isFromRepair

        wx.setStorageSync('customerInfo', {
            contactMan: event.currentTarget.dataset.contactman,
            customerName: event.currentTarget.dataset.customername,
            customerId: event.currentTarget.dataset.customerid,
            showCustomer: false
        });
        if(!isFromRepair){
            wx.reLaunch({
                url: '/pages/create/create',
            })
        }
        else{
            wx.reLaunch({
                url: '/pages/repair/repair',
            })
        }
        app.globalData.isFromRepair = 0

    },
    catchSearchList(options) {
        console.log("this is what i catch", options);
        this.setData({
            searchList: options.detail.info
        })
    },
    longTap(options) {
        const customerId = options.target.dataset.customerid
        const widthWindow = wx.getSystemInfoSync().windowWidth
        console.log(widthWindow);
        var pageX = options.detail.x
        var pageY = options.detail.y - 35
        var input = null
        if(pageX + 150 > widthWindow ){
            pageX -= 150
            input = "left:" + pageX + "px;" + "top:" + pageY + "px"
        }
        else{
            input = "left:" + pageX + "px;" + "top:" + pageY + "px"
        }
        
        console.log(pageX, pageY);
        this.setData({
            showDel: !this.data.showDel,
            menuPosition: input,
            customerId
        })
    },
    closeMenu() {
        this.setData({
            showDel: !this.data.showDel
        })
    },
    delCustomer(){
        const out = this
        wx.showModal({
          title: '',
          content: '是否要删除',
          success: async (res) => {
            if (res.confirm) {
                const result = await deleteCustomer(this.data.customerId)
                console.log(result);
                // 对所有状态码为401的结果在http.js中进行统一处理
                if (result.data.code == 401) { return }

                else if(result.data.code !== 200){showToast("出现错误，请稍后再尝试","none");return;}
                
                else{showToast("删除成功","success");}
                out.initSearchList()
            }
            if (res.cancel) {
                // pass
            }
          }
        })
    },
    //设置按钮按键的按和离开效果
    mouseClick(options){
      const customerId = options.currentTarget.dataset.customerid
      this.setData({
          selectedId:customerId
      })
  },
  mouseMove(){
      this.setData({
        selectedId:null
      })
  },
})