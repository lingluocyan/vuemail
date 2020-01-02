<template>
  <div class="cartList">
    <scroll class="content" ref="scrolls">
      <cart-list-item
            :product="item"
            v-for="(item, index) in cartLists"
            :key="index"
          ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/bscroll/bScroll";
import CartListItem from "./CartListItem.vue";
import { mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartLists"])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  activated() {
    console.log("wdd");
    this.$refs.scrolls.refreshs();
  },
  components: { Scroll, CartListItem }
};
</script>

<style scoped lang="less">
.cartList {
  /* height: calc(100%- 49px -40px); */
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  /* height: calc(100% - 44px - 49px); */
  margin-top: 44px;
  overflow: hidden;
}
</style>
