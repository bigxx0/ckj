<template>
    <div id="middle" class="container">
        <div></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { id: 1 },
            ]
        }
    },
    comments: {
    },
    methods: {
    },
    computed: {
    },
    watch: {

    }
}
</script>

<style scoped>
.container {
    /* position: absolute; */
    display: flex;
    float: left;
    width: 1000px;
    height: 100px;
    margin: 50px;
    border-radius: 5px;
    background-color: #efefef;
}

.banner {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/banner.jpg);
}
</style>