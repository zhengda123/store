<template>
  <div class="home">
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
  </div>
</template>
<script>
import Navbar from "components/common/navbar/Navbar";
import {getHomeMultidata} from "network/home"
export default {
  name: "Home",
  components: {
    Navbar,
  },
  data(){
      return{
          banner:[],
          recommends:[]
      }
  },
  created(){
     getHomeMultidata().then(res => {
         this.banner = res.data.banner.list;
         this.recommends = res.data.recommend.list
     })
  },
  mounted(){
      setTimeout( ()=> {
          console.log(this.recommends)
      },1000)
      
  }
};
</script>
<style lang="less">
.home {
  .home-navbar {
    background-color: #ff8198;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>