<template>
    <div class="life">
        <div class="lifebac"></div>
        <div class="lifeSummary">
            <div class="title">
                <div class="top"> 我的生活记录</div>
                <div class="down"> 少年没有乌托邦，心向远方自明朗</div>
            </div>
        </div>
        <div class="life-list">
            <div class="life-item">
                <div class="item-img"><img src="@/assets/images/life.webp" alt="生活照片"></div>
                <div class="item-title">
                    记录找工作的日常
                </div>
                <div class="item-title">
                    2022-10-22
                </div>
            </div>
            <div class="life-item">
                <div class="item-img"><img src="@/assets/images/life.webp" alt="生活照片"></div>
                <div class="item-title">
                    记录找工作的日常
                </div>
                <div class="item-title">
                    2022-10-22
                </div>
            </div>
            <div class="life-item">
                <div class="item-img"><img src="@/assets/images/life.webp" alt="生活照片"></div>
                <div class="item-title">
                    记录找工作的日常
                </div>
                <div class="item-title">
                    2022-10-22
                </div>
            </div>
            <div class="life-item">
                <div class="item-img"><img src="@/assets/images/life.webp" alt="生活照片"></div>
                <div class="item-title">
                    记录找工作的日常
                </div>
                <div class="item-title">
                    2022-10-22
                </div>
            </div>
            <div class="life-item">
                <div class="item-img"><img src="@/assets/images/life.webp" alt="生活照片"></div>
                <div class="item-title">
                    记录找工作的日常
                </div>
                <div class="item-title">
                    2022-10-22
                </div>
            </div>
            <div class="life-item">
                <div class="item-img"><img src="@/assets/images/life.webp" alt="生活照片"></div>
                <div class="item-title">
                    记录找工作的日常
                </div>
                <div class="item-title">
                    2022-10-22
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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
.life {
    .lifebac {
        width: 100%;
        height: 27rem;
        position: absolute;
        background: url('@/assets/images/life3.webp') no-repeat;
        background-position: center;
        background-size: 100%, 100%;
        left: 0;
        right: 0;
        z-index: 0;
        animation: out 1s ease-in;
        // display: block;
        // visibility: visible;
       -webkit-mask-image: url(@/assets/images/下载.png);
       -webkit-mask-repeat: no-repeat;
       -webkit-mask-position: center center;
       -webkit-mask-size: 300%;

    }

    .lifeSummary {
        position: relative;
        width: 100%;
        text-align: center;
        height: 27rem;
        z-index: 100;
        display: flex;
        justify-content: center;

        .title {
            height: 180px;
            color: rgb(255, 255, 255);
            font-size: 30px;
            font-style: normal;
            font-weight: 200;
            padding: 80px 20px 50px 20px;

            .down {
                margin-top: 40px;
                cursor: pointer;

                &:hover {
                    transform: scale(1.05);
                    transition: all .3s;

                }
            }
        }
    }

    .life-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        justify-content: center;

        // align-items: center;
        .life-item {
            margin: 0.5rem;
            background-color: #fff;
            min-width: 23%;
            cursor: pointer;
            height: 300px;

            &:hover {
                transform: scale(.95);
                transition: all .3s;
            }

            .item-img {
                height: 190px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .item-title {
                height: 1.5rem;
                line-height: 1.5rem;
                font-size: 1.1rem;
                padding: 1.2rem 1rem 0rem 1rem;
            }
        }
    }
}
</style>