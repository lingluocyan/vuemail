import {request} from './request'

export function getHomeMultidataData() {
  return request({
    url: '/home/multidata'
  })
}