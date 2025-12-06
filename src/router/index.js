import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'
import AddProject from '@/views/AddProject.vue'
import EditProject from '@/views/EditProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/add-project',
      name: 'add-project',
      component: AddProject,
    },
    {
      path: '/edit-project/:id',
      name: 'edit',
      component: EditProject,
      props: true,
    },
  ],
})

export default router
