<template>
  <div id="header-container">
    <header class="header relative">
      <div class="header__bg bg-cover bg-center bg-no-repeat bg-fixed"/>
      <span class="absolute max-w-md w-3/4 sm:w-4/6 md:w-1/2 center">
        <img alt="NTUT-Badge" src="https://i.imgur.com/vYc6cWk.webp">
        <SecondBadge/>
      </span>
    </header>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/scss/components/home/header.scss'
import SecondBadge from "@/components/home/header/SecondBadge.vue";

export default defineComponent({
  name: "Header",
  components: {
    SecondBadge
  }
})
</script>
