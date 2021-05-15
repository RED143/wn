import { IconEnum } from '@modules/common/common.types'

import { ChartPath } from './icons/chart'
import { FirePath } from './icons/fire'
import { MapPath } from './icons/map'
import { SearchPath } from './icons/search'
import { WaterPath } from './icons/water'

interface Props {
  name: IconEnum
  width?: string | number
  height?: string | number
}

const mapIcon = {
  [IconEnum.CHART]: ChartPath,
  [IconEnum.FIRE]: FirePath,
  [IconEnum.MAP]: MapPath,
  [IconEnum.SEARCH]: SearchPath,
  [IconEnum.WATER]: WaterPath,
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
