import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'
import {LoadingStore} from "@/store/Loading"
const router = createRouter({
    history: createWebHashHistory(), 
    routes,
    scrollBehavior(to, from, savePosition) {
        return {
            top: 0
        }
    }
})
 router.afterEach((to,from)=>{
        const store = LoadingStore();
        console.log(1111);
        store.$patch({pageInit:true})
        console.log(store.pageInit);
 })
export default router