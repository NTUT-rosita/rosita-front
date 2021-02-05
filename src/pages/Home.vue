<template>
  <main id="home" class="page-container">
    <Header/>
  </main>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/assets/scss/pages/home.scss'
import Header from "@/components/home/Header.vue";

export default defineComponent({
  name: 'Home',
  components: {
    Header
  },
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
