<template>
  <nav class="py-2 px-1.5 sm:py-2.5 sm:px-2 md:py-3 md:px-2.5 xl:py-4.5 xl:px-4 nav-bar fixed z-10 shadow-md bg-white select-none w-full visible transition duration-200 ease-in-out dark:bg-gray-800 dark:text-white">
    <SecondBadge class="w-36 sm:w-40 md:w-48 xl:w-60 2xl:w-72 fill-current"/>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SecondBadge from "@/components/app/SecondBadge.vue";

export default defineComponent({
  name: "NavBar",
  components:{
    SecondBadge
  }
})
</script>
