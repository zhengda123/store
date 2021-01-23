<template>
  <div class="detail-img-info"  v-if="Object.keys(imgInfo).length !== 0" >
      <div class="img-desc">
          <div class="img-line top"></div>
          <div class="img-desc-text">{{imgInfo.desc}}</div>
          <div class="img-line bottom"></div>
      </div>
      <div class="img-msg">
          <div class="img-title">{{imgInfo.detailImage[0].key}}</div>
          <div v-for="(item,index) in imgInfo.detailImage[0].list" :key="index">
              <img :src="item" alt="" @load="imgLoad">
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "DetailImgInfo",
  props: {
    imgInfo: {
      type: Object,
      default(){
          return {}
      }
    },
  },
  methods:{
      imgLoad(){
          this.$emit("imgInfoLoad")
          
      }
  }
};
</script>
<style lang="less" scoped>
.detail-img-info{
    .img-desc{
        padding: 10px;
        .img-line{
            width: 30%;
            height: 2px;
            background-color: #ddd;
            position: relative;
            &::before{
                content: "";
                width: 5px;
                height: 5px;
                background-color: #000;
                position: absolute;
                bottom: 0;
                
            }
            &.bottom{
               float: right;
               &::before{
                   right: 0;
               }
            }
        }
        .img-desc-text{
            margin: 15px 0;
            font-size: 14px;
        }
    }
    .img-msg{
        .img-title{
            margin: 10px;
            color: #000;
        }
        img{
            width: 100%;
        }
    }
}
</style>