<template>
  <div class="Home">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import blogHeader from './blogHeader'

export default {
  data () {
    return {}
  },
  components: {
    blogHeader
  }
}
</script>

<style scoped>
</style>
