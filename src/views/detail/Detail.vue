<template>
  <div>
    <detail-navbar></detail-navbar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>
<script>
import DetailNavbar from "views/detail/childComps/DetailNavbar";
import DetailSwiper from "views/detail/childComps/DetailSwiper"
import { getDetail } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      id: null,
      result:null,
      topImages:[]
    };
  },
  components: {
    DetailNavbar,
    DetailSwiper
  },
  created() {
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
        this.result = res.result
        console.log(this.result)
        this.topImages = this.result.itemInfo.topImages
        console.log(this.topImages)
    });
  },
  mounted() {
    
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>