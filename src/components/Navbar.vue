<template>
  <router-link
    :to="{ name: 'projects' }"
    class="relative before:content-[''] before:absolute before:left-0 before:-bottom-[7px] before:h-[2px] before:w-0 before:bg-green-400 transition-all before:duration-500"
    >Projects</router-link
  >
  <router-link
    :to="{ name: 'add-project' }"
    class="relative before:content-[''] before:absolute before:left-0 before:-bottom-[7px] before:h-[2px] before:w-0 before:bg-green-400 transition-all before:duration-500"
    >Add Project</router-link
  >
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-active::before {
  width: 100%;
}
</style>
