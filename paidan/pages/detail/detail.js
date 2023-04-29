Page({
    data: {
      minHour: 10,
      maxHour: 20,
      minDate: new Date().getTime(),
      maxDate: new Date(2050, 10, 1).getTime(),
      currentDate: new Date().getTime(),
    },
  
    onInput(event) {
      this.setData({
        currentDate: event.detail,
      });
      console.log(this.ChangeTimeType(this.data.currentDate))
    },
    ChangeTimeType(timestamp){
        const date = new Date(timestamp)
        const year = date.getFullYear(); // 年份
        const month = date.getMonth() + 1; // 月份，注意需要加 1
        const day = date.getDate(); // 日
        const hour = date.getHours(); // 小时
        const minute = date.getMinutes(); // 分钟
        const formattedDate = `${year}/${month}/${day} ${hour}:${minute}`; // 格式化结果
        return formattedDate
    },
  });
  