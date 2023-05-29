<template>
  <div id="gdList" class="container">
    <div class="up">
      <div class="title">商机中心</div>
      <router-link to="opcreate"><button class="btn">
          <svg t="1684116157850" class="icon iconAdd" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="4272" width="256" height="256">
            <path
              d="M871.722667 572.501333a19.968 19.968 0 0 0-23.381334 16.298667 320.64 320.64 0 0 1-316.16 264.533333C354.986667 853.333333 210.901333 709.290667 210.901333 532.138667A321.152 321.152 0 0 1 532.138667 210.944a321.066667 321.066667 0 0 1 316.202666 264.448 20.181333 20.181333 0 0 0 39.68-7.082667 357.504 357.504 0 0 0-56.192-138.368A361.301333 361.301333 0 0 0 532.138667 170.666667 361.386667 361.386667 0 0 0 170.666667 532.138667C170.666667 731.477333 332.842667 893.610667 532.138667 893.610667a360.917333 360.917333 0 0 0 355.882666-297.728 20.181333 20.181333 0 0 0-16.298666-23.381334"
              fill="#ffffff" p-id="4273"></path>
            <path
              d="M531.712 784.341333a21.333333 21.333333 0 0 0 21.333333-21.333333v-209.493333h209.536a21.333333 21.333333 0 0 0 0-42.666667h-209.493333V301.226667a21.333333 21.333333 0 0 0-42.666667 0v209.578666H300.8a21.333333 21.333333 0 0 0 0 42.666667h209.578667v209.536a21.333333 21.333333 0 0 0 21.333333 21.333333"
              fill="#ffffff" p-id="4274"></path>
          </svg>创建商机</button>
      </router-link>
    </div>



    <router-view></router-view>
    <div class="mid">
      <div class="item">创建时间</div>
      <div class="item">客户公司</div>
      <!-- <div class="item">联系人</div>
      <div class="item">电话</div> -->
      <div class="item">意愿</div>
      <div class="item">备注</div>
      <div class="item">结果</div>
      <div class="item">负责人</div>
      <div class="item">操作</div>
    </div>

    <div v-for="(item, index) in currentList" :key="index">
      <ul class="ulList">
        <li class="ilList">2020/12/25 12:25:20 </li>
        <!-- <li class="ilList">{{ item.customerName }} </li> -->
        <li class="ilList">{{ item.customerName }}</li>
        <li class="ilList">{{ item.content }}</li>
        <li class="ilList">{{ item.address }}</li>
        <li class="ilList">
          <div><el-icon>
              <CollectionTag :class="iconClass(item)" />
            </el-icon></div>{{ item.status }}
        </li>
        <li class="ilList">{{ item.worker ? item.worker : "未分配！" }}</li>
        <li class="ilList">
          <ul class="edit">
            <div>
              <!-- 确认是否删除 -->
              <el-dropdown trigger="click">
                <div class="el-dropdown-link">
                  <li class="edit-li">删除</li>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="onDelete(item.orderId)">确认</el-dropdown-item>
                    <el-dropdown-item>取消</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>

            <!-- 查看详情 -->
            <div>
              <el-dropdown>
                <div class="el-dropdown-link">
                  <li class="edit-li" @click="toComponentTwo(index)">详情</li>
                </div>
              </el-dropdown>
            </div>
          </ul>
        </li>
      </ul>
    </div>


    <br>

    <!-- 分页功能 -->
    <div class="pages">
      <el-pagination background layout="prev, pager, next" :current-page="currentPage" :page-size="pageSize"
        :total="total" @current-change="handleCurrentChange" />
    </div>

  </div>
</template>

<script>
import request from '../utils/request'
import { ElNotification } from 'element-plus'

