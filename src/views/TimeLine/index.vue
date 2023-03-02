<template>
        <div class="TimeLineContent">
            <div class="TimeLineBac">
                <div class="clock">
                    <img src="@/assets/images/clock.e82aa6c7.png" alt="时钟">
                </div>
                <div class="needle">
                    <img src="@/assets/images/needle.4784d199.png" alt="针">
                </div>
            </div>
            <div class="Quote">
                <div class="QuoteText">
                    时间轴
                </div>
                <div class="QuoteSummarry">
                    梦每个人都有，但不是每个人都能一步一步的跟着时间往前走
                </div>
                <div class="QuoteSummarry">
                    我是个自律性不好的人，希望能守住初心
                </div>
                <div class="QuoteSummarry">
                    坚持住，往前走
                </div>
                <div class="QuoteSummarry">
                    共勉
                </div>
            </div>
            <div class="TimeLineList">
                <div v-for="(item,index) in TimeLine" :key="index" >
                <div class="TimeLineTr" v-if="index % 2 == 0">
                    <div class="TimeLineTdLeft">
                        <div class="Bubble">
                            <span class="TimeLineTime">{{item.time}}</span>{{item.timeline}}
                        </div>
                    </div>
                    <div class="TimeLineTdCenter"></div>
                    <div class="TimeLineTdRight"></div>
                </div>
                <div class="TimeLineTr" v-if="index % 2 != 0" >
                    <div class="TimeLineTdLeft">
                    </div>
                    <div class="TimeLineTdCenter"></div>
                    <div class="TimeLineTdRight">
                        <div class="Bubble">
                            <span class="TimeLineTime">{{item.time}}</span>{{item.timeline}}
                        </div>
                    </div>
                </div>
            </div>
        
            </div>
        </div>
</template>

<script>
import { reactive, toRefs, } from 'vue'
import { reqTimeLine } from '@/API/index'
export default {
    setup() {
        const state = reactive({
            TimeLine:[]
        })
        reqTimeLine().then((result)=>{
            
            state.TimeLine =result.data
        })    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes needlerotate {
    0% {
        transform: rotate(0deg);
        transform-origin: 9vw 6.2vw;
    }

    100% {
        transform: rotate(1turn);
        transform-origin: 9vw 6.2vw;
    }
}
@keyframes out {
0% {
    opacity: 0;
    -webkit-mask-size: 30%;
}
40% {
    opacity: .6;
    -webkit-mask-size: 60%;
}
100% {
    opacity: 1;
    -webkit-mask-size: 300%;
}
}

.TimeLineContent {
    
    .TimeLineBac {
        width: 100%;
        height: 95vh;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        background: url(@/assets/images/flower.1cf9a990.jpg) no-repeat 50% #cef;
        background-position: 50%;
        background-size: cover;
        animation: out 1.2s ease-in;
        -webkit-mask-image: url(@/assets/images/下载.png);
       -webkit-mask-repeat: no-repeat;
       -webkit-mask-position: center center;
       -webkit-mask-size: 300%;

        .clock {
            position: absolute;
            left: 0;
            top: -8vw;
            z-index: 800;
            width: 35vw;
            height: 39vw;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .needle {
            position: absolute;
            top: -2.4vw;
            left: -0.8vw;
            z-index: 900;
            width: 14.5vw;
            height: 10vw;
            animation: needlerotate 60s linear;
            animation-iteration-count: infinite; //是否循环播放

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    ;

    .Quote {
        position: relative;
        background: transparent;
        z-index: 100;
        margin: auto;
        padding: 9rem 0 0 0;
        width: 80%;
        height: 20%;
        text-align: center;

        .QuoteText {
            margin-bottom: 2rem;
            color: black;
            font-size: 2.2rem;
            font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Tohoma, Arial;
        }

        .QuoteSummarry {
            color: #000;
            font-size: 1rem;
            font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Tohoma, Arial;
            margin-top: 1rem;
        }
    }

    .TimeLineList {
        width: 1200px;
        margin: 18rem 2rem 0;
        min-height: 29rem;
        background-color: #fff;
        padding: 2rem;
     
        .TimeLineTr {
            display: flex;
            align-items: center;
            position: relative;

            .TimeLineTdLeft {
                flex: 1;
                padding-right: 2rem;
                position: relative;

                .Bubble {
                    margin: 1rem 0;
                    position: relative;
                    background-color: #fff;
                    border-radius: 5px;
                    padding: 1rem;
                    border: 1px solid #01aaed;

                    &::before {
                        content: "";
                        border: 8px solid transparent;
                        width: 0;
                        height: 0;
                        display: inline-block;
                        border-left: 8px solid #01aaed;
                        right: -16px;
                        position: absolute;
                        top: 1.3rem;
                    }

                    &::after {
                        content: "";
                        width: 1rem;
                        height: 1rem;
                        display: inline-block;
                        background-color: #01aaed;
                        border-radius: 100%;
                        border: 0.25rem solid #fff;
                        position: absolute;
                        right: -2.9rem;
                        top: 1rem;
                        z-index: 1000;
                    }
                    .TimeLineTime {
                        color: #01aaed;
                        margin-right: 1rem;
                    }
                }
            }

            .TimeLineTdCenter {
                width: 2px;
                background-color: #01aaed;
                height: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 50%;
            }

            .TimeLineTdRight {
                padding-left: 2rem;
                flex: 1;

                .Bubble {
                    margin: 1rem 0;
                    position: relative;
                    background-color: #fff;
                    border-radius: 5px;
                    padding: 1rem;
                    border: 1px solid #01aaed;

                    &::before {
                        content: "";
                        border: 8px solid transparent;
                        width: 0;
                        height: 0;
                        display: inline-block;
                        border-right: 8px solid #01aaed;
                        left: -17px;
                        position: absolute;
                        top: 1.3rem;
                    }

                    &::after {
                        content: "";
                        width: 1rem;
                        height: 1rem;
                        display: inline-block;
                        background-color: #fff;
                        border-radius: 100%;
                        border: 0.2rem solid #01aaed;
                        position: absolute;
                        left: -2.7rem;
                        top: 1rem;
                        z-index: 1000;
                    }

                    .TimeLineTime {
                        color: #01aaed;
                        margin-right: 1rem;
                    }
                }
            }
        }
    }
}
</style>