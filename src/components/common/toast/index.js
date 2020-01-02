import Toast from "./Toast.vue";
import Vue from "vue";
const obj = {};
obj.install = function() {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  // new的方式，根据组件构造器创建一个组件对象
  const toast = new toastConstructor();
  // 把组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement("div"));
  // toast.$el就是这个div
  document.body.appendChild(toast.$el);
  // 挂载到vue的原型上
  Vue.prototype.$toast = toast;
};

export default obj;