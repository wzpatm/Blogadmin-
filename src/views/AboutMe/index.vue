<template>
    <div class="AboutMe">
        <div class="About-left">
            <div class="description">
                <h2 class="panel-title">关于我 <span class="emoji">👨‍💻</span> </h2>
                <div class="introduction_box">
                    <div class="photo"><img src="@/assets/images/photo.jpg" alt="照片"></div>
                    <div class="introduce">
                        <p><strong
                                class="cr8">王志鹏</strong>，2023届，本科，就读于<strong>'邵阳学院'</strong>，专业<strong>'计算机网络技术与应用'</strong>
                        </p>
                        <p>本人性格开朗，乐观向上，有较好的团队协作能力。</p>
                        <p> 工作态度端正、认真负责、做事细心并有耐心。适应能力强，抗压能力强。 </p>
                        <p>平时关注“稀土掘金”、“CSDN”之类的相关资料对自己进行技术上提升。</p>
                    </div>
                </div>
                <h2 class="panel-title">工作经历 <span class="emoji">🏢</span> </h2>
                <ul class="el-timeline">
                    <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node"></div>
                        <div class="el-timeline-item__wrapper">
                            <div class="time">
                                2022/6-2022/10
                            </div>
                            <div class="el-card">
                                <h4>亚信科技(中国)有限公司&nbsp;&nbsp;&nbsp;&nbsp;前端开发(实习)</h4>
                                <p>工作描述：</p>
                                <p>1.完成页面样式布局，与后端合作，完成前后端数据交互；</p>
                                <p>2.与产品商议，确定需求，从而达到友好的用户体验</p>
                                <p>3.团队讨论具体功能细节问题，与其他技术人员沟通制定升级规范</p>
                            </div>
                        </div>
                    </li>

                </ul>
                <h2 class="panel-title">项目经验 <span class="emoji">💻</span> </h2>
                <ul class="el-timeline">
                    <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node"></div>
                        <div class="el-timeline-item__wrapper">
                            <div class="time">
                                2021/10-2022/01
                            </div>
                            <div class="el-card">
                                <h4>货满满超市平台&nbsp;&nbsp;&nbsp;&nbsp;前端开发</h4>
                                <p> <strong>技术栈</strong>: </p>
                                <p>Vue2 vuex vue-router axios  sass   Element UI  swiper mock</p>
                                <p> <strong>技术实现</strong>: </p>
                                <p>1.使用vue2+html+sass完成项目的基本搭建；</p>
                                <p>2.重写路由push和replace方法，解决多次点击同一路由报错问题；</p>
                                <p>3.使用$nextTick,watch解决Swiper轮播图动态数据首次加载问题；</p>
                                <p>4.设置了全局前置守卫和路由独享守卫以及组件内守卫进行路由跳转的一些限制；</p>
                                <p>5.使用vuex管理共享状态数据，使用LocalStorage对token进行存储。</p>
                                <p>6.使用图片懒加载和路由懒加载提升用户体验和项目优化。</p>
                            </div>
                        </div>
                    </li>
                    <li class="el-timeline-item">
                        <div class="el-timeline-item__tail"></div>
                        <div class="el-timeline-item__node"></div>
                        <div class="el-timeline-item__wrapper">
                            <div class="time">
                                2022/02-2022/04
                            </div>
                            <div class="el-card">
                                <h4>关爱空巢老人后台管理系统&nbsp;&nbsp;&nbsp;&nbsp;前端开发</h4>
                                <p> <strong>技术栈</strong>: </p>
                                <p>Vue2 vuex vue-router axios  sass   Element UI  </p>
                                <p><strong> 技术实现</strong> ：</p>
                                <p>1.使用vue2+element-UI完成项目的基本搭建；</p>
                                <p>2.对axios进行封装，利用axios请求拦截器和响应拦截器，根据响应结果提示不同的报错；</p>
                                <p>3.根据用户登录数据，传给后端，返回数据处理，经过路由守卫实现侧边导航数据的不同；</p>
                                <p>4.用keep-alive来缓存组建，减少发送请求，提高代码性能；</p>
                                <p>5.在二次封装的axios中利用请求拦截器的config添加Token，解决http无状态的问题；</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <div class="About-right">
            <div class="About-ability_box">
                <div class="About-ability">
                    <h3>本人技术栈</h3>
                    <div class="divider"></div>
                    <div class="synopsis">
                        <p><strong>熟悉</strong>:</p>
                        <div class="technology">
                            <span>HTML5</span>
                            <span>CSS3</span><span>Javascript</span><span>ES6</span><span>Vue2</span><span>Vue3</span>
                            <span>Axios</span><span>Element UI</span> <span>Sass</span> <span>Less</span>
                        </div>
                        <p><strong>了解</strong>:</p>
                        <div class="technology">
                            <span>Node.js</span>
                            <span>Express</span><span>MongonDB</span><span>TypeScript</span><span>Webpack</span>
                            <span>React</span> <span>UniApp</span>

                        </div>
                    </div>
                    <div class="divider-dotted"></div>
                    <div class="information">
                        <div class="information_item">
                            <div class="item_number">39</div>
                            <div class="item_word">文章</div>
                        </div>
                        <div class="information_item">
                            <div class="item_number">39</div>
                            <div class="item_word">留言</div>
                        </div>
                        <div class="information_item">
                            <div class="item_number">39</div>
                            <div class="item_word">评论</div>
                        </div>
                    </div>
                    <div class="divider-dotted"></div>
                    <div class="information">
                        <div class="information_item">
                            <div class="item_icon"><i class="iconfont weixin">&#xe637;</i></div>
                            <div class="item_word">Fortune_wzp</div>
                        </div>
                        <div class="information_item">
                            <div class="item_icon "><i class="iconfont QQ">&#xe876;</i></div>
                            <div class="item_word">969872569</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="About-blog_box">
                <div class="About-blog">
                    <h3>关于本站</h3>
                    <div class="divider"></div>
                    <div class="stage">
                        <p> <span class="cr5"> 建站时间：</span>2022.10-2023.1 </p>
                        <p><span class="cr5"> 前端技术：</span></p>
                        <p>开发框架：Vue3</p>
                        <p>脚手架：Vue-cli4x</p>
                        <p>状态管理：Pinia</p>
                        <p>语法扩展：Sass</p>
                        <p>打包工具：Webpack</p>
                        <p><span class="cr5"> 后端技术:</span></p>
                        <p>主语言：JavaScript（Node.js）</p>
                        <p>开发框架：Express</p>
                        <p>数据库：MongonDB</p>
                        <p>文件存储：云服务（宝塔面板）</p>
                        <p> <span class="cr5">本站介绍：</span>本博客纯手工编写，未使用第三方ui组件库。用来记录个人学习中遇到的问题以及解决方法。 </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs,} from 'vue'
