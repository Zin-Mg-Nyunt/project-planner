<template>
  <div class="w-full max-w-4xl">
    <div v-if="projects.length === 0" class="text-center text-gray-500 py-10">
      No projects found. Add a new project to get started!
    </div>
    <div v-else>
      <SingleProject
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @updateComplete="updateComplete"
      />
    </div>
  </div>
</template>

<script>
import SingleProject from '@/components/SingleProject.vue'

export default {
  components: {
    SingleProject,
  },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    updateComplete(id) {
      const findProject = this.projects.find((p) => p.id == id)
      findProject.completed = !findProject.completed
    },
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((datas) => (this.projects = datas))
      .catch()
  },
}
</script>

<style scoped></style>
