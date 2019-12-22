<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in titles"
      :key="index"
      @click="changeItem(index)"
    >
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    changeItem(index) {
      this.currentIndex = index
      console.log(this.titles[index],'titles[index]')
      this.$emit('change-item',this.titles[index])
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  z-index: 9;
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 3px solid var(--color-high-text);
      padding:10px;
      cursor: pointer;
    }
  }
}
</style>
