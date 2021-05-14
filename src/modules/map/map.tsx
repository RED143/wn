import React from 'react'

import { City } from '@modules/common/common.types'
import { Widget } from '@components/widget'
import { useCity } from '@modules/common/city.context'

interface Props {
  cities: City[]
}

const renderOptions = (cities: City[]) =>
  cities.map((city, index) => (
    <option key={city.station_id} value={index}>
      {city.place_name}
    </option>
  ))

export const Map = ({ cities }: Props) => {
  const { dispatch } = useCity()
  useCity

  const onChange = (e: any) => {
    dispatch({ type: 'UPADTE_CITY', payload: cities[e.target.value] })
  }

  return (
    <Widget title="Map">
      <select value={0} onChange={onChange} name="city">
        {renderOptions(cities)}
      </select>
    </Widget>
  )
}
