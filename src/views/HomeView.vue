<template>
    <FilterNav @filterBy="current=$event" :current="current"></FilterNav>

    <div class="h-[500px] overflow-auto">
      <!-- check the data and give feedback -->
      <div v-if="projects.length==0">
        <h1 class="text-center font-[900] uppercase tracking-wide text-3xl text-gray-400">Create Project</h1>
      </div>

      <div v-for="project in filteredProjects" :key="project.id" class="bg-gray-200 my-2 px-5 py-10 rounded-lg border-l-6 border-red-400 " :class="{green:project.complete}">
        <SingleProject :project="project" @updateComplete="updateComplete" @deleteProject="deleteProject"></SingleProject>
      </div>
    </div>
</template>

<script>

import FilterNav from '../components/FilterNav'
import SingleProject from '../components/SingleProject.vue'
export default {
  components: {
    FilterNav,
    SingleProject,
    
  },
  data(){
    return {
      projects :[],
      current:'all' // to filter projects
    }
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
    updateComplete(id){ // update method for local
      let updateProject=this.projects.find(project=>{
        return project.id === id;
      })
      updateProject.complete=!updateProject.complete
    },
    deleteProject(id){ // delete method for local
      this.projects=this.projects.filter(project=>{
        return project.id !== id;
      })
    }
  },
  computed:{ // use computed property because this one write as a function but can use as a data
    filteredProjects(){ // to filter projects 
      return this.projects.filter(project=>{
        if(this.current==="complete"){
        return project.complete;
       }
        if(this.current==="ongoing"){
          return !project.complete
        }
        return this.projects
      })
    }
  }
}
</script>
<style>
  .green{
    border-left-color: lightgreen;
  }
</style>