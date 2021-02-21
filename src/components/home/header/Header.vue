<template>
  <div id="header-container">
    <header id="header" class="header relative">
      <NavBar/>
      <div class="header__bg bg-cover bg-center bg-no-repeat"/>
      <span class="absolute max-w-md w-3/4 sm:w-4/6 md:w-1/2 center">
        <LazyImg d-alt="NTUT-badge" d-src="https://i.imgur.com/vYc6cWk.webp" @imgLoaded="showSecondBadge"/>
        <SecondBadge class="opacity-0"/>
      </span>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted, nextTick } from 'vue';
import '@/assets/scss/components/home/header.scss'
import SecondBadge from "@/components/home/header/SecondBadge.vue";
import NavBar from "@/components/app/NavBar.vue";

export default defineComponent({
  name: "Header",
  components: {
    LazyImg: defineAsyncComponent(() => import('@/components/app/LazyImg.vue')),
    NavBar,
    SecondBadge
  },
  setup() {
    const showSecondBadge = () => {
      const secondBadge = document.getElementById('second-badge') as HTMLElement
      secondBadge.classList.add('show')
    }

    const useNavBarObserverService = () => {
      const navBar = document.getElementById('nav-bar') as HTMLElement
      const header = document.getElementById('header') as HTMLElement
      const observer = new IntersectionObserver(
          ([e]) => {
            navBar.classList.toggle("visible", e.intersectionRatio === 0)
            navBar.classList.toggle("invisible", e.intersectionRatio > 0)
          },
          { threshold: [0] }
      );
      observer.observe(header);
    }

    onMounted(async () => {
      await nextTick()
      useNavBarObserverService()
    })

    return {
      showSecondBadge
    }
  }
})
</script>
