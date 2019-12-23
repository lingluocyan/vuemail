<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>
<style lang="less">
@import "./assets/css/base.css";
</style>
