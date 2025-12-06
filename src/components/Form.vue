<template>
  <!-- Form -->
  <form class="space-y-6">
    <!-- Project Title -->
    <div>
      <label for="title" class="block text-sm font-semibold text-gray-700 mb-2">
        Project Title <span class="text-red-500">*</span>
      </label>
      <input
        id="title"
        type="text"
        placeholder="Enter project title"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
        v-model="title"
      />
    </div>

    <!-- Project Description -->
    <div>
      <label for="detail" class="block text-sm font-semibold text-gray-700 mb-2">
        Project Description
      </label>
      <textarea
        id="detail"
        rows="6"
        placeholder="Describe your project details..."
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400 resize-none"
        v-model="detail"
      ></textarea>
      <p class="mt-1 text-xs text-gray-500">Add any additional details about your project</p>
    </div>

    <!-- Action Buttons -->
    <div class="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
      <button
        type="button"
        class="px-6 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
        @click="$router.push('/')"
      >
        Cancel
      </button>
      <button
        v-if="id"
        type="button"
        class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
        @click="updateProject"
      >
        <span class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          Update Project
        </span>
      </button>
      <button
        v-else
        type="button"
        class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
        @click="createProject"
      >
        <span class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          Create Project
        </span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      type: String || Number,
      default: null,
    },
  },
  data() {
    return {
      title: '',
      detail: '',
      api: 'http://localhost:3000/projects/',
    }
  },
  methods: {
    createProject() {
      fetch(this.api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
          completed: false,
        }),
      }).then(() => this.$router.push({ name: 'projects' }))
    },
    updateProject() {
      fetch(this.api + this.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
        }),
      }).then(() => this.$router.push({ name: 'projects' }))
    },
  },
  mounted() {
    if (this.id) {
      fetch(this.api + this.id)
        .then((res) => res.json())
        .then((data) => {
          ;((this.title = data.title), (this.detail = data.detail))
        })
        .catch((err) => console.log(err))
    }
  },
}
</script>

<style scoped></style>
