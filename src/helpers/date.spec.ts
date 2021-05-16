import { getShortDate } from './date'

describe('getShortDate', () => {
  it('returns correct formatted date', () => {
    const testDate = '2014-08-24 00:00:00'

    const date = getShortDate(testDate)

    expect(date).toBe('24.08')
  })

  it('returns empty string if date has different format', () => {
    const testDate = '2014/08/24'

    const date = getShortDate(testDate)

    expect(date).toBe('')
  })
})
