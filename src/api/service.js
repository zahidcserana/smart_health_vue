import request from '@/utils/request'
import { env } from '@/utils'

export function bloodDonation (data) {
  return request({
    url: `${env.api_url}/blood-donations`,
    method: 'post',
    data
  })
}

export function bloodDonationList () {
  return request({
    url: `${env.api_url}/blood-donations`,
    method: 'get'
  })
}

export function ambulance (data) {
  return request({
    url: `${env.api_url}/ambulances`,
    method: 'post',
    data
  })
}

export function ambulanceList () {
  return request({
    url: `${env.api_url}/ambulances`,
    method: 'get'
  })
}
