import { WeatherData } from '@modules/common/common.types'
import { getShortDate } from './date'

export const generateChartData = (weatherData: WeatherData[]) =>
  weatherData?.reduce(
    (chartData, weatherData) => {
      const filledData = chartData.map(chart => {
        const label = chart.id
        const shortDate = getShortDate(weatherData.datetime)

        switch (label) {
          case 'Temperature Max':
            return {
              id: 'Temperature Max',
              data: [
                ...chart.data,
                { x: shortDate, y: weatherData.temperature_max },
              ],
            }
          case 'Temperature Min':
            return {
              id: 'Temperature Min',
              data: [
                ...chart.data,
                { x: shortDate, y: weatherData.temperature_min },
              ],
            }
          case 'Precipitation':
            return {
              id: 'Precipitation',
              data: [
                ...chart.data,
                { x: shortDate, y: weatherData.precipitation_mm },
              ],
            }
          case 'Precipitation Probability':
            return {
              id: 'Precipitation Probability',
              data: [
                ...chart.data,
                { x: shortDate, y: weatherData.precipitation_probability },
              ],
            }
        }
      })

      return filledData
    },
    [
      { id: 'Temperature Max', data: [] },
      { id: 'Temperature Min', data: [] },
      { id: 'Precipitation', data: [] },
      { id: 'Precipitation Probability', data: [] },
    ]
  ) || []
