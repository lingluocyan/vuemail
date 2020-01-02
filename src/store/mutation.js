import { ADDCOUNT, PUSHITEM, CHECKALL, NOTCHECKALL } from "./mutationType";

export default {
  [ADDCOUNT](state, payload) {
    state.cartList[payload].count += 1;
  },
  [PUSHITEM](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  },
  [CHECKALL](state, payload) {
    console.log(payload, "payload");
    // if (payload === true) {
    let checkedArr = state.cartList.filter(item => {
      return item.checked;
    });
    if (checkedArr.length !== state.cartList.length) {
      state.cartList.map(item => {
        return (item.checked = true);
      });
    } else {
      state.cartList.map(item => {
        return (item.checked = false);
      });
    }
    // }
    // 根据传过来的状态，若全选为true,判断是否全部选项都为选中，只要有一个选中，全部选中
    // 若全部选中，则变为全部不选中
    // 若状态为false1,则全部选中
    // state.cartList.forEach(item => {
    //   item.checked = true
    // })
  },
  [NOTCHECKALL](state, payload) {
    console.log(state, payload, "NOTCHECKALL");
  }
};
