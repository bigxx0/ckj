<template>
    <div class="container">
        <div class="up">
            <h1>订单详情</h1>
            <router-link to="/gdList">
                <el-button type="primary" style="margin-left: 50px;">返回</el-button>
            </router-link>
        </div>
        <div><strong>工单号：</strong>{{ gdDetails.orderId }}</div>
        <div><strong>客户名称：</strong>{{ gdDetails.customerName }}</div>
        <div><strong>客户部门：</strong>{{ gdDetails.epartment }}</div>
        <div><strong>维修联系人：</strong>{{ gdDetails.contactMan }}</div>
        <div><strong>维修联系方式：</strong>{{ gdDetails.phone }}</div>
        <div><strong>维修内容：</strong>{{ gdDetails.content }}</div>
        <div><strong>维修备注：</strong>{{ gdDetails.detail }}</div>
        <div><strong>工作时间：</strong>{{ gdDetails.taskTime }}</div>
        <div><strong>工作开始时间：</strong>{{ gdDetails.beginTime }}</div>
        <div><strong>工作结束时间：</strong>{{ gdDetails.endTime }}</div>
        <div><strong>派单人：</strong>{{ gdDetails.leader }}</div>
        <div><strong>接单人：</strong>{{ gdDetails.worker }}</div>
        <div><strong>工单状态：</strong>{{ gdDetails.status }}</div>
        <div><strong>是否有单：</strong>{{ gdDetails.isOrder }}</div>
        <div><strong>工单创建人：</strong>{{ gdDetails.createBy }}</div>
        <div><strong>工单创建时间：</strong>{{ gdDetails.createTime }}</div>
    </div>

    <router-view></router-view>
</template>

<script>
import request from '../utils/request'

export default {
    props: ['index'],
    data() {
        return {
            gdDetails: [],
        }
    },
    created() {
        // this.gdDetail_Show(this.index)
        // const index = this.$route.params.index;
        let index = this.$route.query.index
        this.gdDetail_Show(index)
        // console.log(this.index);
    },
    methods: {
        async gdDetail_Show(index) {
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
            this.gdDetails = res.data.data[index]
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 80%;
    align-content: center;
    align-items: flex-start;
    /* background-color: red; */
    transform: translateY(-320px);
}

.container div {
    font-size: 22px;
    margin: 5px;
}

.up{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>