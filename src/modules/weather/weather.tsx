import { useState } from 'react'

import { IconEnum } from '@modules/common/common.types'
import { useCity } from '@modules/common/city.context'
import { Widget } from '@modules/common/components/widget'

import { ChartTypeEnum } from './weather.types'
import { WeatherChart } from './components/weather-chart.tsx'
import { WeatherPlaceholder } from './components/weather-placeholder'
import { WeatherTypeSelector } from './components/weather-type-selector'

export const Weather = () => {
  const { city } = useCity()
  const [type, setType] = useState<ChartTypeEnum>()

  return city?.station_id ? (
    <Widget
      title={city.place_name}
      iconName={IconEnum.CHART}
      filter={<WeatherTypeSelector selectedType={type} selectType={setType} />}
    >
      <WeatherChart type={type} />
    </Widget>
  ) : (
    <WeatherPlaceholder />
  )
}
