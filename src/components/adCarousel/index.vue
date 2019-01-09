<template>
    <mu-carousel transition="slide">
        <mu-carousel-item v-for="item in innerList" :key="item.index">
            <img :src="item">
        </mu-carousel-item>
    </mu-carousel>
</template>

<script>
export default {
    props: {
        innerList: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.mu-carousel {
    height: 260px;
    img {
        width: 100%;
    }
}
</style>

