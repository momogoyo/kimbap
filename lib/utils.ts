export function formatDate (date: string| number): string {
  const format = new Date(date)

  return format.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}