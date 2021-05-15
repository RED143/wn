import { WeatherData, WeatherDataLabelEnum } from '@modules/common/common.types'
import { getShortDate } from './date'

const getValueInDependsOnType = (
  label: WeatherDataLabelEnum,
  weatherData: WeatherData
) => {
  switch (label) {
    case WeatherDataLabelEnum.TEMP_MAX:
      return weatherData.temperature_max
    case WeatherDataLabelEnum.TEMP_MIN:
      return weatherData.temperature_min
    case WeatherDataLabelEnum.PRECIPITATION_MM:
      return weatherData.precipitation_mm
    case WeatherDataLabelEnum.PRECIPITATION_PROBABILITY:
      return weatherData.precipitation_probability
  }
}

export const generateChartData = (weatherData: WeatherData[]) =>
  weatherData?.reduce(
    (chartData, weatherData) => {
      const filledData = chartData.map(chart => {
        const shortDate = getShortDate(weatherData.datetime)

        return {
          id: chart.id,
          data: [
            ...chart.data,
            { x: shortDate, y: getValueInDependsOnType(chart.id, weatherData) },
          ],
        }
      })

      return filledData
    },
    [
      { id: WeatherDataLabelEnum.PRECIPITATION_PROBABILITY, data: [] },
      { id: WeatherDataLabelEnum.PRECIPITATION_MM, data: [] },
      { id: WeatherDataLabelEnum.TEMP_MIN, data: [] },
      { id: WeatherDataLabelEnum.TEMP_MAX, data: [] },
    ]
  ) || []
