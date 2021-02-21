<template>
  <nav id="nav-bar" class="sticky -top-px z-10 shadow-sm bg-white select-none opacity-0">123</nav>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: "NavBar",
  setup() {
    onMounted(() => {
      const navBar = document.getElementById('nav-bar') as HTMLElement
      const observer = new IntersectionObserver(
          ([e]) => {
            navBar.classList.toggle("opacity-1", e.intersectionRatio < 1)
          },
          { threshold: [1] }
      );
      observer.observe(navBar);
    })
  }
})
</script>
