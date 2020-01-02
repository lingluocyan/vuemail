<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">
        <h6>购物车({{ cartLength }})</h6>
      </div>
    </nav-bar>
    <cart-list></cart-list>
    <CartBottom></CartBottom>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import CartList from "./components/CartList.vue";
import CartBottom from './components/CartBottomBar'
import { mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartLength"])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: { NavBar, CartList,CartBottom }
};
</script>

<style scoped lang="less">
.cart {
  /* margin: 44px 0 49px 0;
  height: 100vh; */
  /* vh => 视口大小 viewport height */
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
