import { ResponsiveLine } from '@nivo/line'
import { styled } from 'linaria/lib/react'

import { ChartTypeEnum } from '@modules/weather/weather.types'
import { generateChartData } from 'src/helpers/chart'
import { useCity } from '@modules/common/city.context'
import { WeatherDataLabelEnum } from '@modules/common/common.types'

import { WeatherChartTooltip } from '../weather-chart-tooltip'
import { useMemo, useState } from 'react'

interface Props {
  type: ChartTypeEnum
}

const legend = [
  {
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 95,
    translateY: 0,
    itemsSpacing: 5,
    itemDirection: 'left-to-right',
    itemWidth: 85,
    itemHeight: 20,
    itemOpacity: 0.75,
    symbolSize: 12,
    symbolShape: 'circle',
    symbolBorderColor: 'rgba(0, 0, 0, .5)',
  },
] as any

const mapTypes = {
  [ChartTypeEnum.PRECIPITATION]: [
    WeatherDataLabelEnum.PRECIPITATION_MM,
    WeatherDataLabelEnum.PRECIPITATION_PROBABILITY,
  ],
  [ChartTypeEnum.TEMP]: [
    WeatherDataLabelEnum.TEMP_MAX,
    WeatherDataLabelEnum.TEMP_MIN,
  ],
}

export const WeatherChart = ({ type }: Props) => {
  const { city } = useCity()

  const data = useMemo(() => generateChartData(city.weatherData), [city])

  const filteredData = data.filter(
    ({ id }) => !type || mapTypes[type].includes(id)
  )

  const getColors = () => {
    switch (type) {
      case ChartTypeEnum.PRECIPITATION:
        return ['#74a9cf', '#a6bddb']
      case ChartTypeEnum.TEMP:
        return ['#fdae61', '#d73027']
      default:
        return ['#74a9cf', '#a6bddb', '#fdae61', '#d73027']
    }
  }

  return (
    <StyledChart>
      <ResponsiveLine
        margin={{ top: 20, right: 130, bottom: 40, left: 40 }}
        colors={getColors()}
        lineWidth={3}
        animate={true}
        data={filteredData}
        legends={legend}
        xScale={{ type: 'point' }}
        pointSize={10}
        pointBorderColor="#f7f7f7"
        enableSlices="x"
        sliceTooltip={WeatherChartTooltip}
        pointBorderWidth={2}
        enableCrosshair={false}
        useMesh={true}
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
  height: 450px;
  border: 1px solid var(--chart-border-color);
  background-color: var(--chart-bg-color);
  border-radius: 6px;
`
