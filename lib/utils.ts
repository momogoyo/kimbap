import { clsx, ClassValue } from 'clsx'

import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

export function formatDate (date: string| number): string {
  const format = new Date(date)

  return format.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
