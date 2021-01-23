<template>
  <div class="detail">
    <detail-navbar></detail-navbar>
    <scroll class="detail-content" :pullUpLoad="true" ref="scroll">
      <detail-swiper
        :top-images="topImages"
        @detailLoad="detailLoad"
      ></detail-swiper>
      <detail-base-info :goods-info="goodsInfo"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-img-info
        :img-info="imgInfo"
        @imgInfoLoad="imgInfoLoad"
      ></detail-img-info>
      <detail-params-info :params-info="itemParams"></detail-params-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
    </scroll>
  </div>
</template>
<script>
import DetailNavbar from "views/detail/childComps/DetailNavbar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "views/detail/childComps/DetailShopInfo"
import DetailImgInfo from "views/detail/childComps/DetailImgInfo"
import DetailParamsInfo from "views/detail/childComps/DetailParamsInfo"
import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo"

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList"

import { getDetail, Goods ,getRecommends} from "network/detail";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goodsInfo: {},
      shopInfo:{},
      imgInfo:{},
      itemParams:{},
      commentInfo:{},
      refresh:null,
      recommends:[]
    };
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImgInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList
  },
  created() {
    //获取id
    this.id = this.$route.params.id;
    // 根据id请求商品数据详情
    getDetail(this.id).then((res) => {
      const data = res.result;
     
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 创建商品对象
      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
     
      // 获取店铺详情信息
      this.shopInfo = data.shopInfo
      // 获取商品图片信息
      this.imgInfo = data.detailInfo
      //获取参数的信息
      this.itemParams = data.itemParams
       
        // 获取评论的信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
    });
    // 获取推荐商品信息
    getRecommends().then(res => {
      
      this.recommends = res.data.list
     
    })

  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
  },
  methods: {
     detailLoad(){
       this.$refs.scroll.refresh()
    },
    imgInfoLoad(){
      this.refresh()
      
    }
  },
};
</script>
<style lang="less" scoped>
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 10;
  .detail-content {
    height: calc(100% - 44px);
    overflow: hidden;
  }
}
</style>