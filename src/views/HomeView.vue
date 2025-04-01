<template>
    <div v-for="project in projects" :key="project.id" class="bg-gray-200 my-2 px-5 py-10 rounded-lg border-l-6 border-red-400 " :class="{green:project.complete}">
      <SingleProject :project="project" @updateComplete="updateComplete"></SingleProject>
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
  methods:{
    updateComplete(id){
      let updateProject=this.projects.find(project=>{
        return project.id === id;
      })
      updateProject.complete=!updateProject.complete
    }
  }
}
</script>
<style>
  .green{
    border-left-color: lightgreen;
  }
</style>