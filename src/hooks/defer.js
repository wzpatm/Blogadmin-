import { ref } from 'vue'
 export function useDefer (maxFrameCount = 1000) {
    const frameCount = ref(0)
    const refreshFrameCount = ()=>{
        Window.requestAnimationFrame(()=>{//每一次页面渲染之前执行的函数
            frameCount.value++;
            if(frameCount.value<maxFrameCount){
                refreshFrameCount()
            }
        })
    }
    refreshFrameCount()
    return function(showInFrameCount){
        return frameCount.value>=showInFrameCount
    }
 }