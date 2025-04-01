<template>
  <div v-for="project in projects" :key="project.id" class="bg-gray-300 my-2 p-5 rounded-xl ">
    <SingleProject :project="project"></SingleProject>
  </div>
</template>

<script>

import SingleProject from '../components/SingleProject.vue'
export default {
  data(){
    return {
      projects :[]
    }
  },
  components: {
    SingleProject,
    
  },
  mounted(){
    fetch('http://localhost:3000/projects')
    .then((response)=>{
      return response.json()
    })
    .then((datas)=>{
      this.projects=datas
    })
    .catch(err=> {
      console.log(err)
    })
  },
}
</script>
