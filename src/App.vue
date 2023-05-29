<template style="background-color: #f5f5f5;">
  <div class="container">
    <sides></sides>
    <!-- <gdDetails></gdDetails> -->

    <el-backtop :right="30" :bottom="30" />
  </div>
</template>

<script>
import sides from './components/sides.vue'
// import gdDetails from './components/gdDetails.vue'


export default {
  data() {
    return {

    }
  },
  components: {
    sides,
  }

}
</script>

<style>
.container {
  user-select: none;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

.luyou {
  z-index: 999;
  width: 50px;
}
</style>