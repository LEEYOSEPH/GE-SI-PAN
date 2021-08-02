<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
</style>
