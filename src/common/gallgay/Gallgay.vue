<template>
  <div class="container" @click="handleGallgayClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallgay-img" :src='item'/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallgay',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        observeParents: true,
        observer: true,
        pagination: 'swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    handleGallgayClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index :99
    position :fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background :#000
    .wrapper
      width: 100%
      height: 0
      padding-bottom :100%
      .gallgay-img
        width: 100%
      .swiper-pagination
        color: #ffffff
        bottom: -1rem
</style>
