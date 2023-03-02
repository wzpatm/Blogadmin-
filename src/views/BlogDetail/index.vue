<template>
    <div class="blogdetail">
        <div class='ArticleContent'>
            <div class="DetailTitle">
                <h1>{{ BlogStore.BlogDetail.title }}</h1>
                <b class="cr3"> • {{ BlogStore.BlogDetail.time }} • {{  BlogStore.BlogDetail.comment?BlogStore.BlogDetail.comment:0 }}评论 • {{ BlogStore.BlogDetail.views}}阅读</b>
            </div>
            <transition name="Fade" mode="out-in">
                <img src="@/assets/images/BlogDetailSkele_PC.jpg" class="BlogDetailSkeletonScreenPC"
                    v-show="ScreenLoading">
            </transition>
            <v-md-preview-html :html="BlogStore.ArticleContentHtml" preview-class="vuepress-markdown-body" v-show="!ScreenLoading">
            </v-md-preview-html>
        </div>
        <div class="ArticleMessage">
            <div class="ArticleMessageTab">
                <div class="TabHeader">
                    <img src="@/assets/images/DefaultHeadIcon.jpg" class="userImage" alt="默认头像">
                    <input type="text" class="userName" placeholder="昵称(必填)" v-model="userInfo.userName">
                    <input type="text" class="userEmail" placeholder="邮箱(可以不填)" v-model="userInfo.userEmail">
                </div>
                <div class="TabCenter"><textarea placeholder="欢迎留言" v-model="userInfo.userComment" required  ref="MsgFocus"></textarea>
                </div>
                <div class="TabFooter"><span @click="submitComment()">提交评论</span></div>
            </div>
        </div>
        <div class="ArticleComment" v-if="CommentInfo.length > 0">
            <div class="ArticleCommentList">
                <div class="ArticleCommentItem" v-for="(item, id) in CommentInfo " :key="id">
                    <div class="ItemIcon">
                        <img src="@/assets/images/default_headicon_0.jpeg" alt="">
                    </div>
                    <div class="ItemContent">
                        <div class="ArticleCommentNickName cr3">{{ item.ArticleCommentNickName }}<span
                                class="ArticleCommentCity cr5"><i class="iconfont">&#xe60a;</i>{{ item.ArticleCommentCity }}</span></div>
                        <div class="ArticleCommentContent"> {{ item.ArticleCommentText }} </div>
                        <div class="ArticleCommentDateAnswer">
                            <div class="Date">{{ item.ArticleCommentDate }}</div>
                            <div class="Answer" @click="Reply(item.ArticleCommentNickName)">回复</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, reactive, onBeforeUnmount, onMounted, onUnmounted, computed, onBeforeMount, getCurrentInstance, inject } from 'vue';
import { useRoute } from 'vue-router';
import {BlogDetailStore} from "@/store/BlogDetail.js"
import  screenLoading  from "@/hooks/screenLoading.js"
const route = useRoute()
const BlogStore = BlogDetailStore()
const userInfo = reactive({
    userEmail: "",
    userName: "",
    userComment: ''
})
const ScreenLoading = ref(false)
const CommentInfo = ref('')
const { proxy } = getCurrentInstance()
screenLoading(ScreenLoading)//骨架屏逻辑
const getCommenList = () => {
    proxy.$FindAxios({
        url: '/blogComment',
        methods: 'get',
        params: { _id: route.query._id },
        success: ((data) => {
            // console.log(data);
            CommentInfo.value = data
        })
    })//获取评论列表
}//获取评论列表
const initPage = () => {
    BlogStore.getBlogDetail(route.query._id, route.query.title)//获取博文详细信息
    getCommenList()//获取评论列表
    // 默认填写文章评论输入框的昵称(从LocalStroge中获取)在评论文章时存入LocaStroge
    const LocalCommonUser = proxy.$GetLocalStorage('XiaoWangBlog');
    console.log(LocalCommonUser)
    if (LocalCommonUser.toString() != '{}') {
        userInfo.userName = LocalCommonUser.value
    }

}
initPage()//初始化页面
const submitComment = () => {
    if (userInfo.userComment && userInfo.userName) {
        proxy.$GetLocationCity(function (LocationCityName) {
            proxy.$FindAxios({
                url: '/blogComment',
                method: 'post',
                data: {
                    ArticleCommentNickName: userInfo.userName,
                    ArticleCommentEmail: userInfo.userEmail,
                    ArticleCommentText: userInfo.userComment,
                    ArticleId: route.query._id,
                    ArticleName: route.query._title,
                    ArticleCommentDate: proxy.$getNewTime(),
                    ArticleCommentCity: LocationCityName
                },
                success: () => {
                    getCommenList()//重新刷新一次页面
                    userInfo.userComment = '';
                    proxy.$SetLocalStorage('XiaoWangBlog', {
                        key: "ArticleCommentNickName",
                        value: userInfo.userName
                    })//将用户名绑定到LocalStroage
                    proxy.$FindAxios({
                     url:"/blogindex",
                     method:"get",
                     params:{
                        type:'add',
                        _id:route.query._id,
                        title:route.query.title
                     },
                     success:(data)=>{
    
                     }
                   }) 

                }
            })
        })

    } else {
        alert('必须填写评论哦')
    }

}//提交评论
const MsgFocus = ref(null)
const Reply = (ArticleCommentNickName) => { 
     userInfo.userComment = '@'+ArticleCommentNickName+":";
     MsgFocus.value.focus()
     
}//回复评论
</script>

