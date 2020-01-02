<template>
    <div class="imgInfo">
      <div>{{imgList.title}}</div>
      <div v-for="(item, index) in imgList.imgList" :key="index">
        <img v-lazy="item" alt="" @load="imgLoad">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imgList: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {};
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad','=-=-=-=')
      }
    },
  };
  </script>
  
  <style scoped lang="less">
    img {
      width: 100%;
    }
  </style>
  