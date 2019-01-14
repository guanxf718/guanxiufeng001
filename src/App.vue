<template>
    <div id="app">
        <router-view/>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
import { TabBar } from "@/components";
export default {
    components: {
        TabBar
    }
}
</script>

<style lang="scss" scoped>
#app {
    line-height: 40px!important;
}
</style>
