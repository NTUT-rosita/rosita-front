import { IconPrefix, IconName } from "@fortawesome/fontawesome-common-types"

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "icons.json" {
  const icons: Array<{
    prefix: IconPrefix,
    name: IconName
  }>
  export default icons
}
