<template>
  <div class="w-3xl p-5">
    <div class="space-x-5 text-2xl font-bold text-gray-400 pb-10 text-center">
      <Navbar />
    </div>
    <RouterView />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
}
</script>

<style scoped></style>
