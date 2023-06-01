

// const timestamp = new Date().getTime()  获取时间戳

const formatTime = (timestamp) => {
const currentDate = new Date(timestamp)
const year = currentDate.getFullYear(); // 年份
const month = currentDate.getMonth() + 1; // 月份，注意需要加 1
const day = currentDate.getDate(); // 日
const hour = currentDate.getHours(); // 小时
const minute = currentDate.getMinutes(); // 分钟
const second = currentDate.getSeconds(); //秒
const format_minute = minute < 10 ? '0'+minute:minute
const format_month = month < 10 ? '0'+month:month;
const format_day = day < 10 ? '0'+day:day;
const format_second = second < 10 ? '0'+second:second

    return `${year}-${format_month}-${format_day} ${hour}:${format_minute}:${format_second}`; // 格式化结果


}

export {formatTime}

