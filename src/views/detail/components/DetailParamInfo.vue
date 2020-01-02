<template>
    <div class="param-info" v-if="Object.keys(itemParams).length !== 0">
      <table v-for="(item, index) in itemParams.sizes" :key="index">
        <tr v-for="(item1, index1) in item" :key="index1">
          <td v-for="(item2, index2) in item1" :key="index2">{{item2}}</td>
        </tr>
      </table>
      <table class="info-param">
        <tr v-for="(item, index) in itemParams.infos" :key="index">
          <td class="info-param-key">{{item.key}}</td>
          <td class="param-value">{{item.value}}</td>
        </tr>
      </table>
      <!-- <table class="info-param">
        <tr v-for="(info, index) in itemParams.infos" :key="index">
          <td class="info-param-key">{{info.key}}</td>
          <td class="param-value">{{info.value}}</td>
        </tr>
      </table> -->
      <div class="info-img" v-if="itemParams.image.length !== 0">
        <img :src="itemParams.image" alt="">
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "DetailParamInfo",
      props: {
        itemParams: {
          type: Object
        }
      }
    }
  </script>
  
  <style scoped>
    .param-info {
      padding: 20px 15px;
      font-size: 14px;
      border-bottom: 5px solid #f2f5f8;
    }
  
    .param-info table {
      width: 100%;
      border-collapse: collapse;
    }
  
    .param-info table tr {
      height: 42px;
      line-height: 42px;
    }
  
    .param-info table tr td {
      border-bottom: 1px solid rgba(100,100,100,.1);
    }
  
    .info-param-key {
      /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
      width: 95px;
    }
  
    .info-param {
      border-top: 1px solid rgba(0,0,0,.1);
    }
  
    .param-value {
      color: #eb4868
    }
  
    .info-img img {
      width: 100%;
    }
  </style>
  