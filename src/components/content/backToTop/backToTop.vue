<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>
<script>
export default {
  name: "backToTop",
  props: {},
  data() {
    return {};
  },
  methods: {
    toTop() {

    }
  },
  components: {}
};
</script>

<style scoped lang="less">
  .back-top {
    right: 10px;
    bottom: 60px;
    position: fixed;
    img {
      width: 53px;
      height: 53px;
    }
  }
</style>
