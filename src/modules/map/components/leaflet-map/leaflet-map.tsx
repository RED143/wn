import { useCallback } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import { styled } from 'linaria/lib/react'

import { City } from '@modules/common/common.types'
import { useCity } from '@modules/common/city.context'

import { MapMarker } from '../map-marker'

export interface LeafletMapProps {
  cities: City[]
}

const renderCitiesAsMarkers = (cities: City[]) => {
  const { dispatch } = useCity()

  const updateCity = useCallback((city: City) => {
    dispatch({ type: 'UPADTE_CITY', payload: city })
  }, [])

  return cities.map(city => (
    <MapMarker key={city.station_id} city={city} updateCity={updateCity} />
  ))
}

export const LeafletMap = ({ cities }: LeafletMapProps) => {
  return (
    <StyledMapContainer>
      <MapContainer
        center={[52, 5]}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        whenCreated={map => {
          map.setView([52.2129919, 5.2793703], 7, {
            animate: true,
          })
        }}
      >
        {renderCitiesAsMarkers(cities)}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </StyledMapContainer>
  )
}

const StyledMapContainer = styled.div`
  height: 450px;
`
