<template>
  <div class="detail-navbar">
    <navbar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="center">
          <div v-for="(item,index) in titles" :key="index" class="center-item" @click="titleClick(index)" :class="{active : currentIndex === index}">
              {{item}}
          </div>
      </div>
    </navbar>
  </div>
</template>
<script>
import Navbar from "components/common/navbar/Navbar";
export default {
  name: "DetailNavbar",
  data(){
      return{
          titles:["商品","详情","评论","推荐"],
          currentIndex:0
      }
  },
  components: {
    Navbar,
  },
  methods:{
      backClick(){
          this.$router.back()
      },
      titleClick(index){
          this.currentIndex = index
      }
  }
};
</script>
<style lang="less" scoped>
.detail-navbar {
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .center{
      display: flex;
      font-size: 14px;
      .center-item{
          flex:1;
      }
       .active{
      color: red;
  }
  }
 
}
</style>