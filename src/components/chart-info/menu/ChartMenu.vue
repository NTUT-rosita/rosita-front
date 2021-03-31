<template>
  <div class="
    chart-menu
    w-60
    bg-white
    rounded-2xl
    p-6
    mx-10
    shadow-lg
    border-4
    border-gray-800
    hidden
    lg:block
  ">

    <div class="relative inline-block text-left w-full">
      <div>
        <button type="button"
                class="border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                id="options-menu">
          Charts
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
            </path>
          </svg>
        </button>
      </div>

      <div
        class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div class="py-1 divide-y divide-gray-100" role="menu" aria-orientation="vertical"
             aria-labelledby="options-menu">

          <ChartMenuItem v-for="(item, index) in menuItems" :key="index + item.name" :name="item.name"
                    :description="item.description"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import '@/assets/scss/components/chart-info/menu.scss'
import { menuItems } from '@/components/chart-info/menu/menuItem'
import ChartMenuItem from '@/components/chart-info/menu/ChartMenuItem.vue'

export default defineComponent({
  name: "ChartMenu",
  components: {
    ChartMenuItem
  },
  setup() {
    const data = reactive({
      menuItems
    })

    return {
      ...toRefs(data)
    }
  }
})
</script>
