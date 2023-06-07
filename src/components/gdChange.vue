<template>
  <div class="container">
    <div class="order">
      <h2>修改订单信息</h2>
      <el-form :model="form" label-width="120px" label-position="top">
        <el-form-item class="title" label="客户:">
          <el-input v-model="customerName" placeholder="请输入搜索关键字" style="width: 50%" />
        </el-form-item>
        <el-form-item class="title" label="工单内容:">
          <el-input v-model="content" autosize type="textarea" placeholder="输入报修内容" clearable />
        </el-form-item>
        <el-form-item class="title" label="维修时间:">
          <el-col :span="11">
            <el-date-picker v-model="date1" type="date" placeholder="选择日期" style="width: 100%" format="YYYY/MM/DD"
              value-format="YYYY-MM-DD" />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker v-model="date2" placeholder="选择时间" style="width: 100%" format="HH:mm:ss"
              value-format="HH:mm:ss" />
          </el-col>
        </el-form-item>
        <el-form-item class="title" label="工单备注:">
          <el-input v-model="detail" autosize type="textarea" placeholder="输入备注" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="ongdChange()">修改</el-button>
          <router-link to="/gdList">
            <el-button style="margin-left: 16px;">返回</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>

  <router-view></router-view>
</template>
  
<script>
import { ElNotification } from 'element-plus'
import request from '../utils/request';

export default {
  data() {
    return {
      orderId: '',
      customerId: '',
      content: '',
      date1: '',
      date2: '',
      detail: '',
      customerName: '',
      customerList: [],
    }
  },
  mounted() {
    const gdInfoStr = localStorage.getItem('gdInfo')
    const gdInfo = JSON.parse(gdInfoStr)
    console.log(gdInfo)
    this.orderId = gdInfo.orderId
    this.customerName = gdInfo.customerName
    this.content = gdInfo.content
    this.detail = gdInfo.detail
    this.customerName = gdInfo.customerName
  },
  methods: {
    // 修改工单
    async ongdChange() {
      // console.log('submit!')
      const data = {
        orderId: this.orderId,
        customerId: this.customerId,
        content: this.content,
        detail: this.detail,
        taskTime: this.date1 + ' ' + this.date2
      }
      const res = await request('put', '/dispatch/order/update', data)
      if (res.data.code == 200) {
        this.success()
      }
      else {
        this.error()
      }
    },
    success() {
      ElNotification({
        title: 'Success',
        message: '修改成功，点击按钮返回工单页面',
        type: 'success',
      })
    },
    error() {
      ElNotification({
        title: 'Error',
        message: '修改失败，请验证填写内容',
        type: 'error',
      })
    },
  },
}
</script>
  
  
  
<style scoped>
.container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 98%;
  justify-content: center;
  align-items: center;
  /* transform: translateY(-300px); */
}

.title {
  font-size: 3em;
  line-height: 1;
  font-weight: 900;
}

.iconAdd {
  width: 25px;
  height: 25px;
  margin-right: 18px;
  /* float: left; */
  position: relative;
  top: 10%;
  /* background-color: red; */
}

.customerList {
  height: 310px;
  overflow: auto;
}
</style>