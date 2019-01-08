<template>
    <section>
        <mu-bottom-nav>
            <mu-bottom-nav-item title="首页" icon="gesture" to="/home"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="订单" icon="style" to="/order"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="我的" icon="bubble_chart" to="/user"></mu-bottom-nav-item>
        </mu-bottom-nav>
    </section>
</template>

<style lang="scss" scoped>
    section{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>

