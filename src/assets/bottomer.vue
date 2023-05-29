<!-- 此组件是底部链接和公司注册信息 -->

<script>
export default {
    props: ['data'],
    data() {
        return {
            data: [
                { id: 1, title: "xx打印机", show: "链接1", show1: "链接2", show2: "链接3", imageUrl: "../../src/img/2.jpg", },
                { id: 2, title: "xx电脑", show: "链接1", show1: "链接2", show2: "链接3", imageUrl: "../../src/img/2.jpg", },
                { id: 3, title: "xx网络服务", show: "链接1", show1: "链接2", show2: "链接3", imageUrl: "../../src/img/2.jpg", },
                { id: 4, title: "xx监控", show: "链接1", show1: "链接2", show2: "链接3", imageUrl: "../../src/img/2.jpg", }
            ]
        }
    },
    methods: {
        chat() {
            alert("点击了联系")
        }
    },
}
</script>


<template>
    <div contain>
        <!-- footer -->
        <div class="footer">
            <span v-for="(item, index) in data" :key="index">
                <ul>
                    <h3>{{ item.title }}</h3>
                    <a href="http://www.baidu.com">
                        <li>{{ item.show }}</li>
                    </a>
                    <a href="http://www.baidu.com">
                        <li>{{ item.show1 }}</li>
                    </a>
                    <a href="http://www.baidu.com">
                        <li>{{ item.show2 }}</li>
                    </a>
                </ul>
            </span>

            <span>
                <h3>联系售后</h3>
                <div style="font-weight: 800;">4000-800-1123</div>
                <div style="color:#66667a;font-size: 12px;">7*24小时热线</div>
                <button @click="chat">
                    <el-icon>
                        <Phone />
                    </el-icon>在线客服
                </button>
            </span>
        </div>

        <hr>
        <div class="banquan">
            Copyright © 1968-2022 广东美的网络科技有限公司 粤ICP备17058257号 粤公网安备 44060602000546号 粤工商备P06811806002512
            增值电信业务经营许可证：粤B2-20221183
        </div>
    </div>
</template>


<style scoped>
body {
    margin: 0;
    padding: 0;
    background: #f6f6f6;
    /* overflow: hidden; */
}

.footer {
    width: 100%;
    height: auto;
    margin: 20px 0;
}

.footer span {
    float: left;
    width: 300px;

}

.footer span:first-child {
    margin-left: 200px;
    float: left;
    width: 300px;
}

.footer span:last-child {
    background-color: #e3e3e7;
    width: 250px;
    height: 160px;
    text-align: center;
}

.footer span li {
    color: #66667a;
    font-size: 12px;
    margin-top: 6px;
}

.footer span button {
    width: 120px;
    height: 40px;
    margin-top: 6px;
    margin-bottom: 6px;
    border-radius: 10px;
    border: 0;
    color: white;
    background-color: black;
    line-height: 40px;
    cursor: pointer;
}

ul {
    list-style: none;
}

.banquan {
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    float: left;
}

a {
    text-decoration: none;
}

hr {
    margin-top: 30px;
    line-height: 1px;
    opacity: 0.5;
    width: 800px;
}
</style>