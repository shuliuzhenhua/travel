<template>
  <div id="app">
    <!--把已加载的数据暂时存储在内存中，下次再加载时直接从内存中获取无需再重新加载数据-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