export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      userId: '',
      userName: '',
      departMent: '',
      workerList: [],
      orderId: '',
      status: '',
      employeeId: '',
      // messageList: [
      //     { id: 1, date: '2022.05.21 12:23', administrator: "小芸", content: "维修打印机维修打印机印机维修打印机", address: "江门市蓬江区凤湾里11栋1层", state: "未分配", status: "status1" },
      //     { id: 2, date: '2023.05.21 12:23', administrator: "小芸1", content: "111维修打印机维修打印机印机维修打印机", address: "111江门市蓬江区凤湾里11栋1层", state: "未接受", status: "status2" },
      //     { id: 3, date: '2024.05.21 12:23', administrator: "小芸2", content: "222维修打印机维修打印机印机维修打印机", address: "222江门市蓬江区凤湾里11栋1层", state: "进行中", status: "status3" },
      //     { id: 4, date: '2025.05.21 12:23', administrator: "小芸3", content: "333维修打印机维修打印机印机维修打印机", address: "3333江门市蓬江区凤湾里11栋1层", state: "已完成", status: "status4" },
      // ],
      messageList: [],
    };
  },
  async created() {
    this.dataInit()
  },
  computed: {
    currentList() {
      // start表示当前页之前的所有页占据的数据量,因为数组索引从0开始，所以减一
      const start = (this.currentPage - 1) * this.pageSize
      // 表示从 start 开始，往后截取 this.pageSize 个数据，即本页显示的数据量
      const end = start + this.pageSize
      // 分割数组的数据,从而在页面上呈现本页显示的数据列表。
      return this.messageList.slice(start, end)
      // 获取需要回到顶部的元素
    },
  },
  methods: {
    // 初始化数据
    async dataInit() {
      const res = await request('post', '/dispatch/order/getDivideOrderList', { status: -1, type: 0 });
      res.data.data.forEach((item, index) => {
        switch (item.status) {
          case 0:
            item.status = "未分配"
            break
          case 1:
            item.status = "未接受"
            break
          case 2:
            item.status = "进行中"
            break
          case 3:
            item.status = "已完成"
            break
        }
      });
      this.messageList = res.data.data;
      this.total = res.data.data.length;
    },

    iconClass(item) {
      if (item.status === '未分配') {
        return 'status1';
      } else if (item.status === '未接受') {
        return 'status2';
      } else if (item.status === '进行中') {
        return 'status3';
      } else if (item.status === '已完成') {
        return 'status4';
      }
    },

    // 分页功能
    handleCurrentChange(val) {
      // console.log(`当前页码：${val}`)
      // 根据新的页码重新获取对应页的数据，并更新到 currentList 中
      this.currentPage = val;
      let el = document.getElementsByClassName('.heading');
      // console.log(el)
      // 将滚动位置设置为 0
      el.scrollTop = 0;
    },

    // 请求员工数据列表
    async onSearch(orderId, status) {
      this.orderId = orderId
      this.status = status
      const res = await request('get', '/dispatch/user/getUserList',);
      this.workerList = res.data.data;
    },

    // 分配
    async onChangestate(item) {
      const Id = item.id
      const orderId = this.orderId
      const status = this.status
      const res = await request('put', '/dispatch/order/divide/' + orderId + '/' + Id,);
      if (status != '未分配') {
        console.log(status)
        this.errorDiv()
      }
      else if (res.data.code == 200) {
        this.successDiv()
        this.dataInit()
      }
    },

    // 删除
    async onDelete(orderId) {
      const res = await request('delete', '/dispatch/order/remove', { orderId });
      if (res.data.code == 200) {
        this.successDel()
        this.dataInit()
        return true;
      }
    },

    // 修改
    async ongdChange(item) {
      console.log(item)
      // localStorage只支持存储字符串类型的数据，如果需要存储对象类型的数据，则需要将其先序列化为JSON字符串，再存储到localStorage中，取出时再反序列化为对象。
      localStorage.setItem('gdInfo', JSON.stringify({
        orderId: item.orderId,
        customerName: item.customerName,
        customerId: item.customerId,
        content: item.content,
        taskTime: item.taskTime,
        detail: item.detail,
      }))
      // console.log("localStorage:", localStorage);
    },

    // 路由组件传参
    toComponentTwo(index) {
      // 跳转到组件二，将 index 值作为参数传递
      this.$router.push({
        path: '/opDetalis',
        query: {
          index: index
        }
      })
    },

    successDiv() {
      ElNotification({
        title: 'Success',
        message: '分配成功',
        type: 'success',
      })
    },
    errorDiv() {
      ElNotification({
        title: 'Error',
        message: '分配失败',
        type: 'error',
      })
    },
    successDel() {
      ElNotification({
        title: 'Success',
        message: '删除成功',
        type: 'success',
      })
    },
    errorDel() {
      ElNotification({
        title: 'Error',
        message: '删除失败',
        type: 'error',
      })
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 80%;
  float: right;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
}

.up {
  display: flex;
  width: 100%;
  height: 110px;
  float: right;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between
}


.btn {
  width: 260px;
  height: 50px;
  background-color: #1975ff;
  color: #fff;
  font-size: 18px;
  margin: 30px 26px;
  border-radius: 8px;
  border: 0px;
  cursor: pointer;

}

.btn:hover {
  background-color: #0255d1;
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

.mid {
  display: flex;
  width: 1520px;
  height: 72px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* transform: translate(140px, 250px); */
  background-color: #fafafa;
  /* border: solid 1px #e6e3e3; */
  box-shadow: 1px 1px 3px #c4c2c2;
  font-size: 18px;
}


.item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  /* margin: 0px 63px; */
  /* transform: translateY(150px); */
}

.ulList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1520px;
  /* transform: translate(140px, 250px); */
  padding: 0;
  font-size: 18px;
}


.ilList {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 98px;
  border-bottom: solid 1px #e6dede;
  flex: 1;
  overflow: hidden;
  padding: 8px 15px;
}

.edit {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  flex: 1;
}

.edit-more {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0;
  flex: 1;
}

.edit-li {
  margin: 0 5px;
  color: #519be0;
  font-size: 16px;
  vertical-align: middle;
  cursor: pointer;
}

.status {
  width: 28px;
  height: auto;
  vertical-align: middle;
}

.status1 {
  width: 28px;
  height: auto;
  vertical-align: middle;
  color: red;
}

.status2 {
  width: 28px;
  height: auto;
  vertical-align: middle;
  color: green;
}

.status3 {
  width: 28px;
  height: auto;
  vertical-align: middle;
  color: yellow;
}

.status4 {
  width: 28px;
  height: auto;
  vertical-align: middle;
  color: blue;
}

.pages {
  display: flex;
  justify-content: center;
  margin: 30px;
  /* transform: translateY(250px); */
  z-index: 999;
}
</style>