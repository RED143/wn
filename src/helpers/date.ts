export const getShortDate = (date: string) => {
  const [_, month, day] = date.replace(/\s.+$/, '').split('-')

  return `${day}.${month}`
}
