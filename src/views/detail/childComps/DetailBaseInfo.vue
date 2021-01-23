<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="detail-base-info">
    <div class="info-title">{{ goodsInfo.title }}</div>
    <div class="info-price">
      <span class="info-lowprice">{{ goodsInfo.price }}</span>
      <span class="info-oldprice">{{ goodsInfo.oldPrice }}</span>
      <span class="info-desc">{{ goodsInfo.desc }}</span>
    </div>
    <div class="info-colums">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <div v-for="index in goodsInfo.services.length - 1" :key="index">
        <img :src="goodsInfo.services[index - 1].icon" alt="" />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped>
.detail-base-info {
  padding: 10px 5px 20px;
  border-bottom: 3px solid #ddd;
  .info-title {
    font-size: 18px;
    font-weight: 500;
  }
  .info-price {
    padding: 10px 0;
    .info-lowprice {
      font-size: 18px;
      color: red;
    }
    .info-oldprice {
      font-size: 12px;
      padding: 0 5px;
      text-decoration: line-through;
    }
    .info-desc {
      font-size: 14px;
      padding: 3px;
      background-color: red;
      color: #fff;
      border-radius: 10px;
    }
  }
  .info-colums {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }
  .info-services{
      display: flex;
      font-size: 14px;
      padding-top:20px ;
    justify-content: space-between;

      >div{
          img{
              width: 12px;
              height: 12px;
              margin-right: 2px;
          }
      }
  }
}
</style>