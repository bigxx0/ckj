<template>
    <div class="container">
        <h1>登录账号</h1>
        <br>
        <br>
        <el-form label-width="60px" style="max-width: 460px">
            <el-form-item label="账号：">
                <el-input v-model="id" />
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="password" />
            </el-form-item>
            <br>
            <el-form-item>
                <el-button type="primary" @click="login()">登录</el-button>
                <el-button @click="reset()">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
import request from '../utils/request'
import { ElNotification } from 'element-plus'

export default {
    data() {
        return {
            id: '',
            password: '',
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        if (!token) {
            // alert("登录过期，请先登录")
            this.fail()
            console.log('token:'+ token)
        }else{
            // alert("您已登录")
            this.logined()
        }
    },
    methods: {
        async login() {
            // alert('ddd')
            const data = {
                id: this.id,
                password: this.password,
            }
            const res = await request('post', '/dispatch/user/login', data)
            if (res.data.code == 200) {
                this.success()
                this.reset()
                // 登录成功后将用户信息保存至本地
                localStorage.setItem('token', res.data.data.token);
                this.name = res.data.data.user.name
                // console.log(this.name)
                this.togdList()
            }
            else {
                this.error()
                this.reset()
            }

        },

        reset() {
            this.id = ''
            this.password = ''
        },

        togdList(name) {
            this.$router.push({
                path: '/gdList',
                query: {
                    name: name
                }

            })
        },

        success() {
            ElNotification({
                title: 'Success',
                message: '登录成功',
                type: 'success',
            })
        },

        logined() {
            ElNotification({
                title: 'Success',
                message: '您已登录',
                type: 'success',
            })
        },

        error() {
            ElNotification({
                title: 'Error',
                message: '登录失败',
                type: 'error',
            })
        },

        fail() {
            ElNotification({
                title: 'Error',
                message: '登录过期，请先登录',
                type: 'error',
            })
        },
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;

}
</style>