<template>
  <div class="px-5 py-8 mb-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
    <div class="flex justify-between items-center">
      <h2
        class="text-xl font-semibold mb-2 capitalize cursor-pointer"
        :class="{ 'line-through text-gray-400': project.completed }"
        @click="showDetail = !showDetail"
      >
        {{ project.title }}
      </h2>
      <div class="flex items-center gap-1">
        <!-- Complete Toggle -->
        <button
          class="rounded-full hover:bg-green-100 transition-colors cursor-pointer p-2"
          :title="project.completed ? 'Mark as incomplete' : 'Mark as complete'"
          @click="updateComplete"
        >
          <svg
            v-if="project.completed"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <!-- Edit Icon -->
        <button
          class="rounded-full hover:bg-blue-100 transition-colors cursor-pointer p-2"
          title="Edit project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
        </button>

        <!-- Delete Icon -->
        <button
          class="rounded-full hover:bg-red-100 transition-colors cursor-pointer p-2"
          title="Delete project"
          @click="deleteProject"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <p
      v-if="showDetail"
      class="text-gray-600 text-sm"
      :class="{ 'line-through text-gray-400': project.completed }"
    >
      {{ project.detail }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      showDetail: false,
      api: 'http://localhost:3000/projects/',
    }
  },
  methods: {
    updateComplete() {
      fetch(this.api + this.project.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !this.project.completed,
        }),
      })
        .then(() => {
          this.$emit('updateComplete', this.project.id)
        })
        .catch((err) => console.log(err))
    },
    deleteProject() {
      fetch(this.api + this.project.id, { method: 'DELETE' })
        .then(() => {
          this.$emit('deleteProject', this.project.id)
        })
        .catch()
    },
  },
}
</script>

<style scoped></style>
