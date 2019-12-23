<template>
  <swiper v-if="bannerList.length > 0" :options="swiperOption" ref="mySwipers" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in bannerList" :key="index">
      <img @load="imgLoad" :src="item" style="width:100%" alt="" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "@/components/common/swiper";
export default {
  name: "carrousel",
  props: {
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isLoad: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwipers.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    this.swiper.slideTo(3, 1000, false);
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>
<style lang="less">
.swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiper {
  height: 300px;
  margin:44px 0 0 0;
}
</style>
