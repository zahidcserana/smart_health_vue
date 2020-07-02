import request from '@/utils/request'
import { env } from '@/utils'

export function cityList () {
  return request({
    url: `${env.api_url}/city-list`,
    method: 'get'
  })
}

export function userSettings () {
  return request({
    url: `${env.api_url}/user-settings`,
    method: 'get'
  })
}

export function areaList (id) {
  return request({
    url: `${env.api_url}/area-list/${id}`,
    method: 'get'
  })
}
