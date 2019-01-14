<template>
    <mu-tabs :value.sync="active" inverse center>
        <mu-tab v-for="el in innerList" :key="el.index">{{el.text}}</mu-tab>
    </mu-tabs>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
    props: {
        innerList: {
            type: Array
        }
    },
    watch: {
        active(e) {
            this.$emit('acitve',e);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

