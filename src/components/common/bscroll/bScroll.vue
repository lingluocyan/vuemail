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
    probeType:{
      type: Number,
      default:() => 3
    },
    pullUpLoad: { // 3可以启用监听滚动
      type:Boolean,
      default:()=> true
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
    })
    this.scroll.on("pullingUp", () => {
      // 监听上拉加载更多
      console.log("pp");
      this.$emit('load-more',true)
      // 监听结束后执行，不然只能上拉一次
      this.scroll.finishPullUp();
    });
    this.scroll.on("scroll", position => {
      // 监听滚动
      // console.log(position);
      this.$emit('scroll-position',position)
    });
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less"></style>
