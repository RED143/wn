import { useState } from 'react'

import { IconEnum } from '@modules/common/common.types'
import { useCity } from '@modules/common/city.context'
import { Widget } from '@modules/common/components/widget'

import { ChartTypeEnum } from './weather.types'
import { WeatherChart } from './components/weather-chart.tsx'
import { WeahterPlaceholder } from './components/weather-placeholder'
import { WeatherTypeSelector } from './components/weather-type-selector'

export const Weather = () => {
  const { city } = useCity()
  const [type, setType] = useState<ChartTypeEnum>()

  const title = `weather ${city?.place_name || ''}`

  return city.station_id ? (
    <Widget
      title={title}
      iconName={IconEnum.CHART}
      filter={<WeatherTypeSelector selectedType={type} selectType={setType} />}
    >
      <WeatherChart type={type} />
    </Widget>
  ) : (
    <WeahterPlaceholder />
  )
}
