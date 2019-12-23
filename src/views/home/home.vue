<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">
        <h6>我是内容</h6>
      </div>
    </nav-bar>
    <tab-control
      v-show="isTabFixed"
      class="tabControl"
      ref="tabControl1"
      @change-item="changeItem"
      :titles="titles"
      :pull-up-load="true"
    ></tab-control>
    <!-- <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
        </a>
    </swiper-item>
    </swiper> -->
    <scroll
      @scroll-position="scrollPosition"
      @load-more="loadMore"
      class="content"
      ref="scrolls"
    >
      <swiper @swiperImgLoad="swiperImgLoad" :banner-list="banners"></swiper>
      <recommend-view :img-list="recommend"></recommend-view>
      <feature></feature>
      <tab-control
        ref="tabControl2"
        @change-item="changeItem"
        :titles="titles"
        :pull-up-load="true"
      ></tab-control>
      <goods-list :goods-list="goodsList"></goods-list>
    </scroll>
    <!-- 组件若想监听点击需要 .native -->
    <back-to-top v-show="showToTop" @click.native="backToTop"></back-to-top>
  </div>
</template>

<script>
import RecommendView from "@/views/home/components/RecommendView";
import Feature from "@/views/home/components/Feature.vue";

import Scroll from "components/common/bscroll/bScroll";
import TabControl from "@/components/content/tabControl/TabControl";
import NavBar from "@/components/common/navbar/NavBar";
import GoodsList from "components/content/goods/GoodsList";
import backToTop from "components/content/backToTop/backToTop";
import Swiper from "@/components/common/swiper/Swiper.vue";
import { getHomeMultidataData, getHomeGoods } from "@/network/home.js";

import { debounce } from "@/common/util";
export default {
  props: {},
  data() {
    return {
      result: null,
      banners: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      type: "pop",
      scrollPositiony: 0,
      tabOffsetTop: 0, // tabBar距离顶部的距离
      saveY: 0
    };
  },
  computed: {
    goodsList() {
      return this.goods[this.type].list;
    },
    showToTop() {
      return this.scrollPositiony < -900;
    },
    isTabFixed() {
      return Math.floor(this.scrollPositiony) < -(this.tabOffsetTop - 40);
    }
  },
  created() {
    this._getHomeMultidataData();
    this._getHomeGoods("pop");
    this._getHomeGoods("new");
    this._getHomeGoods("sell");
  },
  mounted() {
    console.log(this.tabOffsetTop.offsetTop, "this.tabOffsetTop");
    // 返回一个函数
    const refresh = debounce(this.$refs.scrolls.refreshs, 300);
    this.$bus.$on("imgLoad", () => {
      refresh();
      // this.$refs.scrolls.refreshs();
    });
  },
  watch: {},
  activated() {
    console.log("wdd");
    this.$refs.scrolls.scrollTos(0, this.saveY, 0);
    this.$refs.scrolls.refreshs()
  },
  deactivated() {
    this.saveY = this.$refs.scrolls.getScrollY;
  },
  methods: {
    async _getHomeMultidataData() {
      let res = await getHomeMultidataData();
      if (res.success) {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      }
      // });
    },
    async _getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      let params = {
        type,
        page
      };
      let res = await getHomeGoods(params);
      if (res.success) {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      }
      console.log(res, "goods");
    },
    changeItem(data) {
      switch (data.title) {
        case "流行":
          this.type = "pop";
          break;
        case "新款":
          this.type = "new";
          break;
        case "精选":
          this.type = "sell";
          break;
        default:
          break;
      }
      this.$refs.tabControl1;
      // if (data === '流行')
      this.$refs.tabControl2.currentIndex = data.index;
      console.log(this.$refs.tabControl1, "weqweqew");
    },
    loadMore(data) {
      console.log(data, "加载啦");
      if (data) {
        let type = this.type;
        // 获取更多数据
        this._getHomeGoods(type);
      }
    },
    backToTop() {
      // console.log(this.$refs.scroll,'top')
      // 传入三个参数，分别是x,y,time
      this.$refs.scrolls.scrollTos(0, 0, 500);
    },
    scrollPosition(data) {
      this.scrollPositiony = data.y;
    },
    swiperImgLoad() {
      console.log(this.$refs.tabControl2.$el.offsetTop, "okkkkkk");
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
    // debounce(func, delay) {
    //   // 防抖
    //   let timer = null;
    //   return function(...arg) {
    //     if (timer) {
    //       clearTimeout(timer);
    //     }
    //     timer = setTimeout(() => {
    //       func.apply(this, arg);
    //     }, delay);
    //   };
    // }
  },
  components: {
    NavBar,
    Swiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    backToTop
  }
};
</script>

<style scoped lang="less">
.home {
  margin: 44px 0 49px 0;
  /* position: relative; */
  height: 100vh;
  /* vh => 视口大小 viewport height */
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  /* 方案1  父容器设置height:100vh,content calc动态计算高度 */
  height: calc(100% - 44px - 49px);
  margin-top: 44px;
  overflow: hidden;

  /* 方案2  父容器设置height:100vh和相对定位relative,
  content设置absolute,根据顶部导航和底部tabbar设置
  top和bottom，大小和导航高度一致即可 */
  /* position: absolute;
  top: 0px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
.tabControl {
  position: fixed;
  top: 44px;
  z-index: 9;
  left: 0;
  right: 0;
}
</style>
