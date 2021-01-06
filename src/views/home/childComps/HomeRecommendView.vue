<template>
    <div class="recommends">
        <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
            <a :href="item.link">
                <img :src="item.image" alt="" class="recommends-img">
                <div class="recommends-title">{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeRecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .recommends{
        display: flex;
        text-align: center;
        width: 100%;
        padding-bottom:30px;
        border-bottom: 10px solid #eee;
        .recommends-item{
            display: block;
            flex: 1;
            width: 25%;
            .recommends-img{
                width: 80%;
                padding: 10px 0;
            }
            .recommends-title{
                font-size: 14px;
            }
        }
    }
</style>