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
      <div class="item">意愿</div>
      <div class="item">结果</div>
      <div class="item">负责人</div>
      <div class="item">操作</div>
    </div>

    <div v-for="(item, index) in messageList" :key="index">
      <ul class="ulList">
        <li class="ilList">{{ item.createTime }}</li>
        <li class="ilList">{{ item.customerName }}</li>
        <li class="ilList">{{ item.desire }}</li>
        <li class="ilList">
          <div><el-icon>
              <CollectionTag :class="iconClass(item)" />
            </el-icon></div>{{ item.status }}
        </li>
        <li class="ilList">{{ item.contactMan }}</li>
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
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange" @prev-click="handlePrevClick" @next-click="handleNextClick" />
    </div>

  </div>
</template>

<script>
import request from '../utils/request'
import { ElNotification } from 'element-plus'

export default {
  data() {
    return {
      messageList: [],
    };
  },
  async created() {
    this.dataInit()
  },

  methods: {
    // 初始化数据
    async dataInit() {
      const res = await request('post', '/dispatch/business/list-condition', { pageNumber: this.pageNumber, pageSize: '' });
      res.data.data.list.forEach((item, index) => {
        switch (item.status) {
          case 0:
            item.status = "沟通中"
            break
          case 1:
            item.status = "已转化"
            break
          case 2:
            item.status = "丢弃"
            break
        }
      });
      this.messageList = res.data.data.list;
      this.total = res.data.data.total
      // console.log( this.total )
      // console.log( this.messageList)
    },

    iconClass(item) {
      if (item.status === '沟通中') {
        return 'status1';
      } else if (item.status === '已转化') {
        return 'status2';
      } else if (item.status === '丢弃') {
        return 'status3';
      } 
    },

    // 点击页数翻页
    handleCurrentChange(page) {
      this.pageNumber = page
      this.dataInit()
    },

    // 点击前进翻页
    handlePrevClick() {
      this.pageNumber = this.pageNumber 
      this.dataInit()
    },

    // 点击后退翻页
    handleNextClick() {
      this.pageNumber = this.pageNumber 
      this.dataInit()
    },

    // // 删除
    // async onDelete(orderId) {
    //   const res = await request('delete', '/dispatch/order/remove', { orderId });
    //   if (res.data.code == 200) {
    //     this.successDel()
    //     this.dataInit()
    //     return true;
    //   }
    // },


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
  color: blue;
}


.pages {
  display: flex;
  justify-content: center;
  margin: 30px; 
  z-index: 999;
}
</style>