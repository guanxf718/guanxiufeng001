<template>
    <div class="content">
        <div>
            <ul>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
                <li>柠檬水丫</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <section></section>
                    <section></section>
                    <section></section>
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
    @include flex-half(auto);
    & > div {
        &:nth-child(1){
            max-width: 200px;
        }
        &:nth-child(2){
            
        }
    }
}
</style>

