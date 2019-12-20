<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">
        <h6>我是内容</h6>
      </div>
    </nav-bar>
    <swiper :banner-list="banners"></swiper>
    <!-- <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
        </a>
    </swiper-item>
    </swiper> -->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Swiper from "@/components/common/swiper/Swiper.vue";
import { getHomeMultidataData } from "@/network/home.js";

export default {
  props: {},
  data() {
    return {
      result: null,
      banners: [],
      recommend: []
    };
  },
  computed: {},
  created() {
    this._getHomeMultidataData();
  },
  mounted() {},
  watch: {},
  methods: {
    async _getHomeMultidataData() {
      getHomeMultidataData().then(res => {
        if (res.success) {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend;
          console.log(this.banner);
        }
      });
    }
  },
  components: {
    NavBar,
    Swiper
  }
};
</script>

<style scoped lang="less">
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
