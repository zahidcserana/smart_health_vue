import axios from 'axios'
// import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // url = base url + request url
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers.Authorization = 'Bearer ' + getToken()

    // config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Content-Type'] = 'application/json'
    // }
    return config
  },
  error => {
    // do something with request error
    console.log('err:' + error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err-' + error)
    return Promise.reject(error)
  }
)

export default service
