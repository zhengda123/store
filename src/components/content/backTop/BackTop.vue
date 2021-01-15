<template>
    <div class="back-top">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>
<script>
export default {
    name:"BackTop"
}
</script>
<style lang="less" scoped>
    .back-top{
        position: fixed;
        right: -30px;
        bottom: 50px;
        img{
            width: 50%;
            height: 50%;
        }
    }
</style>