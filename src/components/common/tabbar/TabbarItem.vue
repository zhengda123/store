<template>
  <div class="tabbar-item" @click="skip">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="textColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  data() {
    return {
    //   isActive: true,
    };
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path) !==-1
      },
      textColor(){
          return this.isActive ? {color:this.activeColor}:{}
      }
  },
  props: {
    path: {
      type: String,
      default: "",
    },
    activeColor:{
        type:String,
        default:"red"
    }
  },
  methods: {
    skip() {
      //   this.$router.push(this.path);
      if (this.$route.path !== this.path) {
        this.$router.push({ path: this.path });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tabbar-item {
  flex: 1;
  img {
    height: 24px;
    width: 24px;
  }
  .active {
    color: red;
  }
}
</style>