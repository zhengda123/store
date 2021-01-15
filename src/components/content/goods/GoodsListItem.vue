<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="loadGoodsImg" />
    <div class="item-content">
      <p>{{ goodsItem.title }}</p>
      <span class="item-price">{{ goodsItem.price }}</span>
      <span class="item-cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    loadGoodsImg(){
     this.$bus.$emit("loadGoodsImg")
    },
    itemClick(){
      this.$router.push("/detail/"+this.goodsItem.iid)
     
    }
  }
};
</script>
<style lang="less" scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .item-content {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .item-cfav {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: -16px;
        top: 0;
        width: 13px;
        height: 13px;
        background: url("~assets/img/common/collect.svg") no-repeat;
        background-size: 100%;
      }
    }
    .item-price {
      color: #ff5777;
      margin-right: 20px;
    }
  }
}
</style>