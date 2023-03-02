import axios from 'axios'
import nprogress from 'nprogress'
import"nprogress/nprogress.css"
import {LoadingStore} from "@/store/Loading.js"
export const axiosFind = axios.create({
    timeout:5000,
    baseURL:"/api"
})
export  const PageRequests = axios.create({
    timeout:5000,
    baseURL:"/api"
});
PageRequests.interceptors.request.use(config => {
    const store =LoadingStore()
    nprogress.start();   
    // // store.$patch({LoadingStore:false})
    //  store.updateajaxCount(1)
     store.$patch((state)=>{
        state.ajaxCount = state.ajaxCount +1
     })
    return config;
    },error=>{
        const store =LoadingStore()
        // store.updateajaxCount(-1)
        store.$patch((state)=>{
            state.ajaxCount = state.ajaxCount-1
         })
        return  Promise.reject(new Error('fail'))
        
    });
    //响应拦截器
PageRequests.interceptors.response.use(res=> {
    const store =LoadingStore()
    nprogress.done()
    // // store.$patch({LoadingStore:false})
    // console.log( '....' ,store.LoadingStore);
    // store. updateajaxCount(-1)
    store.$patch((state)=>{
        state.ajaxCount = state.ajaxCount-1
     })
    return res.data
     
    },error => {
        const store =LoadingStore()
        console.log(error)
        // store.updateajaxCount(-1)
        store.$patch((state)=>{
            state.ajaxCount = state.ajaxCount-1
         })
         console.log(store.ajaxCount);
    return Promise.reject(new Error('fail'));
    });   
axiosFind.interceptors.request.use(config => {
    nprogress.start();   
    return config;
    },error=>{
        const store =LoadingStore()
        // store.updateajaxCount(-1)
        store.$patch((state)=>{
            state.ajaxCount = state.ajaxCount-1
         })
        return  Promise.reject(new Error('fail'))
        
    });
    //响应拦截器
axiosFind.interceptors.response.use(res=> {
   
    nprogress.done()
   
    return res.data
     
    },error => {
    return Promise.reject(new Error('fail'));
    });