export default {
    setup() {
        const state = reactive({
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
strong {
    font-weight: bolder;
}

// p {
//     color: #8f9093;
//     margin: 5px;
// }

.AboutMe {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 1rem;

    .About-left {
        width: 68%;
        height: 100%;
        background-color: #ffff;
        border-radius: 4px;
        box-shadow: 0 0 8px #cdd0d5;

        .description {
            padding: 20px;
            color: #303133;
            width: 100%;
            height: 100%;
            box-sizing: border-box;

            .panel-title {
                margin-bottom: 20px;
                font-size: 18px;
                font-weight: 600;
            }

            .introduction_box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 30px;
                border-bottom: 1px solid;
                margin-bottom: 10px;

                .photo {
                    width: 12%;

                    img {
                        width: 100%;
                    }
                }

                .introduce {
                    width: 80%;
                    color: #888;
                    line-height: 30px;

                    strong {
                        font-weight: bolder;
                    }

                    .cr8 {
                        color: #27afb6;
                        ;

                    }
                }
            }

            .el-timeline {
                width: 100%;
                position: relative;
                padding-bottom: 20px;
                border-bottom: 1px solid;
                margin-bottom: 10px;

                .el-timeline-item {
                    position: relative;
                    padding-bottom: 20px;

                    .el-timeline-item__tail {
                        position: absolute;
                        left: 4px;
                        height: 100%;
                        border-left: 2px solid #e4e7ed;
                    }

                    .el-timeline-item__node {
                        position: absolute;
                        width: 12px;
                        height: 12px;
                        left: -0.5px;
                        background-color: #e4e7ed;
                        border-radius: 50%;
                    }

                    .el-timeline-item__wrapper {
                        position: relative;
                        padding-left: 28px;
                        font-size: 13px;
                        top: -3px;
                        color: #909399;

                        .time {
                            margin-bottom: 8px;
                            padding-top: 4px;
                        }

                        .el-card {
                            width: 740px;
                            padding: 20px;
                            border-radius: 4px;
                            border: 1px solid #e4e7ed;
                            box-shadow: 0px 0px 5px #cdd0d5;
                            color: #303133;

                            h4 {
                                font-size: 14px;

                                strong {
                                    font-weight: bolder;
                                }
                            }

                        }
                    }
                }
            }
        }

    }

    .About-right {
        width: 31%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .About-ability_box {
            width: 100%;
            margin-bottom: 10px;
            background-color: #ffff;
            box-shadow: 0 0 8px #cdd0d5;
            border-radius: 4px;

            .About-ability {
                padding: 18px;
                height: 100%;

                strong {
                    font-weight: bolder;
                }

                h3 {
                    color: #409eff;
                }

                .divider {
                    height: 1px;
                    margin: 10px 0;
                    border-top: 1px solid #6d6e6f;
                }

                .synopsis {
                    padding: 5px;

                    P {
                        margin: 3px 0px;
                    }

                    .technology {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;

                        span {
                            background-color: rgb(243, 244, 244);
                            text-align: center;
                            color: #79bbff;
                            padding: 2px;
                            margin: 5px;
                        }
                    }
                }

                .divider-dotted {
                    height: 1px;
                    margin: 5px 0;
                    border-top: 1px dashed;
                }

                .information {
                    display: flex;
                    margin: 15px;

                    .information_item {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        font-size: 17px;
                        color: #909399;

                        .item_number {
                            margin-bottom: 5px;
                        }

                        .item_icon {
                            .weixin {
                                font-size: 32px;
                                color: rgb(0, 200, 0);
                            }

                            .QQ {
                                font-size: 32px;
                                color: rgb(123, 212, 239)
                            }
                        }
                    }
                }
            }
        }

        .About-blog_box {
            width: 100%;
            margin-top: 10px;
            background-color: #ffff;
            box-shadow: 0 0 8px #cdd0d5;
            border-radius: 4px;

            .About-blog {
                padding: 20px;

                h3 {
                    color: #409eff;
                }

                .divider {
                    height: 1px;
                    margin: 10px 0;
                    border-top: 1px solid #6d6e6f;
                }

                .stage {
                    padding: 5px;
                    color: #909399;

                    p {
                        margin: 5px;
                        color: #909399;
                    }

                    .cr5 {
                        color: #409eff;
                    }
                }
            }

        }
    }
}
</style>