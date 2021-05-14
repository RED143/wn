import { ResponsiveLine } from '@nivo/line'
import { styled } from 'linaria/lib/react'

import { generateChartData } from 'src/helpers/chart'
import { useCity } from '@modules/common/city.context'
import { WeatherDataLabelEnum } from '@modules/common/common.types'

interface Props {
  type: WeatherDataLabelEnum
}

export const CityWeatherChart = ({ type }: Props) => {
  const { city } = useCity()

  console.log('calculate')

  const data = generateChartData(city.weatherData).filter(data => {
    if (type === WeatherDataLabelEnum.ALL) {
      return data
    }
    return type === data.id
  })

  return (
    <StyledChart>
      <ResponsiveLine
        margin={{ top: 40, right: 100, bottom: 40, left: 40 }}
        lineWidth={5}
        pointSize={10}
        data={data}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legendOffset: 36,
        }}
        curve="catmullRom"
      />
    </StyledChart>
  )
}

const StyledChart = styled.div`
  height: 400px;
`
