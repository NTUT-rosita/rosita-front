<template>
  <div id="header-container">
    <header class="header relative">
      <div class="header__bg bg-cover bg-center bg-no-repeat"/>
      <span class="absolute max-w-md w-3/4 sm:w-4/6 md:w-1/2 center">
        <img alt="NTUT-Badge" src="https://i.imgur.com/vYc6cWk.webp">
      </span>
    </header>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/assets/scss/components/home/header.scss'
import {deBounce} from "@/utils/debouncer";

export default defineComponent({
  name: "Header",
  setup() {
    onMounted(() => {
      addEventListener('wheel',
          deBounce(() => {
            console.log(123)
          }, 20)
      )
    })
  }
})
</script>
