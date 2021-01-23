<template>
  <div class="detail-shop-info"  v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-name">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-msg">
      <div class="shop-msg-left">
        <div class="msg-left">
          <div>{{ shopInfo.cSells | sellFilter }}</div>
          <div>总销量</div>
        </div>
        <div class="msg-right">
          <div>{{ shopInfo.cGoods }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-msg-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>
              <span>{{ item.name }}</span>
            </td>
            <td class="msg-score">
              <span :class="{ isColor: item.isBetter }">{{ item.score }}</span>
            </td>
            <td>
              <span class="msg-text" :class="{ isBackColor: item.isBetter }">{{
                item.isBetter ? "高" : "低"
              }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-button">
      <div>进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  filters: {
    sellFilter(value) {
      let result = value;
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    },
  },
};
</script>
<style lang="less" scoped>
.detail-shop-info {
  padding: 0 5px;
  border-bottom: 3px solid #ddd;
  .shop-name {
    font-size: 18px;
    > img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 20px 10px;
      vertical-align: middle;
    }
  }
  .shop-msg {
    display: flex;
    color: #000;
    .shop-msg-left {
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      text-align: center;
      align-items: center;
      > div {
        font-size: 14px;
        :first-child {
          font-size: 20px;
          padding: 10px 0;
        }
      }
    }
    .shop-msg-right {
        display: flex;
        justify-content: center;
     flex: 1;
      margin: 0 auto;
      tr {
        line-height: 30px;
        td {
          margin-right: 10px;
          span{
              width: 100%;
              display: inline-block;
              margin-right: 10px;
          }
        }
        .msg-score {
          color: green;
        }
        .msg-text {
          background-color: green;
          color: #fff;
          display: inline;
        }
        .isBackColor {
          background-color: red;
        }
        .isColor {
          color: red;
        }
      }
    }
  }
  .shop-button {
    margin: 20px 0;
    text-align: center;
    width: 100%;
    > div {
      margin: 0 auto;
      width: 30%;
      line-height: 35px;
      background-color: #f9f9f9;
      border-radius: 5px;
    }
  }
}
</style>