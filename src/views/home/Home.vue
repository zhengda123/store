<template>
  <div class="home">
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
    <tab-control
      :title="['流行', '新款', '精选']"
      class="home-tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
        v-show="isFixed"
     
    ></tab-control>
    <scroll
      class="home-content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperLoad="swiperLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature></home-feature>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>
<script>
import Navbar from "components/common/navbar/Navbar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "views/home/childComps/HomeSwiper";
import HomeRecommendView from "views/home/childComps/HomeRecommendView";
import HomeFeature from "views/home/childComps/HomeFeature";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      offsetTop: 0,
      isFixed: false,
      saveY:0
    };
  },
  created() {
    this.getHomeMultidata(),
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  mounted() {
    // 防抖函数使用，判断商品图片在200毫秒内是否有下一张图片要刷新，如果有就不刷新
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    // 商品图片加载后刷新一下scroll
    this.$bus.$on("loadGoodsImg", () => {
      refresh();
    });
  },
  destroyed(){
    console.log("211111")
  },
  activated(){
    this.$refs.scroll.refresh()
    // 将路由滚动到离开时存储的位置
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    // 存储离开路由时滚动的高度
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    swiperLoad() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
       console.log(this.offsetTop)
    },
    // 请求轮播图数据和推荐商品数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        // ...方法是将res.data.list数组中所有的值解析后添加到this.goods[type].list数组中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    // 点击标签栏切换商品
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

      this.$refs.tabControl1.currentIndex = index;
      // console.log(this.$refs.tabControl1.currentIndex)
      this.$refs.tabControl2.currentIndex = index;
      // console.log(this.$refs.tabControl2.currentIndex)
    },
    // 点击返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    contentScroll(position) {
      // 判断回到顶部按钮是否显示
      this.isShow = -position.y > 1000;
      //判断滚动的高度是否大于tabControl标签距离顶部的高度
      this.isFixed = this.offsetTop <= -position.y;
    },
    // 下拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  // padding-top: 44px;
  // position: relative;
  height: 100vh;
  background-color: #fff;
  .home-navbar {
    background-color: #ff8198;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    
  }
  .home-tab-control {
    position: relative;
    top: 0;
    z-index: 999;
  }
  .home-content {
    // height: calc(100% - 44px - 49px);
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    // margin-top: 44px;
    overflow: hidden;
  }
 
}
</style>