<style lang="scss" scoped>
.Fade-enter-active,
.Fade-leave-active {
    transition: opacity .3s;
}

.Fade-enter-from,
.Fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

@mixin el-card {
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    background-color: #fff;
    box-shadow: 0px 0px 5px #cdd0d5;
}

.cr3 {
    color: #27afb6;
}
.cr5 {
    color:#01aaed;
}
.blogdetail {
    max-width: 1100px;
    margin: 10px auto;

    .ArticleContent {
        @include el-card;
        padding: 15px;

        .DetailTitle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            padding: 20px;

            h1 {
                font-size: 28px;
            }

            .cr3 {
                margin-top: 5px;
                font-size: 14px;
                color: rgb(144, 147, 153);
            }
        }

        img {
            margin: 0 2rem;
        }
    }

    .ArticleComment {
        @include el-card;
        padding: 15px;
        margin-top: 15px;

        .ArticleCommentList {
            max-width: 800px;
            padding: 15px;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            .ArticleCommentItem {
                padding: 15px;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #e9e9e9;
                border-left: 1px solid #e9e9e9;
                border-right: 1px solid #e9e9e9;

                &:first-child {
                    border: 1px solid #e9e9e9;
                }

                .ItemIcon {
                    margin-right: 5px;

                    img {
                        width: 3rem;
                        height: 3rem;
                        border-radius: 1rem;
                    }
                }

                .ItemContent {
                    width: 90%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    color: #303133;

                    .ArticleCommentNickName {
                        padding-bottom: 0.5rem;

                        .ArticleCommentCity {
                            margin-left: 0.5rem;
                        }
                    }

                    .ArticleCommentContent {
                        padding-bottom: 0.5rem;
                    }

                    .ArticleCommentDateAnswer {
                        display: flex;
                        justify-content: space-between;
                        color: #888;

                        .Answer {
                            width: 30%;
                            text-align: right;
                            cursor: pointer;
                        }
                    }

                }
            }
        }
    }

    .ArticleMessage {
        @include el-card;
        padding: 15px;
        margin-top: 15px;

        .ArticleMessageTab {
            width: 60%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            .TabHeader {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;

                input {
                    height: 2rem;
                    width: 18rem;
                    appearance: none;
                    outline: none;
                    border: 1px solid #e9e9e9;
                    padding: 0 0.5rem;
                }

                .userImage {
                    width: 2rem;
                    height: 2rem;
                }
            }

            .TabCenter {
                width: 100%;
                height: 6rem;


                textarea {
                    appearance: none;
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    max-height: 100%;
                    box-sizing: border-box;
                    margin-top: 0.5rem;
                    outline: none;
                    border: 1px solid #e9e9e9;
                    padding: 0.5rem 0.5rem;

                }
            }

            .TabFooter {
                height: 2rem;
                margin: 1rem 0;
                text-align: right;
                line-height: 2rem;

                span {
                    cursor: pointer;
                    margin: 0.5rem 0;
                    text-align: center;
                    border: 1px solid #01aaed;
                    background-color: #01aaed;
                    border-radius: 4px;
                    padding: 0.2rem;
                    color: #ffff;
                }
            }
        }
    }
}
</style>