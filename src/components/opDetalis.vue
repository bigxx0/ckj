<template>
    <div class="container">
        <div class="left">
            <div class="left-up">
                <h2>商机基本信息</h2>
                <el-form :model="form" label-width="120px" label-position="top" class="form">
                    <el-form-item class="title" label="客户:" style="width: 50%">
                        <el-input v-model="customerName" placeholder="请输入客户" style="width: 60%" />
                    </el-form-item>
                    <el-form-item class="title" label="创建时间:" style="width: 50%">
                        <el-date-picker v-model="date" type="dates" placeholder="请选择日期" style="width: 60%" />
                    </el-form-item>
                    <el-form-item class="title" label="联系人:" style="width: 50%">
                        <el-input v-model="customerName" placeholder="请输入联系人" style="width: 60%" />
                    </el-form-item>
                    <el-form-item class="title" label="电话:" style="width: 50%">
                        <el-input v-model="customerName" placeholder="请输入电话" style="width: 60%" />
                    </el-form-item>
                    <el-form-item class="title" label="意愿:" style="width: 50%">
                        <el-input v-model="customerName" placeholder="请输入意愿" style="width: 60%" />
                    </el-form-item>
                    <el-form-item class="title" label="负责人:" style="width: 50%">
                        <el-input v-model="customerName" placeholder="请输入负责人" style="width: 60%" />
                    </el-form-item>
                </el-form>
            </div>
            <br>
            <h2>商机信息跟进</h2>
            <div class="left-mid">
                <el-form :model="form" label-width="120px" label-position="top" class="form">
                    <el-form-item class="title" label="意愿变化:" style="width: 50%">
                        <el-input v-model="customerName" placeholder="请输入意愿变化" style="width: 60%" />
                    </el-form-item>
                    <el-form-item class="title" label="沟通目标:" style="width: 50%">
                        <el-input v-model="customerName" placeholder="请输入沟通目标" style="width: 60%" />
                    </el-form-item>
                    <el-form-item class="title" label="结果:" style="width: 50%">
                        <el-input v-model="customerName" placeholder="请输入结果" style="width: 60%" />
                    </el-form-item>
                    <el-form-item class="title" label="备注:" style="width: 80%">
                        <el-input v-model="textarea" :rows="3" type="textarea" autosize placeholder="请输入备注"
                            style="width: 100%" />
                    </el-form-item>
                </el-form>
            </div>
            <br>
            <div class="left-down">
                <el-button>暂存</el-button>
                <el-button>转化</el-button>
                <el-button>丢弃</el-button>
                <router-link to="/opportunityList">
                    <el-button style="margin-left: 16px;">返回</el-button>
                </router-link>
            </div>
        </div>
        <div class="right">
            <h2>沟通记录</h2>
            <el-button type="primary" @click="dialogTableVisible = true">
                查看沟通记录
            </el-button>
            <el-dialog v-model="dialogTableVisible" title="第一次记录">
                <el-table :data="gridData">
                    <el-table-column property="date" label="意愿变化" width="150" />
                    <el-table-column property="name" label="结果" />
                    <el-table-column property="address" label="沟通目标" />
                    <el-table-column property="address" label="备注" />
                </el-table>
            </el-dialog>
            <br>
        </div>
    </div>
</template>

<script>
import request from '../utils/request'
import { ElNotification } from 'element-plus'

export default {
    data() {
        return {
            textarea: '',
            content: '',
            date: '',
            detail: '',
            customerName: '',
            customerList: [],
            dialogTableVisible: false,
            gridData: [
                {
                    date: '2016-05-02',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                },
                {
                    date: '2016-05-04',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                },
                {
                    date: '2016-05-01',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                },
                {
                    date: '2016-05-03',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                },
            ]
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 80%;
    justify-content: center;
    align-items: flex-start
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