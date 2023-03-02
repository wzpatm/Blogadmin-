import {PageRequests} from "./request.js";
export const reqBlogsIndex = (page,limit)=>{
    return PageRequests({url:`/blogindex?page=${page}&limit=${limit}`,method:"get"})
}
export const reqTimeLine = ()=>{
    return PageRequests({url:"/timeline",method:"get"})
}
export const reqBlogType = ()=>{
    return  PageRequests({url:"/blogindex/blogtype",method:"get"})
}
export const reqBlogNumber = ()=>{
    return PageRequests({url:"/blogindex/number",method:"get"})
}
//提交博文接口
export const postBlogDetail = (data)=>{
    return  PageRequests({url:"/blogindex",data:data,method:'post'})
}
export const getBlogDetail = (_id,title)=>{
    return PageRequests({url:`/blogindex?_id=${_id}&title=${title}`,method:'get'})
}
export const getBlogViewsNumber = ()=>{
    return PageRequests({url:"/blogindex/viewsnumber",method:"get"})
} 
export const getBlogCommentNumber = ()=>{
    return PageRequests({url:"/blogindex/commentnumber",method:"get"})
} 
export const getHotBlog = ()=>{
    return  PageRequests({url:"/blogindex/hotblog",method:"get"})
}