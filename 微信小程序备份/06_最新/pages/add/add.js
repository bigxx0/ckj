// pages/add/add.js
import {createCustomer} from '../../api/customers'
let app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      orderInfo:{
        contactMan:"",
        customerName:"",
        phone:""
      },
    },
    //用于获取到每一个input框的数据
    onInputInfo(event) {
      //防抖处理，此处clearTimeout为清理定时器
      clearTimeout(this.timer)
      // 防抖处理，此处创建定时器作用：当500毫秒内不触发onInput函数的时候，就会执行函数体的内容
      this.timer = setTimeout(()=>{
          this.data.orderInfo[`${event.currentTarget.dataset.params}`] = event.detail.value
          // this.setData({
          //   orderInfo: this.data.orderInfo
          // })
          console.log(this.data.orderInfo)
      },300)
    },
    // 按钮事件（提交
    async save_btn(){
        // 检测用户是否有填必要信息
      if(this.data.orderInfo.contactMan == "" || this.data.orderInfo.customerName == ""){
        wx.showToast({
          title: '请输入必填信息',
          icon:'error'
        })
        return}
    //   此处收集数据，将所要post的数据给到dataparam上
      const dataParam = this.data.orderInfo
        // http请求
      const result = await createCustomer(dataParam)
    //   如果后端返回result中的状态码为200，则将当前添加的用户信息存入storage中
      if(result.data.code == 200){
        wx.setStorageSync('customerInfo', {
          contactMan: this.data.orderInfo.contactMan,
          customerName: this.data.orderInfo.customerName,
          customerId:result.data.data.customerId,
          showCustomer:false
        });
        // 展示创建成功
        wx.showToast({
          title: "保存成功",
          icon:'success'
        })
        if(!app.globalData.isFromRepair){
            setTimeout(() => {
                // 在消息框消失后进行一些操作
                wx.reLaunch({
                  url: '/pages/create/create',
                })
              }, 2000); // 延迟 2 秒执行
        }
        else{
            setTimeout(() => {
                // 在消息框消失后进行一些操作
                wx.reLaunch({
                  url: '/pages/repair/repair',
                })
              }, 2000); // 延迟 2 秒执行
        }
        app.globalData.isFromRepair = 0


      }
    // 对所有状态码为401的结果在http.js中进行统一处理
    else if(result.data.code == 401){return}
    },
})