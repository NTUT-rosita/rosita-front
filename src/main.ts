import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Icon from "@/plugins/fontAwesome";

const app = createApp(App)

app
  .use(router)
  .component("Icon", Icon)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
