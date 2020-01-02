<template>
  <div id="cate">
    <nav-bar class="home-nav">
      <div slot="center">
        <h6>我是内容</h6>
      </div>
    </nav-bar>
    <scroll class="content">
      <leftMenu class="leftMenu"></leftMenu>
    </scroll>
    <scroll class="content2">
      <rightMenu class="rightMenu"></rightMenu>
    </scroll>
  </div>
</template>

<script>
import scroll from "./components/scroll.vue";
import NavBar from "@/components/common/navbar/NavBar";
import leftMenu from "./components/leftMenu";
import rightMenu from "./components/rightMenu";
export default {
  components: { leftMenu, NavBar, rightMenu, scroll }
};
</script>

<style scoped lang="less">
.home-nav {
  background-color: var(--color-tint);
}
#cate {
  margin: 44px 0 49px 0;
  height: 100vh;
  display: flex;
}
.content {
  width: 30%;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.content2 {
  width: 70%;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
