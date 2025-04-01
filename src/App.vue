<template>
  <nav class="text-center mb-10">
    <router-link to="/">Projects</router-link>
    <router-link :to="{name:'addProject'}">Add Project</router-link>
  </nav>
  <router-view/>
</template>
<script>
export default {
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 100px auto;
  max-width: 500px;

}

nav a {
  font-weight: bold;
  font-size: 25px;
  color: #888989;
  text-transform: uppercase;
  margin-left: 20px;
}

nav a.router-link-exact-active {
  color: #42b983 ;
}
</style>
