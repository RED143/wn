import { css, cx } from 'linaria'
import { styled } from 'linaria/lib/react'

import { IconEnum, WeatherDataLabelEnum } from '@modules/common/common.types'
import { Icon } from '@modules/common/components/icon'
import { ChartTypeEnum } from '@modules/weather/weather.types'

interface Props {
  selectedType: ChartTypeEnum
  selectType: (type: ChartTypeEnum) => void
}

const filters = [
  {
    value: ChartTypeEnum.PRECIPITATION,
    icon: IconEnum.WATER,
  },
  {
    value: ChartTypeEnum.TEMP,
    icon: IconEnum.FIRE,
  },
]

const getActiveColor = (type: ChartTypeEnum) =>
  type === ChartTypeEnum.PRECIPITATION ? activeBlue : activeRed

const renderButtons = (
  selectedType: ChartTypeEnum,
  selectType: (type: string) => void
) =>
  filters.map(({ value, icon }) => (
    <StyledLabel
      key={value}
      className={cx(value === selectedType && getActiveColor(value))}
    >
      <Icon name={icon} />
      <input
        type="checkbox"
        name={value}
        value={value}
        className="sr-only"
        checked={value === selectedType}
        onChange={e => selectType(e.target.checked && value)}
      />
    </StyledLabel>
  ))

export const WeatherTypeSelector = ({ selectedType, selectType }: Props) => {
  return (
    <StyledContainer>{renderButtons(selectedType, selectType)}</StyledContainer>
  )
}

const StyledLabel = styled.label`
  padding: 6px;
  line-height: 0;
  cursor: pointer;

  & + & {
    margin-left: 6px;
  }
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--chart-filter-color);
  background-color: var(--chart-filters-bg-color);
  padding: 0 6px;
  border-radius: 6px;
  border: 1px solid var(--chart-filters-border-color);
`

const activeBlue = css`
  color: #007bc7;
`

const activeRed = css`
  color: #f00;
`
