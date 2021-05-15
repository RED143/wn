import { useState } from 'react'

import { useCity } from '@modules/common/city.context'
import { IconEnum, WeatherDataLabelEnum } from '@modules/common/common.types'
import { Widget } from '@modules/common/components/widget'

import { WeatherChart } from './components/weather-chart.tsx'
import { WeahterPlaceholder } from './components/weather-placeholder'
import { WeatherTypeSelector } from './components/weather-type-selector'

export const Weather = () => {
  const { city } = useCity()
  const [type, setType] = useState(WeatherDataLabelEnum.ALL)

  const title = `weather ${city?.place_name || ''}`

  return city.station_id ? (
    <Widget title={title} iconName={IconEnum.CHART}>
      {/* <WeatherTypeSelector selectedType={type} selectType={setType} /> */}
      <WeatherChart type={type} />
    </Widget>
  ) : (
    <WeahterPlaceholder />
  )
}
