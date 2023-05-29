<template>
    <div>1</div>
</template>

<script>
import request from '../utils/request'

export default {
    data() {
        return {
        }
    },
    mounted() {
        request('post', '/dispatch/order/getAcceptOrderList',  { status: -1 });
        request('get', '/dispatch/user/getUserList',); 
    }
}
</script>

<style></style>