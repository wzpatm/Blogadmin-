import { defineStore} from 'pinia'
import { getBlogDetail,getBlogViewsNumber } from '@/API'
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';
export const BlogDetailStore = defineStore('BlogDetail',{
     state:()=>{
        return{
            ArticleContent:'',
            BlogDetail:{}
            
        }
     }  ,
    getters:{
        ArticleContentHtml:(state)=>{
          return VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(state.ArticleContent)
        }
    },
    actions:{
        //发起请求博客详情
       async getBlogDetail(_id,title){
        const result = await getBlogDetail(_id,title)
        if(result.code==200){
            this.BlogDetail = result.data[0]
            this.ArticleContent = result.data[0].content
            console.log(result.data[0]);
        }else{
            return Promise.reject(new Error("fali"))
        }
       },
    //    updatePageInit: function (pageInit) {
    //     this.pageInit = pageInit
    //   },
    //   updateAjaxCount: function (count) {
    //     this.ajaxCount = this.ajaxCount + count
    //   }
    
    }

})
  
