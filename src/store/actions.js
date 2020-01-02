export default {
  addCart(context, payload) {
    return new Promise((resolve) => {
      let flag = true;
      for (var i = 0; i < context.state.cartList.length; i++) {
        if (payload.iid === context.state.cartList[i].iid) {
          // 说明之前添加过
          // context.cartList[i].count += 1;
          context.commit("addCount", i);
          flag = false;
          resolve('商品加一');
        }
      }
      if (flag) {
        // context.cartList.push(payload);
        context.commit("pushItem", payload);
        resolve('商品添加')
      }
    });
  }
};
