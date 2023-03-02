<template>
      <!-- 提示弹层 -->
      <transition name="Fade" mode="out-in">
    <div class="tips" v-show="Tips.Show">
        <div class="tipContent">{{Tips.Title}}</div>
    </div>
    </transition>
</template>

<script setup>
import {reactive} from 'vue';

</script>

<style lang="scss" scoped>
 .tips {
        position: fixed;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        text-align: center;
        color:#ffff;
        height: 3rem;
        line-height: 3rem;
        display: inline-block;
        text-align: center;
        .tipContent{
        display: inline-block;
        background-color: rgba(0,0,0,0.6);
        padding: 0 1rem;
    }
    }

</style>