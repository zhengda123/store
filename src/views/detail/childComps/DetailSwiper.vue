<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item  v-for="(item, index) in topImages" :key="index" class="swiper-item">
            <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style lang="less" scoped>
.detail-swiper{
    .swiper-item{
        height: 300px;
        overflow: hidden;
    }
}
</style>