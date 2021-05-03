<template>
  <div
    class="flex items-center block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
    <!--svg here -->
    <span class="flex flex-col">
                    <span>
                        {{ name }}
                    </span>
                    <span class="text-gray-400 text-xs">
                        {{ description }}
                    </span>
                </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuItem',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: '',
      required: true
    }
  }
})
</script>

<style scoped></style>
