export interface City {
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

export enum WeatherDataTypeEnum {
  ALL = 'all',
  TEMP_MAX = 'temperature_max',
  TEMP_MIN = 'temperature_min',
  PRECIPITATION_PROBABILITY = 'precipitation_probability',
  PRECIPITATION_MM = 'precipitation_mm',
}

export enum WeatherDataLabelEnum {
  ALL = 'All Types',
  TEMP_MAX = 'Temperature Max',
  TEMP_MIN = 'Temperature Min',
  PRECIPITATION_PROBABILITY = 'Precipitation Probability',
  PRECIPITATION_MM = 'Precipitation',
}
