<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style scoped lang="stylus">
  .v-enter, .v-leave-active
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity .5s
</style>
