<template>
    <div class="navbar">
        <div class="navbar-left">
            <slot name="left"></slot>
        </div>
        <div class="navbar-center">
            <slot name="center"></slot>
        </div>
        <div class="navbar-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang="less" scoped>
.navbar {
  height: 44px;
  line-height: 44px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, .1);
  text-align: center;
  display: flex;
    .navbar-center{
        width: 65%;
    }
    .navbar-left,.navbar-right{
        flex: 1;
    }
}
</style>