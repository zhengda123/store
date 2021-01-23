<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title">
      <div>用户评价</div>
      <div><a href="#">更多 ></a></div>
    </div>
    <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="comment-content">
      <p>{{ commentInfo.content }}</p>
      <div class="comment-other">
        <span class="comment-created">{{
          commentInfo.created | dateFiler
        }}</span>
        <span class="comment-style">{{ commentInfo.style }}</span>
      </div>
      <div class="comment-img">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from "common/utils"
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    dateFiler(value) {
        // 将时间戳转成Date对象，时间戳显示的单位为秒，Date对象中要放的是毫秒，所以要*1000
      let date = new Date(value * 1000);
    //   将date进行格式化，转成对应的字符串
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>
<style lang="less" scoped>
.detail-comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  .comment-title {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .comment-user {
    padding: 10px 0 5px;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    span {
      position: relative;
      font-size: 15px;
      top: -15px;
      margin-left: 10px;
    }
  }
  .comment-content {
    padding: 0 5px 15px;
    p {
      font-size: 14px;
      color: #777;
      line-height: 1.5;
    }
    .comment-other {
      font-size: 12px;
      color: #999;
      margin-top: 10px;
      .comment-created {
        margin-right: 8px;
      }
    }
    .comment-img {
      margin-top: 10px;
      img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
      }
    }
  }
}
</style>