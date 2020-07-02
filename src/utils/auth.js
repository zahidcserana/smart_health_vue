const TokenKey = 'token'

export function getToken () {
  return localStorage.getItem(TokenKey)
  // return Cookies.get(TokenKey)
}

export function setToken (token) {
  return localStorage.setItem(TokenKey, token)
  // return Cookies.set(TokenKey, token)
}

export function removeToken () {
  console.log(removeToken)
  // return localStorage.removeItem(TokenKey)
  // return Cookies.remove(TokenKey)
}

export function getUserInfo () {
  return JSON.parse(localStorage.getItem('user_info'))
}

export const env = {
  production: false,
  api_url: 'http://shapi.local/api/',
  domain: 'http://shapi.local/',
  protocal: 'http://',
  storeHoshName: 'localhost:8080',
  patnerHoshName: 'localhost:8080',
  partner: 'localhost'
}

export class Helpers {
  static setLoading (enable) {
    if (enable) {
    }
  }
}
