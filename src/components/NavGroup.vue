<template>
  <div class="group">
    <div class="group__title">{{ title }}</div>
    <ul class="group__list">
      <li
        class="group__item"
        v-for="item in items"
        :key="item.text">
        <a
          class="link"
          href="javascript:;"
          rel="noopper"
          target="_blank">
          <span class="link__icon">
            <v-icon
              :name="item.icon"
              scale="0.8">
            </v-icon>
          </span>
          <span class="link__text">{{ item.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import iconMixins from '@/mixins/icon';

export default {
  name: 'NavGroup',
  mixins: [iconMixins],
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .group{
    margin-bottom: 25px;
    &__title{
      padding: 0 10px;
      font-size: 1.3rem;
      color: #9e9e9e;
    }
  }
  .link{
    display: block;
    color: #333;
    padding: 10px;
    &__icon{
      color: #333;
      padding: 0 10px 0 5px;
    }
  }
</style>
