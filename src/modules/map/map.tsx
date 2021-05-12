import React, { SyntheticEvent } from 'react'

import { Data } from '@modules/common/common.types'
import { Widget } from '@components/widget'

interface Props {
  cities: Data[]
}

const renderOptions = (cities: Data[]) =>
  cities.map(city => (
    <option key={city.station_id} value={city.station_id}>
      {city.place_name}
    </option>
  ))

export const Map = ({ cities }: Props) => {
  const [state, setState] = React.useState(cities[0].station_id)

  const onChange = (e: any) => {
    setState(e.target.value)
  }

  return (
    <Widget title="Map">
      <select value={state} onChange={onChange} name="city">
        {renderOptions(cities)}
      </select>
    </Widget>
  )
}
