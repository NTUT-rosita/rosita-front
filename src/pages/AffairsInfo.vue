<template>
  <NavBar class="fixed"/>
  <main id="affairs-info" class="page-container">
    <div class="mt-14 lg:mt-20">
      <p
          class="
          text-black
          dark:text-white
          text-sm
          sm:text-lg
          md:text-xl
          lg:text-2xl
          2xl:text-3xl
          text-center
          select-none py-3">
        選取資訊面向
      </p>
      <div class="p-4 flex flex-wrap justify-evenly">
        <MenuCard v-for="(menuCardContent, i) of menuCardContents" :key="i"
                  :img-url="menuCardContent.imgUrl"
                  :link="menuCardContent.link"
                  :title="menuCardContent.title"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import NavBar from "@/components/app/Navbar/NavBar.vue";
import '@/assets/scss/pages/affairs-info.scss'
import MenuCard from "@/components/affairs-info/MenuCard.vue";
import { MenuCardContent } from "@/components/affairs-info/menuCard";

export default defineComponent({
  name: "AffairsInfo",
  components: {
    NavBar,
    MenuCard
  },
  setup() {
    const data = reactive({
      menuCardContents: [
        {
          title: '學生面',
          imgUrl: 'https://i.imgur.com/71nGLRO.webp',
          link: '/'
        },
        {
          title: '學務面',
          imgUrl: 'https://i.imgur.com/XAyS905.webp',
          link: '/'
        },
        {
          title: '教務面',
          imgUrl: 'https://i.imgur.com/FPlTyg6.webp',
          link: '/'
        }
      ] as Array<MenuCardContent>
    })

    return {
      ...toRefs(data)
    }
  }
})
</script>

