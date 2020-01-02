<template>
  <div class="container">
    <div class="check">
      <div class="check-button">
        <check-button
          :value="isSelectAll"
          @click.native="checkClick"
          class="checkbottom"
        ></check-button>
      </div>
      <span class="price">¥666</span>
      <span class="total">合计: ¥666元</span>
      {{ isSelectAll }}
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
import { mapState } from "vuex";
// import { CHECKALL, NOTCHECKALL } from "../../../store/mutationType.js";
export default {
  props: {},
  data() {
    return {
      checkAllFlag: true
    };
  },
  computed: {
    ...mapState(["cartList"]),
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((prev, item) => {
          return item.price * item.count;
        }, 0);
    },
    isCheckAll() {
      let flag = true;
      this.$store.state.cartList.forEach(item => {
        if (!item.checked) {
          flag = false;
        }
      });
      return flag;
    },
    isSelectAll() {
      // !this.cartList.filter(item => {
      //   return !item.checked;
      // }).length;
      // !this.cartList.find(item => {
      //   return !item.checked;
      // });

      return this.cartList.length > 0
        ? !this.cartList.find(item => {
            return !item.checked;
          })
        : false;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    checkClick() {
      console.log("dd");
      if (this.isCheckAll) {
        // 全部选中
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    }
    // checkBtnClick() {
    //   if (this.isCheckAll) {
    //     this.$store.commit(CHECKALL);
    //   } else {
    //     this.$store.commit(NOTCHECKALL);
    //   }
    // }
  },
  components: { CheckButton }
};
</script>

<style scoped lang="less">
.container {
  height: 43px;
  line-height: 32px;
  width: 100%;
  background-color: cyan;
  position: fixed;
  display: flex;
  bottom: 40px;
  left: 0;
}
.check {
  width: 100%;
}
.price {
  float: left;
  margin-left: 40px;
}
.total {
  float: right;
}
.checkbottom {
  line-height: 0;
  position: absolute;
  left: 15px;
  top: 13px;
}
.price {
}
</style>
