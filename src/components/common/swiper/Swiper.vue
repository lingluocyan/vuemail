<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in bannerList" :key="index">
      <img :src="item.image" style="width:100%" alt="" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
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
      swiperOption: {
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="less">
.swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
