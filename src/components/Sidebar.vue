<template>
  <div class="sidebar position-fixed col-2">
    <div class="logo">
      <img src="../assets/images/logo.jpg">
    </div>
    <div class="nowPage">
      <span class="nowPage__icon">
        <v-icon name="home" scale="0.8"></v-icon>
      </span>
      <span class="nowPage__text">DashBoard</span>
      <span class="nowPage__num">3</span>
    </div>
    <nav-group
      :title="links.title"
      :items="links.items">
    </nav-group>
    <nav-group
      :title="othrFeature.title"
      :items="othrFeature.items">
    </nav-group>
  </div>
</template>

<script>
import iconMixins from '@/mixins/icon';
import NavGroup from '@/components/NavGroup.vue';

export default {
  name: 'Sidebar',
  mixins: [iconMixins],
  data() {
    return {
      links: {
        title: 'Apps',
        items: [
          {
            text: 'Microsoft Todo',
            icon: 'sync',
          },
          {
            text: 'Microsoft Calendar',
            icon: 'sync',
          },
          {
            text: 'Microsoft Outlook',
            icon: 'sync',
          },
        ],
      },
      othrFeature: {
        title: 'Pages',
        items: [
          {
            text: 'Authentication',
            icon: 'sync',
          },
          {
            text: 'Error',
            icon: 'sync',
          },
          {
            text: 'Profile',
            icon: 'sync',
          },
          {
            text: 'FAQ',
            icon: 'sync',
          },
          {
            text: 'Search',
            icon: 'sync',
          },
        ],
      },
    };
  },
  components: {
    NavGroup,
  },
};
</script>

<style lang="scss" scoped>
  .logo{
    max-width: 120px;
    margin: 0 auto;
    padding: 10px 0;
  }
  .sidebar{
    background: #fff;
    bottom: 0;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    @include dc;
    @include box-shadow(5px, 0, 8px, rgba(200,200,200,.3));
    @include respond-to(lg) {
      left: -30%;
      visibility: hidden;
    }
  }
  .nowPage{
    padding: 10px;
    background: #f6f6f6;
    border-radius: 5px;
    margin-bottom: 25px;
    &__icon{
      color: #333;
      padding: 0 10px 0 5px;
    }
    &__text{
      color: #333;
    }
    &__num{
      float: right;
      font-size: 1.2rem;
      color: #fff;
      width: 22px;
      line-height: 22px;
      height: 22px;
      border-radius: 50%;
      text-align: center;
      background: $primary;
    }
  }

</style>
