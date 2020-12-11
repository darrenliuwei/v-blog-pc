import axios from 'axios'
import { Loading } from 'element-ui'

const $axios = axios.create({
  // 设置超时时间
  timeout: 10000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL: 'http://127.0.0.1:7001'
})

// 在全局请求和响应拦截器中添加请求状态
let loading = null

// 请求拦截器
$axios.interceptors.request.use(
  config => {
    loading = Loading.service({ text: '数据加载中...' })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
$axios.interceptors.response.use(
  response => {
    if (loading) {
      loading.close()
    }
    const code = response.status
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (loading) {
      loading.close()
    }
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break
        case 404:
          this.$message.error('网络请求不存在')
          break
        default:
          this.$message.error(error.response.data.message)
      }
    } else {
      // 请求超时或者网络有问题
      if (error.$message.includes('timeout')) {
        this.$message.error('请求超时！请检查网络是否正常')
      } else {
        this.$message.error('请求失败，请检查网络是否已连接')
      }
    }
    return Promise.reject(error)
  }
)

export default {
  get(url, params = null) {
    return $axios({
      method: 'get',
      url,
      params
    })
  },
  post(url, data = null) {
    return $axios({
      method: 'post',
      url,
      data
    })
  },
  put(url, data = null) {
    return $axios({
      method: 'put',
      url,
      data
    })
  },
  delete(url, data = null) {
    return $axios({
      method: 'delete',
      url,
      data
    })
  }
}
