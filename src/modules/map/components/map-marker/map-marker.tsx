import { icon, LeafletMouseEvent } from 'leaflet'
import { Marker, useMap } from 'react-leaflet'

import { City } from '@modules/common/common.types'
import { memo } from 'react'

const ICON = icon({
  iconUrl: '/images/marker.png',
  iconSize: [32, 32],
})

interface Props {
  city: City
  updateCity: (city: City) => void
}

const MemomoizedMapMarker = ({ city, updateCity }: Props) => {
  const map = useMap()
  const markerClicked = (e: LeafletMouseEvent, city: City) => {
    updateCity(city)
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
    })
  }

  return (
    <Marker
      key={city.station_id}
      position={{ lat: city.latitude, lng: city.longitude }}
      icon={ICON}
      eventHandlers={{
        click: e => markerClicked(e, city),
      }}
    />
  )
}

export const MapMarker = memo(MemomoizedMapMarker)
