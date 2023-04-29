// pages/create/create.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderInfo:{},
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
        msg:"请选择维修时间"
    },
    //用来控制选择时间的v-if有和无
    // TimeInput(){
    //   this.setData({
    //     pickerShow:!this.data.pickerShow
    //   })
    // },

    //用来对时间戳格式进行解析
    ChangeTimeType(timestamp){
        const date = new Date(timestamp)
        const year = date.getFullYear(); // 年份
        const month = date.getMonth() + 1; // 月份，注意需要加 1
        const day = date.getDate(); // 日
        const hour = date.getHours(); // 小时
        const minute = date.getMinutes(); // 分钟
        console.log(typeof minute)  //number
        console.log(String(minute)+"5")
        let format_minute = "" // 使用变量代替常量，并将初始值设置为空字符串
        if (minute < 10) {
            format_minute = "0" + String(minute)
        } else {
            format_minute = String(minute) // 赋值语句不需要加引号
        }
        const formattedDate = `${year}/${month}/${day} ${hour}:${format_minute}`; // 格式化结果
        return formattedDate
    },
    

    //用于取消选择时间的时候弹出的页面框
    cancelTime(){
      this.setData({
        show: false
      })
    },
    //用于确认用户确认的时间，弹出的页面框的【确认】按钮
    confirmTime(e){
        const time = this.ChangeTimeType(e.detail)
      this.setData({
        show:false,
        msg:time
      })
      
      
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
        this.timer = setTimeout(()=>{
            this.data.orderInfo[`${event.currentTarget.dataset.params}`] = event.detail.value
            this.setData({
              orderInfo: this.data.orderInfo
            })
            console.log(this.data.orderInfo)
        },500)

      },
      //展示弹出页面
      showPopup() {
    this.setData({ show: true,pickerShow:true });
  },
    //弹出页面消失
  onClose() {
    this.setData({ show: false,pickerShow: false });
  },

  //之后用来http请求上传数据到服务器
  commit_btn(){
      console.log("hello")
  }
})