<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in imgList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props: {
    imgList:{
      type: Array,
      default:()=>[]
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.recommend {
  display: flex;
  text-align: center;
  border-bottom: 6px solid #eee;
  .recommend-item {
    margin: 10px 0;
    flex: 1;
    img {
      display: inline-block;
      width: 80%;
      margin: 0px 5px;
    }
  }
}
</style>
