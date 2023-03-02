<template>
     <transition name="fade">
      <div class="Airplane" @click="BackTop()">
        <div class="Item" v-if="Show"><i class="iconfont IconfontSizeAirplane">&#xe614;</i></div>
    </div>
     </transition>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'

export default {
    setup () {
        const state = reactive({
            Show: false,
        });
       const methods = {
        BackTop(){
            let ScrollHeigh = document.documentElement.scrollTop || window.pageYOffset 
          const  Timer = setInterval(function () {
          if(ScrollHeigh < 0){
            clearInterval(Timer);
          }
          ScrollHeigh = ScrollHeigh- 10;
          document.documentElement.scrollTop = ScrollHeigh;
          window.pageYOffset = ScrollHeigh;
        },3);
            
       },
       UpTop(){
      window.onscroll = function () {
        if(document.documentElement.scrollTop > 50){
          state.Show = true;
        }
        if(document.documentElement.scrollTop < 50){
          state.Show = false;
        }
      }
    }
       }
       onMounted(()=>{
        methods.UpTop()
       })
        return {
            ...toRefs(state),
             ...methods
        }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
    /*定义进入开始和离开结束的透明度为0*/
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    /*定义进入结束和离开开始的透明度为1*/
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    /*定义进入和离开过渡状态的透明度变化的时间和变化曲线*/
    transition: opacity 2s;
}
 .Airplane{
            position: fixed;
            right: 0.5rem;
            bottom: 12rem;
            display: inline-block;
            background-color:  hsla(0,0%,100%,.9);
            box-shadow: rgba(0,0,0,0.43) 0px 0px 6px;
            cursor:pointer;
            .Item{
        width: 1.3rem;
        height: 1.3rem;
        margin: 0.5rem;
        border-top: 1px solid  rgba(0,0,0,.43) ;
       
    }

    .IconfontSizeAirplane{
        font-size: 1.3rem;
        color: rgba(0,0,0,.43)
    }
        }
</style>