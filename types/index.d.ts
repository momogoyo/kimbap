export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
  }
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type NavConfig = {
  mainNav: MainNavItem[]
}

export type WorkItem = {
  thumbnail: string
  title: string
  description: string
  date: string
  role: string
}

export type Project = {
  name: string
  items: WorkItem[]
}

export type WorkConfig = {
  onibooks: Project
  wavve: Project
  millie: Project
  springcloud: Project
}
