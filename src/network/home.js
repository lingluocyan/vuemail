import { request } from "./request";

export function getHomeMultidataData() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeGoods(params) {
  return request({
    url: "/home/data",
    params: {
      type: params.type,
      page: params.page
    }
  });
}
