<template>
  <div class="container">
    <div class="order">
      <h3>创建工单</h3>
      <el-form :model="form" label-width="120px" label-position="top">
        <el-form-item class="title" label="客户:">
          <el-input v-model="customerName" placeholder="请输入搜索关键字" style="width: 50%" />
          <el-dropdown style="position: absolute; right: 48% ;" trigger="click">
            <span class="el-dropdown-link" @click="onSearch">
              <svg t="1684141482825" class="icon iconAdd" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="3417" width="200" height="200">
                <path
                  d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z"
                  fill="#666666" p-id="3418"></path>
              </svg>
            </span>
            <template #dropdown>
              <el-dropdown-menu class="customerList">
                <el-dropdown-item v-for="(item, index) in customerList" :key="index" @click="onIndex(item)">
                  {{ item.customerName }}&nbsp;{{ item.contactMan }}&nbsp;{{ item.address }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <router-link to="/customer">
            <el-button type="primary" style="margin-left: 16px;">添加客户</el-button>
          </router-link>
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
          <el-button type="primary" @click="submit()">创建</el-button>
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
import request from '../utils/request'
import { ElNotification } from 'element-plus'

export default {
  data() {
    return {
      content: '',
      date1: '',
      date2: '',
      detail: '',
      customerName: '',
      customerList: [],
    }
  },
  methods: {
    // 创建工单
    async submit() {
      // console.log('submit!')
      const data = {
        customerId: this.customerId,
        content: this.content,
        detail: this.detail,
        taskTime: this.date1 + ' ' + this.date2
      }
      const res = await request('post', '/dispatch/order/add', data)
      if (res.data.code == 200) {
        this.success()
        // 清空输入框、
        this.content = '';
        this.date1 = '';
        this.date2 = '';
        this.detail = '';
        this.customerName = '';
      }
      else {
        // console.log("错")
        this.error()
      }
    },

    // 请求客户数据列表
    async onSearch() {
      const customerName = this.customerName
      const res = await request('post', '/dispatch/customer/getCustomerList', { customerName })
      this.customerList = res.data.data;
    },

    // 传参，将点击的客户名赋值到输入框内
    onIndex(item) {
      this.customerName = item.customerName
      this.customerId = item.customerId
      console.log(this.customerName, this.customerId)
    },

    success() {
      ElNotification({
        title: 'Success',
        message: '创建成功',
        type: 'success',
      })
    },
    
    error() {
      ElNotification({
        title: 'Error',
        message: '创建失败，请验证填写内容',
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
  width: 100%;
  justify-content: center;
  align-items: center;
  transform: translateY(-300px);
}

.title {
  font-weight: 600;
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