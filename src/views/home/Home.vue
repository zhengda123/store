<template>
  <div class="home">
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature></home-feature>
    <tab-control
      :title="['流行', '新款', '精选']"
      class="home-tab-control"
      @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>
<script>
import Navbar from "components/common/navbar/Navbar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "views/home/childComps/HomeSwiper";
import HomeRecommendView from "views/home/childComps/HomeRecommendView";
import HomeFeature from "views/home/childComps/HomeFeature";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TabControl,
    GoodsList,
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
    };
  },
  created() {
    this.getHomeMultidata(),
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  methods: {
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
        console.log(res);
        // ...方法是将res.data.list数组中所有的值解析后添加到this.goods[type].list数组中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
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
    },
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
};
</script>
<style lang="less">
.home {
  padding-top: 44px;
  .home-navbar {
    background-color: #ff8198;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .home-tab-control {
    position: sticky;
    top: 44px;
    z-index: 10;
  }
}
</style>