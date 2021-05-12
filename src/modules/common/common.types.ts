export interface Data {
  station_id: number
  place_name: string
  latitude: number
  longitude: number
  weatherData: WeatherData[]
}

export interface WeatherData {
  datetime: string
  temperature_max: string
  temperature_min: string
  precipitation_probability: string
  precipitation_mm: string
}
