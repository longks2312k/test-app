import axios from 'axios'
import { baseURL } from './config'

//  Khởi tạo
const api = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api/',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// Lấy Api
export const getProductList = () => api.get('v2/menu')
export const getStore = () => api.get('get_all_store')
export const getCoffee = () => api.get('v2/category/web')
export const cfLogin = (params) => api.post('verify_mobile',params)