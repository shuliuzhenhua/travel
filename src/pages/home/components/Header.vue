<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市 <span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
  /*引入css变量，在样式内部引入样式需要加@符号*/
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height :0.86rem
    background :$bgColor
    color :#ffffff
    .header-left
      float: left
      width: 0.64rem
      .back-icon
        text-align :center
        font-size:0.4rem
    .header-input
      flex: 1
      color :#cccccc
      border-radius :0.1rem
      background #ffffff
      margin-top :0.12rem
      padding-left :0.2rem
      line-height :0.64rem
      height :0.64rem
    .header-right
      float: right
      text-align :center
      width: 1.24rem
      .arrow-icon
        margin-left :-0.04rem
        font-size: 0.24rem
</style>
