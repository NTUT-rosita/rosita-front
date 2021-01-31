<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/image/Rosita.png">
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
