<template>
    <footer class="Footer">
        <div>版权所有 @ 2022 xiaowang.保留所有权利  <span class="RecordNo">暂无 </span></div>
        <div>Base on Node + Vue、 Design by XiaoWang</div>
    </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  .Footer{
            text-align: center;
            background-color:#ffff;
            color: rgba(0,0,0,0.65);
            padding: 2rem 1rem 1.6rem;
            margin-top: 1rem;
        }
        .RecordNo{
            margin-left: 0.8rem;
        }
        .Footer :nth-child(1){
            margin-bottom: 1rem;
        }
</style>