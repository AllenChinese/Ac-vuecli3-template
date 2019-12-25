<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
}
</script>
<style lang="scss" scoped>
.app-main {
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>
