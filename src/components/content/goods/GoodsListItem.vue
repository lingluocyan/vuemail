<template>
  <div class="goods-list-item" @click="itemClick">
    <div>
      <!-- <img :src="goodsItem.show.img" @load="imgLoad" alt="" /> -->
      <img :src="showImg" @load="imgLoad" alt="" />
    </div>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">¥{{ goodsItem.price }}</span>
      <span class="collect">☆{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
      // return this.goodsItem.image ? this.goodsItem.image : this.goodsItem.show.img
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad','=-=-=-=')
      console.log('load')
    },
    // 详情页跳转
    itemClick() {
      console.log(this.goodsItem,'wwwddd')
      let id = this.goodsItem.iid || this.goodsItem.shop_id
      this.$router.push('/detail/' + id)
      // this.$router.push({
      //   path: '/detail/',
      //   query: {
      //     id: this.goodsItem.iid
      //   }
      // })
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
  .goods-list-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-list-item img {
    height: 298px;
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 16px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
