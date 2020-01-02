import {debounce} from "./util"
import backToTop from "components/content/backToTop/backToTop";

export const itemListenerMixin = {
  mounted() {
    // 返回一个函数
    const refresh = debounce(this.$refs.scrolls.refreshs, 300);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
}

export const backToTopMixin = {
  data() {
    return {
      scrollPositiony: 0
    }
  },
  computed: {
    showToTop() {
      return this.scrollPositiony < -900;
    }
  },
  methods: {
    backToTop() {
      // console.log(this.$refs.scroll,'top')
      // 传入三个参数，分别是x,y,time
      this.$refs.scrolls.scrollTos(0, 0, 500);
    }
  },
  components: {
    backToTop
  }
}