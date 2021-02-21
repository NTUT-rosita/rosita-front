<template>
  <nav
      class="py-2 px-1.5 sm:py-2.5 sm:px-2 md:py-3 md:px-2.5 xl:py-4.5 xl:px-4 nav-bar fixed z-10 shadow-md bg-white select-none w-full visible transition duration-200 ease-in-out dark:bg-gray-800 dark:text-white">
    <div class="menu relative grid items-center">
      <SecondBadge class="second-badge inline-block w-48 sm:w-52 md:w-56 xl:w-60 2xl:w-72 fill-current"/>
      <div class="item-box inline-block right-0 my-auto absolute self-center justify-center items-center justify-items-center justify-self-center flex flex-nowrap overflow-auto">
        <component :is="item.external?ExternalLink:InnerLink" v-for="(item, key) in navItems" :key="key"
                   :to="item.link" class="self-center justify-center items-center">
          <div class="mx-4 text-base xl:text-2xl">
            {{ item.name }}
          </div>
        </component>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import '@/assets/scss/components/app/nav-var.scss'
import SecondBadge from "@/components/app/SecondBadge.vue";
import ExternalLink from "@/components/app/ExternalLink.vue";
import InnerLink from "@/components/app/InnerLink.vue";

type NavItem = {
  readonly name: string
  readonly link: string
  readonly external?: boolean
}

export default defineComponent({
  name: "NavBar",
  components: {
    SecondBadge,
    ExternalLink,
    InnerLink
  },
  setup() {
    const data = reactive({
      navItems: [
        {
          name: '首頁',
          link: '/',
          external: false
        },
        {
          name: '校務資訊',
          link: '/',
          external: false
        },
        {
          name: '研究',
          link: '/',
          external: false
        },
        {
          name: '各校比較資訊',
          link: '/',
          external: false,
        },
        {
          name: '線上分析工具',
          link: 'https://google.com',
          external: true
        }
      ] as Array<NavItem>
    })

    return {
      InnerLink,
      ExternalLink,
      ...toRefs(data)
    }
  }
})
</script>
