import React, { useState } from 'react'

import { useCity } from '@modules/common/city.context'
import { WeatherDataLabelEnum } from '@modules/common/common.types'
import { Widget } from '@components/widget'

import { CityWeatherTypeSelector } from './components/city-weather-type-selector'
import { CityWeatherChart } from './components/city-weather-chart.tsx'

export const CityWeather = () => {
  const { city } = useCity()
  // TODO Add placeholder if there insn't a city
  const [type, setType] = useState(WeatherDataLabelEnum.ALL)

  React.useEffect(() => {
    setType(WeatherDataLabelEnum.ALL)
  }, [city])

  const title = `weather ${city?.place_name || ''}`

  return (
    <Widget title={title}>
      <CityWeatherTypeSelector selectedType={type} selectType={setType} />
      <CityWeatherChart type={type} />
    </Widget>
  )
}
