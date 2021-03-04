<template>
  <main id="home" class="page-container">
    <Header />
    <div id="home-content" class="">
      <RectangleCard />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import '@/assets/scss/pages/home.scss'
import Header from "@/components/home/header/Header.vue";
import RectangleCard from "@/components/home/content/RectangleCard.vue";

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    RectangleCard
  },
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
