export const getShortDate = (date: string) => {
  const [_, month, day] = date.replace(/\s.+$/, '')?.split('-') || []

  if (!month || !day) {
    return ''
  }

  return `${day}.${month}`
}
