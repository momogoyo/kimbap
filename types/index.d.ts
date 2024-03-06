export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
  }
}

export type MainNavItem = NavItem

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}