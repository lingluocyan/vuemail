<template>
  <div class="shopInfo">
    <div class="tips">
      <div
        class="tips-item"
        v-for="(item, index) in shopInfo.services"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="shop">
      <div class="shop-top">
        <img :src="shopInfo.logo" alt="" />
        <span class="shop-name">{{ shopInfo.name }}</span>
      </div>
      <div class="shop-detail">
        <div class="detail-left">
          <div class="detail-left-item">
            <div class="sell">5.8万</div>
            <div class="all">总销量</div>
          </div>
          <div class="detail-left-item">
            <div class="null">99</div>
            <div class="allGoods">全部宝贝</div>
          </div>
        </div>
        <div class="detail-right">
            <table>
                <tr v-for="(item, index) in shopInfo.score" :key="index">
                  <td>{{item.name}}</td>
                  <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                  <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                </tr>
              </table>
          <!-- <div class="detail-right-item" v-for="(item, index) in shopInfo.score" :key="index">
            <span>{{item.name}}&nbsp;&nbsp;</span>
            <span>{{item.score}}&nbsp;&nbsp;</span>
            <span>{{item.isBetter ? '高' : '低'}}</span>
          </div> -->
        </div>
      </div>
    </div>
    <ul>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
      <li>xxx*</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.tips {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
}
.tips-item {
  text-indent: 0.5em;
  width: 33%;
}
.shop {
}
.shop-top {
  margin: 20px 0 20px 20px;
  height: 60px;
  line-height: 60px;
  position: relative;
}
.shop-top > img {
  display: inline-block;
  border-radius: 50%;
  width: 60px;
  margin-right: 10px;
}
.shop-name {
  position: absolute;
}
.shop-detail {
  display: flex;
}
.detail-left {
  display: flex;
  width: 48%;
  justify-content: space-around;
  border-right: 1px solid #ccc;
}
.detail-left-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.detail-right {
  margin-left: 20px;
  width: 48%;
}
.detail-right-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
.detail-right-item > span:first-child {
  width: 46%;
}
.detail-right-item > span:last-child {
  width: 30%;
}
.detail-right-item > span:nth-child(2) {
  width: 24%;
}
.score-better {
    color: #f13e3a;
  }
  .better-more span {
    background-color: #f13e3a;
  }

</style>
