<template>
    <div class="content">
        <div class="left">
            <ul>
                <li>草莓季节限定</li>
                <li>牛油果系列</li>
                <li>纯鲜榨果汁</li>
                <li>国粹香</li>
                <li>可可香浓</li>
                <li>美味佳肴好吃呢</li>
                <li>片片香香偏偏飘飘香asdasdsad123123kkkkkasdsd</li>
                <li>jjaskdjaksjdaksdjaksdjk()()()()(asdasdasdasd</li>
                <li>kkklkklkl.asdhjkajdkajskd.asdasdasd</li>
                <li>柠檬水丫</li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li>
                    <section>
                        <!-- <img src="" alt=""> -->
                        <mu-icon value="image"></mu-icon>
                    </section>
                    <section>
                        <h3>大白兔奶糖</h3>
                        <h4>库存：999</h4>
                        <p>
                            ¥888
                            <span>¥999</span>
                        </p>
                    </section>
                    <section>
                        <mu-icon value="image"></mu-icon>
                    </section>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
    height: $home-product;
    @include flex-half(auto);
    & > div {
        height: inherit;
        @include standard-padding;
        padding-bottom: 0;
        ul {
            height: inherit;
            overflow-y: scroll;
            padding-bottom: $spacing-xm;
        }
        &.left {
            max-width: $base-size * 2;
            background-color: $color-gray-f8;
            ul {
                li {
                    text-align: center;
                    word-wrap: break-word;
                    @include standard-padding;
                }
            }
        }
        &.right {
            background-color: $color-white;
            ul {
                li {
                    @include flex-half(auto);
                    & > section {
                        &:nth-child(1) {
                            @include flex-center(center, center);
                            
                        }
                        &:nth-child(2) {
                            h3{
                                font-weight: bold;
                            }
                            h4{
                                color: $color-base;
                                margin-bottom: $spacing-s;
                            }
                        }
                        &:nth-child(3) {
                            @include flex-center(center, flex-end);
                        }
                    }
                }
            }
        }
    }
}
</style>

