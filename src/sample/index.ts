import { Data } from '@modules/common/common.types'

import { RawData } from './data.types'
import sample from './data.json'

const isCityAlreadyExists = (data: Data[], id: number) =>
  data.some(d => d?.station_id === id)

export const getSampleData = (): Data[] =>
  sample.reduce((data: Data[], value: RawData) => {
    const {
      place_name,
      station_id,
      latitude,
      longitude,
      datetime,
      temperature_max,
      temperature_min,
      precipitation_probability,
      precipitation_mm,
    } = value

    if (isCityAlreadyExists(data, station_id)) {
      const updatedData = data.map(d => {
        if (d.station_id === station_id) {
          return {
            ...d,
            weatherData: [
              ...d.weatherData,
              {
                datetime,
                temperature_max,
                temperature_min,
                precipitation_probability,
                precipitation_mm,
              },
            ],
          }
        }
        return d
      })
      return updatedData
    }

    return [
      ...data,
      {
        place_name,
        station_id,
        latitude,
        longitude,
        weatherData: [
          {
            datetime,
            temperature_max,
            temperature_min,
            precipitation_probability,
            precipitation_mm,
          },
        ],
      },
    ]
  }, [])
