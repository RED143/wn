import { CityProvider } from '@modules/common/city.context'
import { CityWeather } from '@modules/city-weather'
import { City } from '@modules/common/common.types'
import { Map } from '@modules/map'

interface Props {
  cities: City[]
}

export const Dashboard = ({ cities }: Props) => {
  return (
    <CityProvider>
      <Map cities={cities} />
      <CityWeather />
    </CityProvider>
  )
}
