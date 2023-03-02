<template>
    <div class="blog">

        <div class="blog-left">
            <transition>
                <img src="@/assets/images/ArticleList.6dfaece4.jpg" v-show="BlogIndexLoading" style="margin-top: 20px;">
            </transition>
            <div class="ArticleItem" v-show="!BlogIndexLoading" v-for="item in store.blog" :key="item.id"
                @click="UpdateRouter('blogdetail', item)">
                <div class="ItemImg">
                    <img :src= item.avatar  alt="" style="width: 100%;">
                </div>
                <div class="ItemTitle">
                    <h2>{{ item.title }}</h2>
                    <div class="ItemDescription">
                        {{ item.descript }}
                    </div>
                    <div class="TitleFooter">
                        <div class="FooterItem"><i class="iconfont">&#xe610;</i>{{ item.type }}</div>
                        <div class="FooterItem"><i class="iconfont">&#xe64d;</i>{{ item.time }}</div>
                        <div class="FooterItem"><i class="iconfont">&#xe671;</i>{{ item.views ? item.views : 0 }}</div>
                        <div class="FooterItem"><i class="iconfont">&#xe6ad;</i>{{ item.comment ? item.comment : 0 }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-right">
            <div class="HotArticleModule">
                <div class="TagListHead">
                    热门博文
                </div>
                <div class="HotArticle">
                    <transition>
                        <img src="@/assets/images/HotArticleList.a0605271.jpg" v-show="BlogIndexLoading">
                    </transition>
                    <div class="HotArticleItem" v-show="!BlogIndexLoading" v-for="(item, index) in store.HotBlogTitle"
                        :key="item._id" @click="UpdateRouter('blogdetail', item)">
                        <div v-if="index == 0">
                            <span style="color: rgb(244, 78, 3); font-size: 15px">
                                No{{ index + 1 }}
                            </span>
                            {{ item.title }}
                        </div>
                        <div v-if="index == 1">
                            <span style="color: rgb(212, 24, 0); font-size: 15px;">
                                No{{ index + 1 }}
                            </span>
                            {{ item.title }}
                        </div>
                        <div v-if="index == 2">
                            <span style="color: rgb(243, 126, 33); font-size: 15px;">
                                No{{ index + 1 }}
                            </span>
                            {{ item.title }}
                        </div>
                        <div v-if="index == 3">
                            <span style="color: rgb(243, 33, 45); font-size: 15px;">
                                No{{ index + 1 }}
                            </span>
                            {{ item.title }}
                        </div>
                        <div v-if="index == 4">
                            <span style="color: rgb(33, 45, 243); font-size: 15px;">
                                No{{ index + 1 }}
                            </span>
                            {{ item.title }}
                        </div>
                        <div v-if="index == 5">
                            <span>
                                No{{ index + 1 }}
                            </span>
                            {{ item.title }}

                        </div>
                    </div>
                </div>
            </div>
            <div class="AuthorMoudle">
                <div class="backimg">
                </div>
                <div class="HeadPortrait">
                    <img src="@/assets/images/log.png" alt="">
                </div>
                <div class="AuthorCenter">
                    小王的博客
                    <a href="#" target="_blank" class="NButton">博客源码</a>
                </div>
                <div class="BlogStatistic">
                    <div class="BlogStatisticItem">
                        <div class="BlogStatisticItemNum">{{ BlogNumber }}</div>
                        <div class="BlogStatisticItemText">文章</div>
                    </div>
                    <div class="BlogStatisticItem">
                        <div class="BlogStatisticItemNum">{{ BlogCommentNumber }}</div>
                        <div class="BlogStatisticItemText">留言</div>
                    </div>
                    <div class="BlogStatisticItem">
                        <div class="BlogStatisticItemNum">{{ BlogViewsNumber }}</div>
                        <div class="BlogStatisticItemText">阅读</div>
                    </div>

                </div>
            </div>
            <div class="ArticleType">
                <div class="TypeListHead">文章分类<span>(点击筛选)</span></div>
                <div class="TypeListTr">
                    <transition>
                        <img src="@/assets/images/Tag.04894333.jpg" v-show="BlogIndexLoading">
                    </transition>
                    <div class="TagListTd" @click="getTypeBlog($event)" v-show="!BlogIndexLoading"
                        v-for="(item, index) in store.blogType" :key="index">{{ item.ArticleType }}</div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { reactive, toRefs, ref, getCurrentInstance } from 'vue'
