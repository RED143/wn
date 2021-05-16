import { styled } from 'linaria/react'

import { Icon } from '@modules/common/components/icon'
import { IconEnum } from '@modules/common/common.types'

interface Props {
  children: React.ReactNode
  filter?: React.ReactNode
  title?: string
  iconName?: IconEnum
}

export const Widget = ({ children, title, filter, iconName }: Props) => {
  return (
    <StyledWidget>
      {title && (
        <StyledTitleContainer>
          {iconName && <Icon name={iconName} />}
          <StyledTitle>{title}</StyledTitle>
          {filter}
        </StyledTitleContainer>
      )}
      {children}
    </StyledWidget>
  )
}

const StyledWidget = styled.div`
  padding: 20px;
  box-shadow: var(--widget-box-shadow);
  background-color: var(--widget-bg-color);
  border-radius: 6px;
  width: 650px;
  min-height: 540px;
  flex-shrink: 0;
`

const StyledTitle = styled.h3`
  color: var(--text-color);
  text-transform: capitalize;
  margin-right: auto;
  margin-left: 8px;
`

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
