<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="tab-control-item"
      :class="{ isActive: index === currentIndex }"
      @click="chickItem(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
      chickItem(index){
          this.currentIndex = index
          this.$emit("tabClick",index)
      }
  }
};
</script>
<style lang="less" scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 18px;
  background-color: #fff;
  .tab-control-item {
    flex: 1;
    height: 44px;
    line-height: 44px;
    span {
      padding: 5px;
    }
  }
  .isActive {
    color: #ff5777;
    span {
      border-bottom: 3px solid #ff5777;
    }
  }
}
</style>