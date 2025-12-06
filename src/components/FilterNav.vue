<template>
  <div class="flex items-center gap-2 mb-6">
    <!-- All Filter -->
    <button
      type="button"
      class="px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 border-2 border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200 hover:shadow-md"
      @click="filterBy('all')"
      :class="currentFilter == 'all' ? 'bg-blue-200 shadow-md' : ''"
    >
      <span class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        All <span>{{ projects.length }}</span>
      </span>
    </button>

    <!-- Complete Filter -->
    <button
      type="button"
      class="px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 border-2 border-transparent bg-green-100 text-green-700 hover:bg-green-200 hover:shadow-md"
      @click="filterBy('complete')"
      :class="currentFilter == 'complete' ? 'bg-green-200 shadow-md' : ''"
    >
      <span class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        Complete <span>{{ projects.filter((p) => p.completed).length }}</span>
      </span>
    </button>

    <!-- Ongoing Filter -->
    <button
      type="button"
      class="px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 border-2 border-transparent bg-red-100 text-red-700 hover:bg-red-200 hover:shadow-md"
      @click="filterBy('incomplete')"
      :class="currentFilter == 'incomplete' ? 'bg-red-200 shadow-md' : ''"
    >
      <span class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          />
        </svg>
        Ongoing <span>{{ projects.filter((p) => !p.completed).length }}</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentFilter: {
      type: String,
    },
    projects: {
      type: Array,
    },
  },
  methods: {
    filterBy(value) {
      this.$emit('filterBy', value)
    },
  },
}
</script>

<style scoped></style>
