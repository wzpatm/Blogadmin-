<template>
  <div class="Topbar">
    <div class="BarContent">
      <div class="ContentName" @click=routerchange($event)  >
        <span>XiaoWang's Blog</span>
      </div>
      <div class="ContentBar">
        <ul @click="routerchange($event)">
          <li :class="{ 'active': isActive == 1 }">博文</li>
          <li :class="{ 'active': isActive == 5 }">留言</li>
          <li :class="{ 'active': isActive == 2 }">生活</li>
          <li :class="{ 'active': isActive == 3 }">时间轴</li>
          <li :class="{ 'active': isActive == 4 }">关于</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import { reactive, toRefs, watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: "Topbar",
  setup() {
    const state = reactive({
      isActive: 1,
    });
    const router = useRouter();
    console.log(router.currentRoute.value.path);
    const routerchange = (e) => {
      switch (e.target.innerHTML) {
        case "XiaoWang's Blog":
          router.push({
            name: 'blogindex'
          })

          return
        case '博文':
          router.push({
            name: 'blogindex'
          })

          return
        case '关于':
          router.push({
            name: 'aboutme'
          })

          return
        case '时间轴':
          router.push({
            name: 'timeline'
          })
          return
        case '生活':
          router.push({
            name: 'lifestyle'
          })
          return
        case '留言':
          router.push({
            name: 'message'
          })

          return
      }
    };
    watch(() => router.currentRoute.value.path, (newValue, oldValue) => {
      switch (newValue) {
        case '/':
          state.isActive = 1
          return
        case '/lifestyle':
          state.isActive = 2
          return
        case '/aboutme':
          state.isActive = 4
          return
        case '/timeline':
          state.isActive = 3;
          return
        case '/message':
          state.isActive = 5;
          return
      }
    }, { immediate: true })

    return {
      routerchange,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  border-bottom: 2px solid #01aaed;
  color: #01aaed;
}

.Topbar {
  position: sticky;
  top: 0;
  width: 100%;
  height: 62px;
  line-height: 60px;
  background-color: rgba(253, 253, 253, 0.8);
  z-index: 999;

  .BarContent {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .ContentName {
      width: 30%;
      font-size: 1.2rem;
      cursor: pointer;

      span {
        color: rgba(0, 0, 0, .65);
      }
    }

    .ContentBar {
      width: 50%;
      font-size: 1rem;

      ul {
        display: flex;
        justify-content: space-around;

        li {
          padding: 0 30px;
          cursor: pointer;

          &:hover {
            border-bottom: 2px solid #01aaed;
            color: #01aaed;
          }

        }
      }
    }
  }
}
</style>