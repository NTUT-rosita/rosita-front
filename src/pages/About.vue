<template>
  <main id="about" class="page-container">
    <h1>This is an about page</h1>
    <button
        class="inline-block
                px-6 py-1 text-xs mt-2
                font-medium leading-6
                text-center text-white
                uppercase transition
                bg-green-500 rounded
                shadow ripple
                hover:shadow-lg hover:bg-green-600 active:bg-green-700
                focus:outline-none"
    >
      Demo
    </button>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'About',
  setup () {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'))
    })
  }
})
</script>
