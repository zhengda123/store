<template>
  <div class="main">
    <tabbar>
      <tabbar-item path="/home" activeColor="deeppink">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon" />
        <img
          src="~assets/img/tabbar/home_active.svg"
          alt=""
          slot="item-icon-active"
        />
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor="deeppink">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon" />
        <img
          src="~assets/img/tabbar/category_active.svg"
          alt=""
          slot="item-icon-active"
        />
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="deeppink">
        <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon" />
        <img
          src="~assets/img/tabbar/cart_active.svg"
          alt=""
          slot="item-icon-active"
        />
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" activeColor="deeppink">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon" />
        <img
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
          slot="item-icon-active"
        />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>
<style lang="less" scoped>
</style>