<template>
  <div class="goods">
    <goods-list-item
    class="goods-item"
    v-for="(item, index) in goodsList"
    :key="index"
    :goodsItem="item"
    ></goods-list-item>
    <!-- ul>li{商品猎豹$}*10 -->
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  props: {
    goodsList: {
      type: Array,
      default: () => []
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
  components: { GoodsListItem }
};
</script>

<style scoped lang="less">
.goods {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>
