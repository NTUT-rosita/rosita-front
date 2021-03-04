<template>
  <NavBar class="fixed"/>
  <main id="affairs-info" class="page-container">
    <div class="mt-14 lg:mt-20">
      <p
          class="
          text-black
          dark:text-white
          text-sm
          sm:text-lg
          md:text-xl
          lg:text-2xl
          2xl:text-3xl
          text-center
          select-none">
        選取資訊面向
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from "@/components/app/Navbar/NavBar.vue";
import '@/assets/scss/pages/affairs-info.scss'

export default defineComponent({
  name: "AffairsInfo",
  components: {
    NavBar
  }
})
</script>

