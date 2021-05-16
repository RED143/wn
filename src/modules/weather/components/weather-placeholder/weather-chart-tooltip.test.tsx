import { render } from '@testing-library/react'

import { WeatherPlaceholder } from './weather-placeholder'

describe('WeatherTypeSelector', () => {
  it('render with correct text', () => {
    const { container } = render(<WeatherPlaceholder />)

    expect(container.textContent).toBe('Choose any marker on the map')
  })
})
