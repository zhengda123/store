<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
};
</script>
<style lang="less" scoped>
.tabbar {
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -5px 5px rgba(100, 100, 100, 0.1);
  font-size: 14px;
  padding-top: 3px;
  z-index: 999;
  
}
</style>