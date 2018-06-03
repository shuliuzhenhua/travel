<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperlist" :key="item.id"><img class="swiper-img" :src="item.imgUrl" ></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 定义轮播分页
        pagination: '.swiper-pagination',
        // 配置轮播项是否可以循环
        loop: true
      },
      swiperlist: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
      },{
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b8/a8e8ff02b094c802.jpg_750x200_ddaec8e5.jpg'
      },
      {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/eb/f3d2fa5308fd5f02.jpg_750x200_38b8d6f7.jpg'
      }
      ]
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
  padding-bottom: 26.6%
  background :#cccccc
  .swiper-img
    width: 100%
</style>
