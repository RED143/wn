import { City } from '@modules/common/common.types'

import { RawData } from './data.types'
import sample from './data.json'

const isCityAlreadyExists = (cities: City[], id: number) =>
  cities.some(city => city?.station_id === id)

export const getSampleData = (): City[] =>
  sample.reduce((cities: City[], value: RawData) => {
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

    if (isCityAlreadyExists(cities, station_id)) {
      const updatedCity = cities.map(city => {
        if (city.station_id === station_id) {
          return {
            ...city,
            weatherData: [
              ...city.weatherData,
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
        return city
      })
      return updatedCity
    }

    return [
      ...cities,
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
