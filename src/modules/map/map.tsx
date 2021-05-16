import { FC, useState } from 'react'
import dynamic from 'next/dynamic'

import { City, IconEnum } from '@modules/common/common.types'
import { Widget } from '@modules/common/components/widget'

import { LeafletMapProps } from './components/leaflet-map/leaflet-map'
import { MapFilter } from './components/map-filler'
import { MapPlaceholder } from './components/map-placeholder'

const LeafletMap = dynamic(
  () => import('./components/leaflet-map').then(mod => mod.LeafletMap),
  {
    ssr: false,
    // eslint-disable-next-line react/display-name
    loading: () => <MapPlaceholder />,
  }
) as FC<LeafletMapProps>

interface Props {
  cities: City[]
}

export const Map = ({ cities }: Props) => {
  const [filter, setFilter] = useState('')

  const filteredCities = cities.filter(city =>
    city.place_name?.toLocaleLowerCase()?.includes(filter)
  )

  return (
    <Widget
      title="Map"
      iconName={IconEnum.MAP}
      filter={<MapFilter value={filter} onChange={setFilter} />}
    >
      <LeafletMap cities={filteredCities} />
    </Widget>
  )
}
