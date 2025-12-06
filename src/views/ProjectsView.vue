<template>
  <div class="w-full max-w-4xl">
    <FilterNav
      @filterBy="currentFilter = $event"
      :currentFilter="currentFilter"
      :projects="projects"
    />
    <div v-if="filterProjects.length === 0" class="text-center text-gray-500 py-10">
      No projects found. Add a new project to get started!
    </div>
    <div v-else>
      <SingleProject
        v-for="project in filterProjects"
        :key="project.id"
        :project="project"
        @updateComplete="updateComplete"
        @deleteProject="deleteProject"
      />
    </div>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'
import SingleProject from '@/components/SingleProject.vue'

export default {
  components: {
    SingleProject,
    FilterNav,
  },
  data() {
    return {
      projects: [],
      currentFilter: 'all',
    }
  },
  methods: {
    updateComplete(id) {
      const findProject = this.projects.find((p) => p.id == id)
      findProject.completed = !findProject.completed
    },
    deleteProject(id) {
      this.projects = this.projects.filter((p) => p.id != id)
    },
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((datas) => (this.projects = datas))
      .catch()
  },
  computed: {
    filterProjects() {
      if (this.currentFilter == 'all') {
        return this.projects
      } else if (this.currentFilter == 'complete') {
        return this.projects.filter((p) => p.completed)
      } else {
        return this.projects.filter((p) => !p.completed)
      }
    },
  },
}
</script>

<style scoped></style>
