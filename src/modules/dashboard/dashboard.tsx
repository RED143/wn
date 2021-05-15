import { CityProvider } from '@modules/common/city.context'
import { Weather } from '@modules/weather'
import { City } from '@modules/common/common.types'
import { Map } from '@modules/map'

interface Props {
  cities: City[]
}

export const Dashboard = ({ cities }: Props) => {
  return (
    <CityProvider>
      <Map cities={cities} />
      <Weather />
    </CityProvider>
  )
}
