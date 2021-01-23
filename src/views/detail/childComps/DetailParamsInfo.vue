<template>
  <div class="detail-params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(item, index) in paramsInfo.rule.tables" :key="index" class="info-rule">
      <tr v-for="(tr, j) in item" :key="j">
        <td v-for="(td, q) in tr" :key="q">{{ td }}</td>
      </tr>
    </table>

    <table class="info-set">
      <tr v-for="(item, index) in paramsInfo.info.set" :key="index">
        <td class="info-key">{{ item.key }}</td>
        <td class="info-value">{{ item.value }}</td>
      </tr>
    </table>
    <div v-if="paramsInfo.info.images">
      <img :src="paramsInfo.info.images[0]" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped>
.detail-params-info{
     padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    table{
        width: 100%;
        border-collapse: collapse;
        tr{
            height: 42px;
            td{
                border-bottom: 1px solid rgba(100,100,100,.1);
            }
        }
        
    }
    .info-set{
        border-top: 1px solid rgba(0,0,0,.1);
        .info-key{
             width: 95px;
        }
        .info-value{
            color: #eb4868
        }
    }
    img{
        width: 100%;
    }
}
</style>