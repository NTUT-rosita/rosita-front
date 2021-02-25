<template>
  <nav class="nav-drawer overflow-hidden block sm:hidden">

  </nav>
  <div class="bottom-layer"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/assets/scss/components/app/nav-drawer.scss'
import { navItems } from "@/components/app/Navbar/navbar";

export default defineComponent({
  name: "NavDrawer",
  setup() {
    return {
      navItems
    }
  }
})
</script>
