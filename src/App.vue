<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2">
          <sidebar />
        </div>
        <div class="col-lg-10">
          <top-nav></top-nav>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    Sidebar,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~@/assets/sass/default.scss';

#app {
  background: #f9f9f9;
}
</style>
