<template>
  <div class="container">
    <div class="left">
      <div class="left-up">
        <h2>商机基本信息</h2>
        <el-form
          :model="form"
          label-width="120px"
          label-position="top"
          class="form"
        >
          <el-form-item class="title" label="客户:" style="width: 50%">
            <el-input
              v-model="customerName"
              placeholder="请输入客户"
              style="width: 60%"
            />
          </el-form-item>
          <el-form-item class="title" label="创建时间:" style="width: 50%">
            <el-input
              v-model="createTime"
              placeholder="请选择日期"
              style="width: 60%"
            />
          </el-form-item>
          <el-form-item class="title" label="联系人:" style="width: 50%">
            <el-input
              v-model="contactMan"
              placeholder="请输入联系人"
              style="width: 60%"
            />
          </el-form-item>
          <el-form-item class="title" label="电话:" style="width: 50%">
            <el-input
              v-model="phone"
              placeholder="请输入电话"
              style="width: 60%"
            />
          </el-form-item>
          <el-form-item class="title" label="意愿:" style="width: 50%">
            <el-input
              v-model="desire"
              placeholder="请输入意愿"
              style="width: 60%"
            />
          </el-form-item>
          <el-form-item class="title" label="负责人:" style="width: 50%">
            <el-input
              v-model="worker"
              placeholder="请输入负责人"
              style="width: 60%"
            />
          </el-form-item>
        </el-form>
      </div>
      <br />
      <h2>商机信息跟进</h2>
      <div class="left-mid">
        <el-form
          :model="form"
          label-width="120px"
          label-position="top"
          class="form"
        >
          <el-form-item class="title" label="意愿变化:" style="width: 50%">
            <el-input
              v-model="desireChange"
              placeholder="请输入意愿变化"
              style="width: 60%"
              autosize
              type="textarea"
            />
          </el-form-item>
          <el-form-item class="title" label="沟通目标:" style="width: 50%">
            <el-input
              v-model="target"
              placeholder="请输入沟通目标"
              style="width: 60%"
              autosize
              type="textarea"
            />
          </el-form-item>
          <el-form-item class="title" label="结果:" style="width: 50%">
            <el-input
              v-model="result"
              placeholder="请输入结果"
              style="width: 60%"
              autosize
              type="textarea"
            />
          </el-form-item>
          <el-form-item class="title" label="备注:" style="width: 80%">
            <el-input
              v-model="detail"
              type="textarea"
              autosize
              placeholder="请输入备注"
              style="width: 100%"
            />
          </el-form-item>
        </el-form>
      </div>
      <br />
      <div class="left-down">
        <el-button @click="add">提交</el-button>
        <el-button @click="transform">转化</el-button>
        <el-popconfirm
          width="200"
          confirm-button-text="确定"
          cancel-button-text="取消"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="确定丢弃吗?此操作无法撤销！"
          @confirm="confirmEvent"
        >
          <template #reference>
            <el-button>丢弃</el-button>
          </template>
        </el-popconfirm>
        <router-link to="/opportunityList">
          <el-button style="margin-left: 16px">返回</el-button>
        </router-link>
      </div>
    </div>
    <div class="right">
      <h2>沟通记录</h2>
      <el-button type="primary" @click="search(), (dialogTableVisible = true)">
        查看沟通记录
      </el-button>
      <el-dialog v-model="dialogTableVisible" title="沟通历史记录">
        <el-table :data="opMessage">
          <el-table-column property="recordTime" label="创建时间" width="200" />
          <el-table-column property="desireChange" label="意愿变化" />
          <el-table-column property="target" label="沟通目标" />
          <el-table-column property="result" label="结果" />
          <el-table-column property="detail" label="备注" />
        </el-table>
      </el-dialog>
      <br />
    </div>
  </div>
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
      status: "",
      worker: "",
      opDetails: "",
      createTime: "",
      id: "",
      dialogTableVisible: false,
      opMessage: [],
    };
  },
  created() {
    // 初始化数据
    this.parseData()
    // 查看沟通记录   
    this.search();
  },

  methods: {
    // 初始化数据
    parseData(){
      let indexObj = JSON.parse(this.$route.query.index);
      this.opDetails = indexObj;
      for(let key in indexObj) {
        if(indexObj.hasOwnProperty(key)) { // 确认属性是否属于自身（非继承）
          this[key] = indexObj[key];
          // console.log(key)
    }}
    // console.log( "1",this.opDetails)
    },

    // ### 6.3 商机丢弃
    async discard() {
      const Id = this.id;
      const res = await request("put", "/dispatch/business/abandon?id=" + Id);
      res.data.code == 200 ? this.success() : this.error();
    },

    // 点击气泡确认丢弃
    confirmEvent() {
      this.discard();
    },

    // 商机提交
    async add() {
      const data = {
        id: this.id,
        customerName: this.customerName,
        target: this.target,
        desireChange: this.desireChange,
        result: this.result,
        detail: this.detail,
      };
      const res = await request("post", "/dispatch/business/submit", data);
      res.data.code == 200 ? this.success() : this.error();
    },

    // 商机转换
    async transform() {
      const data = {
        businessId: this.id,
        customerName: this.customerName,
        contactMan: this.contactMan,
        phone: this.phone,
        content: this.desire,
      };
      const res = await request("post", "/dispatch/business/transform", data);
      res.data.code == 200 ? this.success() : this.error();
    },

    // 查看沟通记录
    async search() {
      const data = {
        businessId: this.id,
      };
      const res = await request(
        "get",
        "/dispatch/business/recordList?businessId=" + this.id,
        data
      );
      this.opMessage = res.data.data;
      // console.log(this.opMessage);
    },

    success() {
      ElNotification({
        title: "Success",
        message: "操作成功",
        type: "success",
      });
    },

    error() {
      ElNotification({
        title: "Error",
        message: "操作失败",
        type: "error",
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  align-items: flex-start;
  /* background-color: red; */
}

.left {
  /* flex: 2; */
  flex-wrap: wrap;
  width: 50%;
  float: left;
  /* margin: 10px; */
  /* background-color: red; */
}

.left-up {
  display: flex;
  flex-wrap: wrap;
}

.form {
  display: flex;
  flex-wrap: wrap;
}

.right {
  /* flex: 1; */
  flex-wrap: wrap;
  width: 30%;
  float: right;
  /* margin: 10px; */
  /* background-color: blue; */
}
</style>
