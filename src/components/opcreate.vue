<template>
  <div class="container">
    <div class="order">
      <h3>创建商机</h3>
      <el-form :model="form" label-width="120px" label-position="top">
        <el-form-item class="title" label="企业名称:">
          <el-input
            v-model="customerName"
            placeholder="输入企业名称"
            clearable
          />
        </el-form-item>
        <el-form-item class="title" label="联系人:">
          <el-input v-model="contactMan" placeholder="输入联系人" clearable />
        </el-form-item>
        <el-form-item class="title" label="联系方式:">
          <el-input v-model="phone" placeholder="输入联系方式" clearable />
        </el-form-item>
        <el-form-item class="title" label="意愿:">
          <el-input v-model="desire" placeholder="输入意愿" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit()">创建</el-button>
          <router-link to="/opportunityList">
            <el-button style="margin-left: 16px">返回</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
import request from "../utils/request";
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      customerName: "",
      contactMan: "",
      phone: "",
      desire: "",
    };
  },
  methods: {
    // 创建商机
    async submit() {
      // console.log('submit!')
      const res = await request("post", "/dispatch/business/add", {
        customerName: this.customerName,
        contactMan: this.contactMan,
        phone: this.phone,
        desire: this.desire,
      });
      console.log(data);
      if (res.data.code == 200) {
        this.success();
        // // 清空输入框、
        this.customerName = "";
        this.contactMan = "";
        this.phone = "";
        this.desire = "";
      } else {
        // console.log("错")
        this.error();
      }
    },

    success() {
      ElNotification({
        title: "Success",
        message: "创建成功",
        type: "success",
      });
    },

    error() {
      ElNotification({
        title: "Error",
        message: "创建失败，请验证填写内容",
        type: "error",
      });
    },
  },
};
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
