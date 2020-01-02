<template>
  <div>
    <div class="container">
      <div class="left">
        <CheckButton :value="product.checked" @checkBtnClick="checkBtnClick"></CheckButton>
        <img :src="product.imgURL" alt="" />
      </div>
      <div class="right">
        <div class="title">{{ product.title }}</div>
        <div class="desc">{{ product.desc }}</div>
        <div class="price">
          <div class="price-left">¥99</div>
          <div class="price-right">X{{ product.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  props: {
    product: {
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
  methods: {
    checkBtnClick() {
      this.product.checked = !this.product.checked
    }
  },
  components: { CheckButton }
};
</script>

<style scoped lang="less">
.container {
  height: 160px;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.left {
  width: 36%;
  position: relative;
}
.left img {
  width: 100%;
  height: 100%;
  padding: 0 10px 0 26px;
}
.right {
  width: 60%;
  display: flex;
  flex-direction: column;
  text-indent: 0.5em;
  justify-content: space-between;
}
.title {
  font-size: 18px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  display: flex;
  justify-content: space-between;
}
</style>
