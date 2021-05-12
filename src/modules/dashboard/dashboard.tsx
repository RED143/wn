import { CityWeather } from '@modules/city-weather'
import { Data } from '@modules/common/common.types'
import { Map } from '@modules/map'

interface Props {
  data: Data[]
}

export const Dashboard = ({ data }: Props) => {
  return (
    <>
      <Map cities={data} />
      <CityWeather />
    </>
  )
}
