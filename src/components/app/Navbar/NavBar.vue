<template>
  <nav
      class="py-2 px-1.5 sm:py-2.5 sm:px-2 md:py-3 md:px-2.5 xl:py-4.5 xl:px-4 nav-bar fixed z-10 shadow-md bg-white select-none w-full visible transition duration-200 ease-in-out dark:bg-gray-800 dark:text-white">
    <div class="menu relative flex flex-nowrap justify-between">
      <SecondBadge class="second-badge inline-block w-48 sm:w-52 md:w-56 xl:w-60 2xl:w-72 fill-current self-center"/>
      <div
          class="sm:inline-block my-auto relative hidden md:w-3/4 lg:w-3/5 xl:w-1/2 ml-8">
        <span class="item-box flex flex-nowrap justify-between relative whitespace-nowrap overflow-auto">
          <component :is="item.external?ExternalLink:InnerLink" v-for="(item, key) in navItems" :key="key"
                     :to="item.link" class="self-center justify-center items-center">
            <div class="mx-2 text-base sm:text-sm lg:text-lg xl:text-xl">
              {{ item.name }}
            </div>
          </component>
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
import { navItems } from "@/components/app/Navbar/navbar";

export default defineComponent({
  name: "NavBar",
  components: {
    SecondBadge,
    ExternalLink,
    InnerLink
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
