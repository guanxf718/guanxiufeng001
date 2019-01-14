<template>
    <div class="content base-color-input">
        <mu-date-input v-model="value" label="选择日期" full-width container="bottomSheet"></mu-date-input>
        <section class="search">
            <mu-icon value="search"></mu-icon>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '2019-01-01'
        }
    },
    watch: {
        value(e) {
            console.log(e);
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    @include standard-padding-lr;
    background-color: $color-base;
    position: relative;
    .search {
        @include absolute(30%, 100%, 0, 0, auto, auto);
        .mu-icon {
            @include absolute-center(50%, 20px, auto, auto, 0, -50%);
            color: $color-white;
        }
    }
}
</style>

