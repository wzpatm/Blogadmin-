<template>
    <div class="main">
        <div class="mainContent">    
            <router-view v-slot="{ Component }">
                <transition name="fade"  mode="out-in">
            <keep-alive>
              <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"/>
            </keep-alive>
        </transition>
        <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"/>
        </transition>
        </router-view> 
   
           
            

    </div>
    </div>
</template>

<script>
import {ref} from 'vue';
export default {
    name:"MainContent",
    components:{
   
     },
    setup (props) {
    //  let componet = ref(Component)
        return {}
    }
}
</script>

<style lang="scss" scoped>
fade-enter-active,

.fade-enter-from,
.fade-leave-to {
  /*定义进入开始和离开结束的透明度为0*/
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(20px);
}
.fade-enter-to {
  transform: translateX(-20px);
}
.fade-enter-to,
.fade-leave-from {
  /*定义进入结束和离开开始的透明度为1*/
  opacity: 1;
}
.fade-leave-active,.fade-enter-active {
  transition: all 0.2s ease-out;
}
.main{
   
    .mainContent{
        width: 1200px;
        margin: 0 auto; 
    }

}
</style>