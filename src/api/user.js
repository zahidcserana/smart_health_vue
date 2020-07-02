import request from '@/utils/request'
import { env } from '@/utils'

export function getInfo () {
  return request({
    url: `${env.api_url}/me`,
    method: 'post'
  })
}

export function updateUser (data) {
  return request({
    url: `${env.api_url}/users/${data.id}`,
    method: 'put',
    data
  })
}
