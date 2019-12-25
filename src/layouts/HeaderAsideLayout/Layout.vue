<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <nav-bar />
      <app-main v-loading="publicLoading" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { NavBar, SideBar } from './components'
export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
  },
  computed: {
    ...mapState({
      publicLoading: (state) => state.publicLoading,
    }),
  },
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  margin-left: 256px;
  background-color: #f0f2f5;
}
</style>