import { BlogIndexStore } from "@/store/BlogIndex";
import { useRouter } from 'vue-router';
import screenLoading from "@/hooks/screenLoading.js"
export default {
    setup() {
        const { proxy } = getCurrentInstance()
        const BlogIndexLoading = ref(true)
        const state = reactive({
            show: true,
            BlogNumber: 0,
            BlogCommentNumber: 0,
            BlogViewsNumber: 0,
            TypeBlog:[],
            page:1,
            limit:20
            
        })
        const store = BlogIndexStore();//Pinia状态管理
        const Timer = (Number, storeNumber) => {
            let NumInterval = window.setInterval(function () {
                state[Number] += 1;
                //   console.log(storeNumber);
                if (state[Number] === storeNumber) {
                    clearInterval(NumInterval)
                    // console.log(state.BlogNumber);
                }
            }, 30)
        }//定义缓慢增长数量函数
        setTimeout(() => {
            Timer('BlogNumber', store.blogNumber)
            Timer('BlogCommentNumber', store.BlogCommentNumber)
            Timer('BlogViewsNumber', store.BlogViewsNumber)
        }, 500)
        store.reqBlogsIndex(state.page,state.limit) //获取博客列表
        store.reqBlogType()//获取博客类型
        store.reqBlogNumber()//获取博客数量
        store.getBlogViewsNumber()//获取阅读数量
        store.getBlogCommentNumber()//获取评论数量
        store.getHotBlog()//获取热门博文
        const router = useRouter()
        //跳转博客详情页
        const UpdateRouter = function (RouterName, ArticleMessage) {
            router.push({
                name: RouterName,
                query: {
                    _id: ArticleMessage._id,
                    title: ArticleMessage.title
                }
            });
            ArticleMessage.views++

        }
        const getTypeBlog = (e) => {
            proxy.$FindAxios({
                url: '/typeblog',
                methods: 'get',
                params: { type: e.target.textContent },
                success: ((data) => {
                      store.blog = data
                })
            })//点击获取博文
           ;
        }//点击获取博文
        screenLoading(BlogIndexLoading)
        return {
            BlogIndexLoading,
            ...toRefs(state),
            UpdateRouter,
            getTypeBlog,
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes ColorMove {
    0% {
        background-position: 0;
    }

    100% {
        background-position: 400%;
    }
}

@mixin Moudle {
    background-color: #fff;
    margin-top: 1rem;
    padding: 1rem;
    padding-right: 0.5rem;
    color: rgba(0, 0, 0, .65);
    position: relative;
}

@mixin el-card {
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    box-shadow: 0px 0px 5px #cdd0d5;
}

.Fade-enter-active,
.Fade-leave-active {
    transition: opacity 0.3s
}

.Fade-enter-from,
.Fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

.blog {
    display: flex;
    justify-content: space-between;

    &-left {
        width: 73%;

        .ArticleItem {
            @include el-card;
            width: 100%;
            height: 150px;
            margin-top: 1rem;
            padding: 1rem;
            font-size: .95rem;
            display: flex;
            justify-content: start;
            cursor: pointer;
            background: linear-gradient(0, #01aaed 1px, #01aaed 0) no-repeat,
                linear-gradient(-90deg, #01aaed 1px, #01aaed 0) no-repeat,
                linear-gradient(-180deg, #01aaed 1px, #01aaed 0) no-repeat,
                linear-gradient(-270deg, #01aaed 1px, #01aaed 0) no-repeat;
            // background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
            background-position: left top, right top, right bottom, left bottom;
            background-color: #fff;
            background-size: 0 1px, 1px 0, 0 1px, 1px 0;

            &:hover {
                cursor: pointer;
                background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
                transition: ease-in .3s;

            }

            .ItemImg {
                height: 100%;
                width: 35%;
                margin-right: 25px;

                img {
                    height: 100%;
                }
            }

            .ItemTitle {
                h2 {
                    padding-bottom: 5px;
                    margin-bottom: 5px;
                    cursor: pointer;
                    font-size: 1.1rem;
                    color: rgba(0, 0, 0, .65);
                }

                .ItemDescription {
                    margin-top: 0.5rem;
                    min-height: 3.5rem;
                    color: rgba(0, 0, 0, .43);
                    cursor: pointer;
                    font-size: .9rem;
                }

                .TitleFooter {
                    font-size: .8rem;
                    color: rgba(0, 0, 0, .65);
                    display: flex;
                    justify-content: start;

                    .FooterItem {
                        padding: 0 5px;
                        margin-right: 5px;
                        text-align: center;

                        .iconfont {
                            margin: 5px;
                            text-align: center;
                            vertical-align: middle;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

    &-right {
        position: sticky;
        top: -632.3px;
        width: 25%;

        .HotArticleModule {
            @include el-card;
            min-height: 275px;
            background-color: #fff;
            margin-top: 1rem;
            padding: 1rem;
            padding-right: 0.5rem;
            color: rgba(0, 0, 0, .65);
            position: relative;
            overflow: hidden;

            .TagListHead {
                padding: 0 0 0.5rem;
                border-bottom: 1px solid #01aaed;
                margin-bottom: 0.4rem;
                margin-right: 0.5rem;
                color: #01aaed;
                font-size: 14px;
            }

            ;

            .HotArticle {
                font-size: 14px;
                margin-top: 0.2rem;
                padding: 0.2rem;
                padding-right: 0.5rem;
                cursor: pointer;
                color: rgba(0, 0, 0, .65);
                position: relative;

                .HotArticleItem {
                    margin: 0.2rem 0rem;
                    padding: 0.5rem 0rem;
                }
            }
        }

        .AuthorMoudle {
            @include el-card;
            min-height: 320px;
            background-color: #fff;
            margin-top: 1rem;
            color: rgba(0, 0, 0, .65);
            position: relative;

            .backimg {
                background-image: url(@/assets/images/background.jpg);
                height: 8rem;
                background-size: 100% 110px;
                background-repeat: no-repeat;
                background-color: #fff;
            }

            .HeadPortrait {
                width: 6rem;
                height: 6rem;
                border-radius: 100%;
                border: 5px solid hsla(0, 0%, 100%, .5);
                margin: 0 auto;
                margin-top: -4.5rem;
                z-index: 100;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }

            .AuthorCenter {
                text-align: center;
                margin: 1.5rem;
                font-size: 14px;
                color: rgba(0, 0, 0, .65);

                .NButton {
                    color: #fff;
                    width: 8rem;
                    margin: 0.8rem auto;
                    border-radius: 0.3rem;
                    padding: 0.5rem;
                    text-align: center;
                    display: block;
                    text-decoration: none;
                    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
                    background-size: 400%;

                    &:hover {
                        animation: ColorMove 8s linear infinite;
                    }
                }
            }

            .BlogStatistic {
                display: flex;
                align-items: center;
                color: #5e5e5e;
                padding: 1.5rem 0 1rem;
                border-top: 1px solid #e9e9e9;

                .BlogStatisticItem {
                    flex: 1;
                    text-align: center;

                    .BlogStatisticItemNum {
                        margin-bottom: 0.5rem;
                        font-size: 1.2rem;
                    }

                    .BlogStatisticItemText {
                        font-size: .8rem;
                    }
                }
            }
        }

        .ArticleType {
            @include el-card;
            @include Moudle;
            min-height: 250px;

            .TypeListHead {
                font-size: 14px;
                padding: 0 0 0.5rem;
                border-bottom: 1px solid #01aaed;
                margin-bottom: 0.5rem;
                margin-right: 0.5rem;
                color: #01aaed;

                span {
                    color: rgb(170, 170, 170);
                    font-size: 0.8rem;
                    margin-left: .5rem;
                }
            }

            .TypeListTr {
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                .TagListTd {
                    font-size: 14px;
                    padding: 0.5rem 0;
                    border: 1px solid #01aaed;
                    margin-bottom: 0.5rem;
                    flex: 1;
                    min-width: 40%;
                    margin-right: 0.5rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all .3s;

                    &:hover {
                        transform: scale(.9);
                    }
                }
            }
        }

    }
}</style>