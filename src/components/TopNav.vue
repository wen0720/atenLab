<template>
  <div class="topNav">
    <div class="d-flex justify-content-between">
       <ul class="common__features">
        <li
          class="common__item"
          v-for="item in commonFeatures"
          :key="item.icon">
            <v-icon
              :name="item"
              scale="1.2">
            </v-icon>
        </li>
      </ul>
      <div class="main">
        <ul class="main__features">
            <li
              class="common__item"
              v-for="item in commonFeatures"
              :key="item.icon">
                <v-icon
                  :name="item"
                  scale="1.2">
                </v-icon>
            </li>
        </ul>
        <div class="main__account">
          <div class="account__info">
            <p class="account__name">古學浩</p>
            <p class="account__status">Avaliable</p>
          </div>
          <div class="account__img">
            <img src="https://fakeimg.pl/80x80/?text=Me">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconMixins from '@/mixins/icon';

export default {
  name: 'TopNav',
  mixins: [iconMixins],
  data() {
    return {
      commonFeatures: ['calendar', 'dollar-sign', 'star'],
    };
  },
};
</script>

<style lang="scss" scoped >
  .topNav{
    margin: 0 -15px;
    padding: 13px 30px;
    background: #fff;
    @include box-shadow(5px, 0, 8px, rgba(200,200,200,.3));
  }
  .common{
    &__item{
      cursor: pointer;
      display: inline-block;
      padding: 10px 7px;
      color: #ccc;
    }
  }
  .main{
    display: flex;
    align-items: center;
  }
  .account{
    &__info{
      padding: 0 10px;
      display: inline-block;
      vertical-align: middle;
      text-align: right;
      line-height: 1.2;
      letter-spacing: 1px;
    }
    &__name{
      color: #717171;
      font-size: 2rem;
    }
    &__status{
      color: #ddd;
      font-size: 1.3rem;
    }
    &__img{
      display: inline-block;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;
      vertical-align: middle;
    }
  }
</style>
