<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 引用外部组件
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader
  }
}
</script>

<style>

</style>
