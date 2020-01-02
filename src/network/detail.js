import { request } from "./request";
export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export function getRecommend() { 
  return request({
    url: '/recommend'
  })
 }

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
    this.services = shopInfo.services
  }
} 

export class ImageInfo {
  constructor(imageInfo) {
    this.title = imageInfo.key,
    this.imgList = imageInfo.list
  }
}

export class ItemParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}