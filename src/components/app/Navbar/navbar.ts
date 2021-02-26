export interface NavItem {
  readonly name: string
  readonly link: string
  readonly external?: boolean
}

export const navItems = [
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
