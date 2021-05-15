import { Point, SliceTooltipProps } from '@nivo/line'

import { WeatherDataLabelEnum } from '@modules/common/common.types'

const getLineValue = (point: Point) => {
  const label = point.serieId

  switch (label) {
    case WeatherDataLabelEnum.TEMP_MAX:
    case WeatherDataLabelEnum.TEMP_MIN:
      return `${point.data.y}℃`
    case WeatherDataLabelEnum.PRECIPITATION_PROBABILITY:
      return `${point.data.y}%`
    case WeatherDataLabelEnum.PRECIPITATION_MM:
      return `${point.data.y}mm`
    default:
      throw new Error(`unknown label - ${label}`)
  }
}

export const WeatherChartTooltip = ({ slice }: SliceTooltipProps) => (
  <div
    style={{
      background: 'white',
      padding: '9px 12px',
      border: '1px solid #e9f2f9',
      borderRadius: '6px',
    }}
  >
    {slice.points.map(point => (
      <div
        key={point.id}
        style={{
          color: point.serieColor,
          padding: '3px 0',
        }}
      >
        <strong>{point.serieId}</strong> - {getLineValue(point)}
      </div>
    ))}
  </div>
)
