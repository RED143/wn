import cn from 'classnames'
import { css } from 'linaria'
import { styled } from 'linaria/lib/react'

import { WeatherDataLabelEnum } from '@modules/common/common.types'

interface Props {
  selectedType: WeatherDataLabelEnum
  selectType: (type: WeatherDataLabelEnum) => void
}

const types = [
  WeatherDataLabelEnum.ALL,
  WeatherDataLabelEnum.TEMP_MAX,
  WeatherDataLabelEnum.TEMP_MIN,
  WeatherDataLabelEnum.PRECIPITATION_MM,
  WeatherDataLabelEnum.PRECIPITATION_PROBABILITY,
]

const renderButtons = (
  selectedType: WeatherDataLabelEnum,
  selectType: (type: string) => void
) =>
  types.map(type => (
    <StyledLabel key={type} className={cn({ [active]: type === selectedType })}>
      {type}
      <input
        type="radio"
        name="date"
        value={type}
        className="sr-only"
        checked={type === selectedType}
        onChange={e => selectType(e.target.value)}
      />
    </StyledLabel>
  ))

export const CityWeatherTypeSelector = ({
  selectedType,
  selectType,
}: Props) => {
  return (
    <StyledContainer>{renderButtons(selectedType, selectType)}</StyledContainer>
  )
}

const StyledLabel = styled.label`
  font-weight: bold;
  padding: 15px 15px;
  cursor: pointer;
`

const StyledContainer = styled.div`
  margin-bottom: 20px;
`

const active = css`
  box-shadow: inset 0px -3px 0px #007bc7;
`
