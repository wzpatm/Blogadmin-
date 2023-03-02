import { watch, computed } from 'vue'
import { LoadingStore } from "@/store/Loading";
export default function ScreenLoading (Loading){
const LoadStore =  LoadingStore()
//  console.log(loading.value);
const pageInit = computed(() => {
    return LoadStore.pageInit
})
const ajaxCount = computed(() => {
    return LoadStore.ajaxCount
})
watch(ajaxCount, (count) => {
    if (count > 0 && pageInit && Loading.value === false) {
        Loading.value = true
    }
    if (count === 0) {
        Loading.value = false
        LoadStore.$patch({ pageInit: false })
    }
})//骨架屏和加载中页面逻辑
  return   Loading
}