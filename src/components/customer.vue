<template>
  <div class="container">
    <div class="order">
      <h2>添加客户信息</h2>
      <el-form :model="form" label-width="120px" label-position="top">
        <el-form-item class="title" label="企业名称:">
          <el-input v-model.number="customerName" placeholder="请输入企业名称" />
        </el-form-item>
        <el-form-item class="title" label="联系人:">
          <el-input v-model="contactMan" placeholder="请输入联系人" clearable />
        </el-form-item>
        <el-form-item class="title" label="手机号码:">
          <el-input v-model="phone" placeholder="请输入手机号码" clearable />
        </el-form-item>
        <el-form-item class="title" label="维修地址:">
          <el-input v-model="address" autosize type="textarea" placeholder="请输入维修地址" clearable />
        </el-form-item>
        <el-form-item class="title" label="部门:">
          <el-input v-model="department" placeholder="请输入部门" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit()">创建</el-button>
          <router-link to="/create">
            <el-button style="margin-left: 16px;">返回</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script>
import request from '../utils/request'
import { ElNotification } from 'element-plus'

export default {
  data() {
    return {
      customerName: '',
      address: '',
      department: '',
      contactMan: '',
      phone: '',
    }
  },
  methods: {
    // 创建客户
    async submit() {
      const data = {
        customerName: this.customerName,
        address: this.address,
        department: this.department,
        contactMan: this.contactMan,
        phone: this.phone,
      }
      const res = await request('post', '/dispatch/customer/add', data)
      if (res.data.code == 200) {
        this.success()
        this.customerName = '';
        this.address = '';
        this.department = '';
        this.contactMan = '';
        this.phone = '';
      }
      else{
        this.error()
      }

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
  }
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
  font-weight: 600;
}
</style>