<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-titile">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe629;</span>{{this.bannerImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallgay :imgs="bannerImgs" v-show="showGallgay" @close="handleGallgayClose"></common-gallgay>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallgay from 'common/gallgay/Gallgay'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallgay: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallgay = true
    },
    handleGallgayClose () {
      this.showGallgay = false
    }
  },
  components: {
    CommonGallgay,
    FadeAnimation
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
      height :4.1rem
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color:#ffffff
      background-image:linear-gradient(top, rgba(0, 0, 0,0),rgba(0,0,0,0.8))
      .banner-titile
        font-size: .32rem
        padding: .2rem
        flex :1
      .banner-number
        height: .4rem
        line-height :.32rem
        margin-top :.2rem
        padding : 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size :.24rem
        .banner-icon
          font-size :.24rem
</style>
