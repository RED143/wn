import { IconEnum } from '@modules/common/common.types'

import { ChartPath } from './icons/chart'
import { MapPath } from './icons/map'
import { SearchPath } from './icons/search'

interface Props {
  name: IconEnum
  width?: string | number
  height?: string | number
}

const mapIcon = {
  chart: ChartPath,
  map: MapPath,
  search: SearchPath,
}

export const Icon = ({ name, width = 20, height = 20 }: Props) => {
  const IconPath = mapIcon[name]
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <IconPath />
    </svg>
  )
}
