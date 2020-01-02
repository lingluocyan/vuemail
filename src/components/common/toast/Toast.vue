<template>
  <div class="toast" v-show="showToast">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {},
  data() {
    return {
      message: "",
      showToast: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    show(message, duration = 1000) {
      this.showToast = true;
      this.message = message;
      setTimeout(() => {
        this.showToast = false;
        this.message = "";
      }, duration);
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.toast {
  width: 60px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  position: fixed;
  left: 50%;
  top: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 9px;
}
</style>
