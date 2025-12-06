<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <!-- Header -->
      <div class="mb-6">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Edit Project</h2>
      </div>
      <Form :id="id" />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  components: { Form },
  props: ['id'],
}
</script>

<style></style>
