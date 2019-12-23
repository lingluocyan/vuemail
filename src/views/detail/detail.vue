<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper @swiperImgLoad="swiperImgLoad" :banner-list="topImgs"></detail-swiper>
      <detail-base-info :goods="GoodsInfo"></detail-base-info>
      <detail-shop-info :shopInfo="ShopInfo"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/bscroll/bScroll";

import DetailNavBar from "./components/DetailNavBar.vue";
import DetailSwiper from "./components/DetailSwiper.vue";
import DetailBaseInfo from "./components/DetailBaseInfo.vue";
import DetailShopInfo from "./components/DetailShopInfo.vue";
import { getDetailData,GoodsInfo,ShopInfo } from "@/network/detail.js";
export default {
  name:'Detail',
  props: {},
  data() {
    return {
      iid: null,
      topImgs: [],
      GoodsInfo: {},
      ShopInfo: {}
    };
  },
  computed: {},
  created() {
    this.iid = this.$route.params.id;
    this._getDetailData()
  },
  mounted() {},
  watch: {},
  methods: {
    async _getDetailData() {
      let iid = this.$route.params.id
      let res = await getDetailData(iid)
      let data = res.result
      if (res) {
        this.topImgs = data.itemInfo.topImages
        this.GoodsInfo = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
        this.ShopInfo = new ShopInfo(data.shopInfo)
      }
    },
    swiperImgLoad() {

    }
  },
  components: { DetailNavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,Scroll }
};
</script>

<style scoped lang="less">
  .detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  }
.nav-bar {
  background-color: #fff;
}
.content {
  /* 方案1  父容器设置height:100vh,content calc动态计算高度 */
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.wrapper {
  height: 100vh;
  /* overflow-y: scroll; */
}
/* .content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.wrapper {
  height: 300px;
} */
</style>
