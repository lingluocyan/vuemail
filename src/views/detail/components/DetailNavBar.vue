<template>
  <div class="detailNavBar">
    <nav-bar class="home-nav">
      <div slot="left" class="left" @click="goback">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="center">
        <div
          @click="changeItem(index)"
          :class="{ active: currentIndex === index }"
          class="center-item"
          v-for="(item, index) in titles"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  props: {},
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      topImgs:[]
    };
  },
  computed: {},
  created() {
  },
  mounted() {},
  watch: {},
  methods: {
    changeItem(index) {
      this.currentIndex = index;
    },
    goback() {
      this.$router.go(-1);
    }
  },
  components: { NavBar}
};
</script>

<style scoped lang="less">
.center {
  display: flex;
}
.center-item {
  font-size: 14px;
  flex: 1;
  cursor: pointer;
}
.active {
  color: red;
}
.left {
  margin-top: 5px;
}
.home-nav {
  background-color: #fff;
}
</style>
