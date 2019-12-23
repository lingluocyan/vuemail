<template>
  <div class="detail-base-info">
    <div class="title">{{ goods.title }}</div>
    <div class="price">
      <span class="realPrice">¥{{ goods.realPrice }}</span>
      <span class="oldPrice">
        <s>{{ goods.oldPrice }}</s>
      </span>
      <span class="tips">
        活动价
      </span>
    </div>
    <div class="bottomInfo">
      <div class="bottomInfoItem" v-for="(item, index) in goods.columns" :key="index">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
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
.title {
  font-size: 14px;
  font-weight: 600;
  text-indent: 0.5em;
  padding: 10px 10px 0 10px;
}
.price {
  margin-top: 10px;
  text-indent: 0.5em;
  position: relative;
}
.realPrice {
  font-size: 20px;
  color: var(--color-tint);
  padding: 0 10px 0 0;
}
.oldPrice {
  font-size: 12px;
  color: var(--color-text);
}
.tips {
  position: absolute;
  font-size: 12px;
  color: #fff;
  background-color: var(--color-tint);
  text-align: center;
  border-radius: 30px;
  text-indent: 0;
  padding: 1px 4px;
  top: 0;
}
.bottomInfo {
  /* display: flex; */
  margin-top: 10px;
  height: 24px;
  font-size: 12px;
  color: #999;
  text-indent: 0.5em;
  
  /* justify-content: space-around;
  align-items: center; */
}
.bottomInfoItem {
  border-bottom: 1px solid #999;
  width: 33%;
  float: left;
  text-align: center;
}
.bottomInfoItem:first-child {
  text-align: left;
}
.bottomInfoItem:last-child {
  text-align: right;
}
</style>
