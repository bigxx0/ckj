import axios from 'axios';

// // 在发送请求前，将 token 存储到 localStorage 中：
// localStorage.setItem('token', '7a18e935-f814-4456-9cac-1e84e1ef6fae');

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
    // 使用localStorage设置authorization，如'Authorization':'Bearer '+localStorage.getItem("authorization"),
        config.headers.Authorization = token;
      }
      console.log('请求拦截成功：', config);
      return config;
    },
  (error) => {
    console.error('请求拦截失败：', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    console.log('响应拦截成功：', response.data);
    return response;
  },
  (error) => {
    console.error('响应拦截失败：', error);
    return Promise.reject(error);
  }
);

// 封装方法
async function request(method, url, data) {
    // try {
      const response = await axios({
        method: method,
        url: 'http://182.43.58.52:9001' + url,
        data: data,
      });
      return response
    }

// 导出封装后的 request 模块
export default request
