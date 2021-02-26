<template>
  <div id="nav" class="nav align-baseline my-auto sm:hidden flex justify-center overflow-hidden" role="navigation">
    <a aria-controls="menu" aria-expanded="false"
       class="nav__toggle
       text-black dark:text-white
       inline-block relative p-0 border-0 bg-transparent outline-none cursor-pointer rounded-full
       dark:hover:bg-gray-900 hover:bg-gray-200 dark:focus:bg-gray-900 focus:bg-gray-200"
       rel="noreferrer noopener" role="button">
      <svg class="menu-icon fill-current block cursor-pointer rotate-0" height="50" viewBox="0 0 50 50" width="50"
           xmlns="http://www.w3.org/2000/svg">
        <g>
          <line class="menu-icon__bar stroke-current rotate-0" x1="13" x2="37" y1="16.5" y2="16.5"/>
          <line class="menu-icon__bar stroke-current rotate-0" x1="13" x2="37" y1="24.5" y2="24.5"/>
          <line class="menu-icon__bar stroke-current rotate-0" x1="13" x2="37" y1="24.5" y2="24.5"/>
          <line class="menu-icon__bar stroke-current rotate-0" x1="13" x2="37" y1="32.5" y2="32.5"/>
          <circle class="menu-icon__circle stroke-current" cx="25" cy="25" r="23"/>
        </g>
        _
      </svg>
    </a>
    <ul id="menu" class="nav__menu p-0 fixed flex flex-col justify-start h-auto right-0 top-32 invisible m-0 list-none"
        hidden tabindex="-1">
      <li class="nav__item opacity-0">
        <NavDrawerItem v-for="(navItem, key) in navItems" :key="key"
                       :external="navItem.external"
                       :link="navItem.link"
                       :name="navItem.name"/>
      </li>
    </ul>
    <div class="splash fixed right-0 top-0 h-px w-0">
      <div class="drawer bg-white dark:bg-gray-800 block fixed w-0 top-0 h-0 right-0">
        <div class="logo top-16 left-24 relative inline-block m-auto mx-4">
          <SecondBadge class="fill-current"/>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-layer fixed top-0 left-0 invisible"/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import '@/assets/scss/components/app/nav-drawer.scss'
import { navItems } from "@/components/app/Navbar/navbar";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import SecondBadge from "@/components/app/SecondBadge.vue";
import NavDrawerItem from "@/components/app/Navbar/NavDrawerItem.vue";

export default defineComponent({
  name: "NavDrawer",
  components: {
    SecondBadge,
    NavDrawerItem
  },
  setup() {
    onMounted(() => {
      const nav = document.querySelector('#nav') as HTMLElement;
      const menu = document.querySelector('#menu') as HTMLUListElement;
      const menuToggle = document.querySelector('.nav__toggle') as HTMLLinkElement;
      const bottomLayer = document.querySelector('.bottom-layer') as HTMLDivElement;
      let isMenuOpen = false;

      const toggleNavigationDrawer = () => {
        isMenuOpen = !isMenuOpen;
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
        menu.hidden = !isMenuOpen;
        nav.classList.toggle('nav--open');
        bottomLayer.classList.toggle('bottom-layer--open');
        isMenuOpen ? disableBodyScroll(bottomLayer) : enableBodyScroll(bottomLayer)
      }

      menuToggle.addEventListener('click', e => {
        e.preventDefault();
        toggleNavigationDrawer()
      });

      bottomLayer.addEventListener('click', e => {
        e.preventDefault();
        isMenuOpen = false;
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
        menu.hidden = !isMenuOpen;
        nav.classList.remove('nav--open');
        bottomLayer.classList.remove('bottom-layer--open');
        enableBodyScroll(bottomLayer)
      });

    })

    return {
      navItems
    }
  }
})
</script>