
import { defineStore} from 'pinia'
export const LoadingStore = defineStore('Loading',{
  state:()=>{
    return {
      loading:false,
      pageInit:false,
      ajaxCount:0,
    }
  },
  getters:{},
  actions:{
  }
})
