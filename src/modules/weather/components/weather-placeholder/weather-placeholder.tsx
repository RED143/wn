import { styled } from 'linaria/lib/react'

import { Icon } from '@modules/common/components/icon'
import { Widget } from '@modules/common/components/widget'
import { IconEnum } from '@modules/common/common.types'

export const WeahterPlaceholder = () => {
  return (
    <Widget>
      <StyledContainer>
        <Icon name={IconEnum.CHART} width={80} height={80} />
        <StyledText>Chose any marker on the map</StyledText>
      </StyledContainer>
    </Widget>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--placeholder-text-color);
  height: 500px;
`

const StyledText = styled.p`
  font-size: 2rem;
  margin-top: 20px;
`
