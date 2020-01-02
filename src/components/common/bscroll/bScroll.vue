<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 导入插件
import BScroll from "better-scroll";
export default {
  name: "bScroll",
  props: {
    probeType: {
      type: Number,
      default: () => 3
    },
    pullUpLoad: {
      // 3可以启用监听滚动
      type: Boolean,
      default: () => true
    },
    themeTopYs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 获取元素，vue中不推荐直接操作dom，因此使用refs
    let wrapper = this.$refs[wrapper];
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, // 可以点击
      probeType: this.probeType, // 可以监听滚动,1和2不可以
      pullUpLoad: this.pullUpLoad // 是否允许下拉加载
    });
    this.scroll.on("pullingUp", () => {
      // 监听上拉加载更多
      this.$emit("load-more", true);
      // 监听结束后执行，不然只能上拉一次
      this.scroll.finishPullUp();
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // 监听滚动
        this.$emit("scroll-position", position);
        // this.$nextTick(()=> {
        //   const positionY = -position.y;
        //   for (let i in this.themeTopYs) {
        //     if (
        //       positionY > this.themeTopYs[i] &&
        //       positionY < this.themeTopYs[i + 1]
        //     ) {
        //       console.log(i,'iiiii');
        //     }
        //   }
        // })
      });
    }
  },
  watch: {},
  methods: {
    scrollTos(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    refreshs() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    debounce(func, delay) {
      // 防抖
      let timer = null;
      return function(...arg) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, arg);
        }, delay);
      };
    }
  },
  components: {}
};
</script>

<style scoped lang="less"></style>
