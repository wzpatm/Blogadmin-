<template>
    <div>
        <v-md-editor v-model="text" height="400px"></v-md-editor>
        <v-md-preview-html :html="html" preview-class="vuepress-markdown-body"></v-md-preview-html>
        <!-- <div>{{text}}</div> -->
        <v-md-preview :text="text"></v-md-preview>
        <button @click="submit()">提交</button>
    </div>
   
</template>

<script setup>
import {reactive,getCurrentInstance,ref,computed } from 'vue'
import {postBlogDetail} from '@/API'
import 'mavon-editor/dist/css/index.css'
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';
const text =ref('')
const html =  ref('')
 
//     console.log(text.value)
// console.log(text.value);
const {proxy}= getCurrentInstance();
const data =reactive( {
    avatar:'图片路径',
     title:'文章标题',
     descript:'简介',
     type:'测试',
     time:proxy.$getNewTime(),
     content:''
})
const submit = (()=>{
    html.value = xss.process(VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(text.value));
    data.content = text.value
    console.log(data);
    console.log(html.value);
    postBlogDetail(data).then((res)=>{
    console.log(res.data);
})
})


console.log(proxy.$getNewTime());

</script>

<style lang="scss" scoped>

</style>