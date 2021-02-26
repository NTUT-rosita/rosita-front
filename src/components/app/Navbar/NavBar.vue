<template>
  <nav
      class="h-12 lg:h-16 px-1.5 sm:px-2 md:px-2.5 xl:px-4 nav-bar fixed z-10 shadow-md bg-white select-none w-full visible transition duration-200 ease-in-out dark:bg-gray-800 dark:text-white">
    <div class="h-full menu relative flex flex-nowrap justify-between">
      <SecondBadge class="my-auto second-badge inline-block w-48 sm:w-52 md:w-56 xl:w-60 2xl:w-72 fill-current self-center"/>
      <NavDrawer/>
      <div
          class="h-full sm:inline-block relative hidden md:w-3/4 lg:w-3/5 xl:w-1/2 ml-8">
        <span class="h-full item-box flex flex-nowrap justify-between relative whitespace-nowrap overflow-auto">
          <NavBarItem v-for="(item, key) in navItems" :key="key"
                      :external="item.external"
                      :link="item.link"
                      :name="item.name"/>
        </span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/assets/scss/components/app/nav-var.scss'
import SecondBadge from "@/components/app/SecondBadge.vue";
import ExternalLink from "@/components/app/links/ExternalLink.vue";
import InnerLink from "@/components/app/links/InnerLink.vue";
import NavDrawer from "@/components/app/Navbar/NavDrawer.vue";
import NavBarItem from "@/components/app/Navbar/NavBarItem.vue";
import { navItems } from "@/components/app/Navbar/navbar";

export default defineComponent({
  name: "NavBar",
  components: {
    SecondBadge,
    NavBarItem,
    NavDrawer
  },
  setup() {
    return {
      navItems,
      InnerLink,
      ExternalLink,
    }
  }
})
</script>
