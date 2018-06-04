<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" ></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 定义轮播分页
        pagination: '.swiper-pagination',
        // 配置轮播项是否可以循环
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped lang="stylus">
  /*样式穿透*/
.wrapper >>> .swiper-pagination-bullet-active
  background :#ffffff !important
.wrapper
  overflow :hidden
  width: 100%
  height: 0
  padding-bottom: 31%
  background :#cccccc
  .swiper-img
    width: 100%
</style>
