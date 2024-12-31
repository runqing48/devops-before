<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<template>
  <div class="loader-container" v-if="loading">
    <!-- 只有当 loading 为 true 时，显示加载动画 -->
    <div class="loader" v-if="loading"></div>
  </div>
</template>

<style>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  z-index: 9999;
}

.loader {
  color: #ffff;
  width: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: l21 0.5s infinite alternate linear;
}

@keyframes l21 {
  50% {
    box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
  }
  100% {
    box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
  }
}
</style>
