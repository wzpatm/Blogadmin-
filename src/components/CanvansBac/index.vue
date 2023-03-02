<template>
    <div class="CanvasBackStyle">
        <vue-particles
        color="#d9d9d9"
      :particleOpacity="0.6"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="20"
      linesColor="#cdcdcd"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.8"
      :linesDistance="200"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>
 .CanvasBackStyle {
      position: fixed;
      z-index: -1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: block;
    }
    .lizi {
    width: 100%;
    height: 100%;
    background-color: rgb(239,239,238);;
  }
</style>