<template>
    <div class="my-scrollbar">
  <TopBar></TopBar>
   <MainContent/>
   <BlogFooter/>
   <CanvansBac></CanvansBac>
   <Airplane/>
   <loading></loading>
</div>
</template>

<script>
 import TopBar from '../TopBar/index.vue'
 import BlogFooter from '../BlogFooter'
 import MainContent from '../MainContent'
 import CanvansBac from "../CanvansBac"
 import Airplane from "../Airplane"
 import Loading  from "../Loading"
export default {
    name:'layout',
    components:{
    TopBar,
    BlogFooter,
    MainContent,
    CanvansBac,
    Airplane,
    Loading
    },
    setup () {
        


        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>