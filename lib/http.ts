import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import CONFIG from '../lib/config';

// let baseURL : string;
// if( process.env.NODE_ENV === 'production' ) {
//     baseURL = '上线的地址'
// } else {
//     baseURL = '开发的地址'
// }

// 拦截器
axios.interceptors.response.use((response : AxiosResponse ) => {
    return response
}, (error) => {
    return Promise.reject(error)
})


axios.interceptors.request.use((config : AxiosRequestConfig ) => {
   //  console.log(config)
    config.headers.Authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTExMTAyNTc0Mjg4ODM0NTYyIiwiZXhwIjoxNjEzNDYzMjk2LCJpYXQiOjE2MDU2ODcyOTZ9.-i3_RS4Ae5aN7JqARN0rzSTHJryDCMK8apKYJVOyHlBG7wrVmDFaoMbXKHoJYtoOSAgnSGPAOVMwWnkaLHnDCg';
    config.baseURL = CONFIG.baseURL;
    config.timeout = 10000
    return config;
}, (error) => {
    return Promise.reject(error)
})




// axios的get请求
export function getAxios( url : string, params : object = {} ) : Promise<any>{
      return new Promise(( resolve, reject ) =>{
                axios.get( url, params).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    console.log(err, '1')
                    reject(err)
                }) 
      })
}




// axios的post请求
export function postAxios( url : string, params : object = {} ) : Promise<any>{
    return new Promise((resolve, reject) => {
        axios({
            url : url,
            method: 'post',
            data : params,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}



export default axios
