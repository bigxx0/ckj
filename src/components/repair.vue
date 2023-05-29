<template>
    <div id="gdList" class="container">
        <div class="up">
            <div class="title">维修单中心</div>
            <!-- <router-link to="create"><button class="btn">
                    <svg t="1684116157850" class="icon iconAdd" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4272" width="256" height="256">
                        <path
                            d="M871.722667 572.501333a19.968 19.968 0 0 0-23.381334 16.298667 320.64 320.64 0 0 1-316.16 264.533333C354.986667 853.333333 210.901333 709.290667 210.901333 532.138667A321.152 321.152 0 0 1 532.138667 210.944a321.066667 321.066667 0 0 1 316.202666 264.448 20.181333 20.181333 0 0 0 39.68-7.082667 357.504 357.504 0 0 0-56.192-138.368A361.301333 361.301333 0 0 0 532.138667 170.666667 361.386667 361.386667 0 0 0 170.666667 532.138667C170.666667 731.477333 332.842667 893.610667 532.138667 893.610667a360.917333 360.917333 0 0 0 355.882666-297.728 20.181333 20.181333 0 0 0-16.298666-23.381334"
                            fill="#ffffff" p-id="4273"></path>
                        <path
                            d="M531.712 784.341333a21.333333 21.333333 0 0 0 21.333333-21.333333v-209.493333h209.536a21.333333 21.333333 0 0 0 0-42.666667h-209.493333V301.226667a21.333333 21.333333 0 0 0-42.666667 0v209.578666H300.8a21.333333 21.333333 0 0 0 0 42.666667h209.578667v209.536a21.333333 21.333333 0 0 0 21.333333 21.333333"
                            fill="#ffffff" p-id="4274"></path>
                    </svg>新增维修单</button>
            </router-link> -->
        </div>

        <div class="mid">
            <div class="item">创建时间</div>
            <div class="item">客户公司</div>
            <div class="item">带回设备</div>
            <div class="item">损坏原因</div>
            <div class="item">任务</div>
            <div class="item">维修人</div>
            <div class="item">状态</div>
        </div>

        <div v-for="(item, index) in currentList" :key="index">
            <ul class="ulList">
                <li li class="ilList">{{ item.createTime }} </li>
                <li class="ilList">{{ item.customerName }}</li>
                <li class="ilList">{{ item.equipment }}</li>
                <li class="ilList">{{ item.damage }}</li>
                <li class="ilList">{{ item.task }}</li>
                <li class="ilList">{{ item.createBy }}</li>
                <li class="ilList">
                    <div><el-icon>
                            <CollectionTag :class="iconClass(item)" />
                        </el-icon></div>{{ item.status }}
                </li>
            </ul>
        </div>
        <br>

        <!-- 分页功能 -->
        <div class="pages">
            <el-pagination background layout="prev, pager, next" :current-page="currentPage" :page-size="pageSize"
                :total="total" @current-change="handleCurrentChange" />
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import request from '../utils/request'

export default {
    data() {
        return {
            currentPage: 1,
            pageSize: 10,
            total: '',
            repairList: [],
        };
    },
    created() {
        this.dataInit()
    },
    computed: {
        currentList() {
            // start表示当前页之前的所有页占据的数据量,因为数组索引从0开始，所以减一
            const start = (this.currentPage - 1) * this.pageSize
            // 表示从 start 开始，往后截取 this.pageSize 个数据，即本页显示的数据量
            const end = start + this.pageSize
            // 分割数组的数据,从而在页面上呈现本页显示的数据列表。
            return this.repairList.slice(start, end)
            // 获取需要回到顶部的元素
        },
    },
    methods: {
        // 初始化数据
        async dataInit() {
            const res = await request('post', '/dispatch/repair/getRepairList', { status: "" });
            res.data.data.forEach((item, index) => {
                switch (item.status) {
                    case 0:
                        item.status = "未送回"
                        break
                    case 1:
                        item.status = "已送回"
                        break
                }
            });
            this.repairList = res.data.data;
            this.total = res.data.data.length;
        },

        iconClass(item) {
            if (item.status === '未送回') {
                return 'status1';
            } else if (item.status === '已送回') {
                return 'status2';
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


.pages {
    display: flex;
    justify-content: center;
    margin: 30px;
    /* transform: translateY(250px); */
    z-index: 999;
}
</style>