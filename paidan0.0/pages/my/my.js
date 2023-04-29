// pages/my/my.js

Page({
    /**
     * 页面的初始数据
     */
    data: {
        date: '',
        show: false,
        calendar_info:'选择日期',
        minDate: new Date(2023, 0, 1).getTime(),
        maxDate: new Date(2023, 12, 31).getTime(),
    },
    //用来选择时间，使得日历显示
    onDisplay() {
        this.setData({ show: true });
      },
    //用来转换date中的日期的函数
    formatDate(date) {
        date = new Date(date);
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      },
      //在选定日期之后按确定调用的函数
    onConfirm(event) {
        const [start, end] = event.detail;
        this.setData({
          show: false,
          date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
          calendar_info:"选择的日期是"

        });
        console.log(this.data.date)
      },
      //当点击“X”按钮的时候，会触发的事件
      onClose(){
        this.setData({
            show:false
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
       
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
       
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})