<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @titleClick="titleClick"></detail-nav-bar>
    <scroll
      :probeType="3"
      @scroll-position="scrollPosition"
      :themeTopYs="themeTopList"
      class="content"
      ref="scrolls"
    >
      <detail-swiper
        @swiperImgLoad="swiperImgLoad"
        :banner-list="topImgs"
      ></detail-swiper>
      <detail-base-info :goods="GoodsInfo"></detail-base-info>
      <detail-shop-info :shopInfo="ShopInfo"></detail-shop-info>
      <detail-goods-info
        @imgLoad="imgLoad"
        :imgList="imgInfo"
      ></detail-goods-info>
      <detail-param-info
        ref="param"
        :itemParams="ItemParams"
      ></detail-param-info>
      <detail-comment-info
        ref="commit"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <goods-list ref="goods" :goodsList="recommends"></goods-list>
    </scroll>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    <back-to-top v-show="showToTop" @click.native="backToTop"></back-to-top>
  </div>
</template>

<script>
import Scroll from "components/common/bscroll/bScroll";
import GoodsList from "components/content/goods/GoodsList";
// import backToTop from "components/content/backToTop/backToTop";

import DetailNavBar from "./components/DetailNavBar.vue";
import DetailSwiper from "./components/DetailSwiper.vue";
import DetailBaseInfo from "./components/DetailBaseInfo.vue";
import DetailShopInfo from "./components/DetailShopInfo.vue";
import DetailGoodsInfo from "./components/DetailGoodsInfo.vue";
import DetailParamInfo from "./components/DetailParamInfo.vue";
import DetailCommentInfo from "./components/DetailCommentInfo.vue";
import DetailBottomBar from "./components/DetailBottomBar.vue";

import { debounce } from "@/common/util.js";

import { backToTopMixin } from "@/common/mixins.js";
import { mapActions } from "vuex";

import {
  getDetailData,
  GoodsInfo,
  ShopInfo,
  ImageInfo,
  getRecommend,
  ItemParams
} from "@/network/detail.js";
export default {
  name: "Detail",
  props: {},
  data() {
    return {
      iid: null,
      topImgs: [],
      GoodsInfo: {},
      ShopInfo: {},
      imgInfo: {},
      ItemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopList: [],
      currentIndex: 0
      // scrollPositiony: 0
    };
  },
  mixins: [backToTopMixin],
  computed: {
    // showToTop() {
    //   return this.scrollPositiony < -900;
    // },
  },
  created() {
    this.iid = this.$route.params.id;
    this._getDetailData();
    this._getRecommend();
    this.getOffsetTop = debounce(() => {
      this.themeTopList = [];
      this.themeTopList.push(0);
      this.themeTopList.push(this.$refs.param.$el.offsetTop + 49);
      this.themeTopList.push(this.$refs.commit.$el.offsetTop + 49);
      this.themeTopList.push(this.$refs.goods.$el.offsetTop + 49);
      // console.log(this.themeTopList, "this.themeTopList");
    }, 300);
  },
  mounted() {},
  watch: {},
  methods: {
    ...mapActions(["addCart"]),

    async _getDetailData() {
      let iid = this.$route.params.id;
      let res = await getDetailData(iid);
      let data = res.result;
      if (res) {
        this.topImgs = data.itemInfo.topImages;
        this.GoodsInfo = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.ShopInfo = new ShopInfo(data.shopInfo);
        this.imgInfo = new ImageInfo(data.detailInfo.detailImage[0]);
        this.ItemParams = new ItemParams(
          data.itemParams.info,
          data.itemParams.rule
        );
        if (data.rate.cRate !== 0) {
          // 说明有评论信息
          this.commentInfo = data.rate.list[0];
        }
      }
    },
    addToCart() {
      // 1.创建对象
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImgs[0];
      obj.title = this.GoodsInfo.title;
      obj.desc = this.GoodsInfo.desc;
      obj.newPrice = this.GoodsInfo.nowPrice;
      obj.count = 1;
      console.log(obj, "obj");
      // this.$store.dispatch("addCart",obj)
      this.addCart(obj).then(res => {
        console.log(res, "res");
        this.$toast.show('嘻嘻')
      });
    },
    // backToTop() {
    //   this.$refs.scrolls.scrollTos(0,0,500)
    // },
    scrollPosition(data) {
      this.scrollPositiony = data.y;
      const positionY = -data.y;
      let length = this.themeTopList.length;
      console.log(length, "len");
      for (let i = 0; i < length; i++) {
        // if (this.currentIndex !=i )
        if (
          (i < length - 1 &&
            positionY >= this.themeTopList[parseInt(i)] &&
            positionY < this.themeTopList[i + 1]) ||
          (i === length - 1 && positionY >= this.themeTopList[parseInt(i)])
        ) {
          this.$bus.$emit("highLight", i);
        }
      }
    },
    swiperImgLoad() {},
    titleClick(data) {
      switch (data) {
        case 0:
          this.$refs.scrolls.scrollTos(0, -this.themeTopList[0], 500);
          break;
        case 1:
          this.$refs.scrolls.scrollTos(0, -this.themeTopList[1], 500);
          break;
        case 2:
          this.$refs.scrolls.scrollTos(0, -this.themeTopList[2], 500);
          break;
        case 3:
          this.$refs.scrolls.scrollTos(0, -this.themeTopList[3], 500);
          break;

        default:
          break;
      }
    },
    async _getRecommend() {
      let res = await getRecommend();
      this.recommends = res.data.list;
    },
    imgLoad() {
      this.getOffsetTop();
    }
    // getOffsetTop() {
    //   const getTop = debounce(()=> {
    //     this.themeTopList = [];
    //     this.themeTopList.push(0);
    //     this.themeTopList.push(this.$refs.param.$el.offsetTop);
    //     this.themeTopList.push(this.$refs.commit.$el.offsetTop);
    //     this.themeTopList.push(this.$refs.goods.$el.offsetTop);
    //     console.log(this.themeTopList, "this.themeTopList");
    //   },300)
    //   getTop()
    //   // this.themeTopList = [];
    //   // this.themeTopList.push(0);
    //   // this.themeTopList.push(this.$refs.param.$el.offsetTop);
    //   // this.themeTopList.push(this.$refs.commit.$el.offsetTop);
    //   // this.themeTopList.push(this.$refs.goods.$el.offsetTop);
    //   // console.log(this.themeTopList, "this.themeTopList");
    // }
  },
  updated() {
    // this.themeTopList = [];
    // this.themeTopList.push(0);
    // this.themeTopList.push(this.$refs.param.$el.offsetTop);
    // this.themeTopList.push(this.$refs.commit.$el.offsetTop);
    // this.themeTopList.push(this.$refs.goods.$el.offsetTop);
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
    // backToTop
  }
};
</script>

<style scoped lang="less">
#detail {
  margin: 44px 0 49px 0;
  height: 100vh;
  z-index: 9;
  /* margin-bottom: 40px; */
}

.nav-bar {
  background-color: #fff;
  /* margin-bottom: 40px; */
}

.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
