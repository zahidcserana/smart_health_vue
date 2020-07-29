import request from '@/utils/request'
import { env } from '@/utils'

export function bloodDonation (data) {
  return request({
    url: `${env.api_url}/blood-donations`,
    method: 'post',
    data
  })
}
