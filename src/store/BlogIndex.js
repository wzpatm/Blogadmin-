import { defineStore} from 'pinia'
import { reqBlogsIndex,reqBlogType,reqBlogNumber,getBlogViewsNumber,getBlogCommentNumber,getHotBlog } from '@/API/index'
export const BlogIndexStore = defineStore('BlogIndex',{
  state:()=>{
    return {
      blog:[],
      blogType:[],
      blogNumber:[],
      BlogViewsNumber:'',
      BlogCommentNumber:'',
      HotBlogTitle:[],
      onscroll:true
    }
  },
  getters:{},
  actions:{
  async reqBlogsIndex(page,limit){
     let result = await reqBlogsIndex(page,limit)
     if(result.code==200){
      this.blog=result.data
      if(result.data.length<0){
        this.onscroll =false
      }

     }else{
      return Promise.reject(new Error("fali"))
     }

    },
  async reqBlogType(){
     let result = await reqBlogType()
     if(result.code == 200) {
        this.blogType = result.data
     }else{
      return Promise.reject(new Error("fali"))
     }
  },
  async reqBlogNumber(){
    let result = await reqBlogNumber()
    if(result.code == 200) {
       this.blogNumber = result.data
    }else{
     return Promise.reject(new Error("fali"))
    }

  },
  async getBlogViewsNumber (){
    let result = await getBlogViewsNumber()
    if(result.code==200){
         console.log(result);
        this.BlogViewsNumber = result.data[0].totalViews
        // console.log(result.data[0]);
    }else{
        return Promise.reject(new Error("fali"))
    }
   },
   async getBlogCommentNumber (){
    let result = await getBlogCommentNumber()
    if(result.code==200){
        this.BlogCommentNumber = result.data[0].totalComment
        // console.log(result.data[0]);
    }else{
        return Promise.reject(new Error("fali"))
    }
   },
   async getHotBlog (){
     let result  = await getHotBlog ()
     if(result.code==200){
     this.HotBlogTitle = result.data
 }else{
     return Promise.reject(new Error("fali"))
 }
   }
  }
})
