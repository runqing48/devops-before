<script>
import navigation from "@/components/Navigation/Navigation.vue";

export default {
  name: 'Dash',  // 当前组件的名字
  components: {
    navigation,
    // 注册组件
  }
}
</script>

<template>
  <div>
    <navigation></navigation>
    <!-- 这里是 dash 页面其他的内容 -->
    <h1>welcome dash</h1>
  </div>
</template>

<style scoped>
.test{
  background-color: #c3c3c3;
}
</style>
