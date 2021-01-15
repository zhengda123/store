<template>
  <swiper>
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data(){
    return{
      isLoad:true
    }
  },
  props:{
      banner:{
          type:Array,
          default(){
            return []
          }
      }
  },
  methods:{
    imgLoad(){
      if(this.isLoad){
         this.$emit("swiperLoad")
         this.isLoad = false
      }
     
    }
  }
};
</script>
<style lang="less" scoped>
</style>