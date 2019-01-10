<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" info="1" to="/order">订单</van-tabbar-item>
        <van-tabbar-item icon="friends-o" dot to="/user">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    }
}
</script>


<style lang="scss" scoped>
section {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>

