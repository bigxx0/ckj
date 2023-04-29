// pages/create/create.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderInfo:{},
        pickerShow:false,
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        formatter(type, value) {
          if (type === 'year') {
            return `${value}年`;
          }
          if (type === 'month') {
            return `${value}月`;
          }
          return value;
        }
    },
    TimeInput(){
      this.setData({
        pickerShow:!this.data.pickerShow
      })
    },
    cancelTime(){
      this.setData({
        pickerShow:false,
        show: false
      })
    },
    confirmTime(e){
      this.setData({
        pickerShow:false,
        show:false
      })
      console.log(e)
    },
    onInputInfo(event) {
        //防抖处理，此处clearTimeout为清理定时器
        clearTimeout(this.timer)
        // 防抖处理，此处创建定时器作用：当500毫秒内不触发onInput函数的时候，就会执行函数体的内容
        this.timer = setTimeout(()=>{
            this.data.orderInfo[`${event.currentTarget.dataset.params}`] = event.detail.value
            this.setData({
              orderInfo: this.data.orderInfo
            })
            console.log(this.data.orderInfo)
        },500)

      },
      onInput(event) {
        this.setData({
          currentDate: event.detail,
        });
      },
      showPopup() {
    this.setData({ show: true,pickerShow:true });
  },

  onClose() {
    this.setData({ show: false,pickerShow: false });
  },
})