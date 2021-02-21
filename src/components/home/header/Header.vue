<template>
  <div id="header-container">
    <header class="header relative">
      <div class="header__bg bg-cover bg-center bg-no-repeat"/>
      <NavBar/>
      <span class="absolute max-w-md w-3/4 sm:w-4/6 md:w-1/2 center">
        <LazyImg d-alt="NTUT-badge" d-src="https://i.imgur.com/vYc6cWk.webp" @imgLoaded="showSecondBadge"/>
        <SecondBadge class="opacity-0"/>
      </span>
    </header>
  </div>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent} from 'vue';
import '@/assets/scss/components/home/header.scss'
import SecondBadge from "@/components/home/header/SecondBadge.vue";

export default defineComponent({
  name: "Header",
  components: {
    LazyImg: defineAsyncComponent(() => import('@/components/app/LazyImg.vue')),
    NavBar: defineAsyncComponent(() => import('@/components/app/NavBar.vue')),
    SecondBadge
  },
  setup() {
    const showSecondBadge = () => {
      const secondBadge = document.getElementById('second-badge') as HTMLElement
      secondBadge.classList.add('show')
    }

    return {
      showSecondBadge
    }
  }
})
</script>
