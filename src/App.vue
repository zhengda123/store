<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import MainTabbar from "components/content/mainTabbar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>
<style lang="less">
@import "./assets/css/base.css";
</style>
