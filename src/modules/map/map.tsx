import { FC, useState } from 'react'

import dynamic from 'next/dynamic'

import { City } from '@modules/common/common.types'
import { Widget } from '@modules/common/components/widget'

import { LeafletMapProps } from './components/leaflet-map/leaflet-map'
import { MapFilter } from './components/map-filler'

const LeafletMap = dynamic(
  () => import('./components/leaflet-map').then(mod => mod.LeafletMap),
  {
    ssr: false,
  }
) as FC<LeafletMapProps>

interface Props {
  cities: City[]
}

export const Map = ({ cities }: Props) => {
  const [filter, setFilter] = useState('')

  const filteredCities = cities.filter(city => city.place_name.includes(filter))

  return (
    <Widget title="Map">
      <MapFilter value={filter} onChange={setFilter} />
      <LeafletMap cities={filteredCities} />
    </Widget>
  )
}
