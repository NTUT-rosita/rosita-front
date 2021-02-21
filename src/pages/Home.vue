<template>
  <main id="home" class="page-container">
    <Header/>
    <div id="home-content" class="">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <Icon icon="smile"/>
      <br>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import '@/assets/scss/pages/home.scss'
import Header from "@/components/home/header/Header.vue";

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
