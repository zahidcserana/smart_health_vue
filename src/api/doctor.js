import request from '@/utils/request'
import { env } from '@/utils'

export function doctorList () {
  return request({
    url: `${env.api_url}/doctors`,
    method: 'get'
  })
}

export function saveSchedule (data) {
  return request({
    url: `${env.api_url}/doctor-schedule`,
    method: 'post',
    data
  })
}

export function updateSchedule (data) {
  return request({
    url: `${env.api_url}/doctor-schedule/${data.id}`,
    method: 'put',
    data
  })
}

export function scheduleList (doctorId) {
  return request({
    url: `${env.api_url}/doctor-schedule-list/${doctorId}`,
    method: 'get'
  })
}

export function doctorSlot (doctorId) {
  return request({
    url: `${env.api_url}/doctor-slot/${doctorId}`,
    method: 'get'
  })
}
