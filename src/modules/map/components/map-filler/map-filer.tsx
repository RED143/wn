import { styled } from 'linaria/lib/react'

import { Icon } from '@modules/common/components/icon'
import { IconEnum } from '@modules/common/common.types'

interface Props {
  value: string
  onChange: (newValue: string) => void
}

export const MapFilter = ({ value, onChange }: Props) => {
  return (
    <StyledFilter>
      <StyledInput
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="search here..."
      />
      <StyledIconContainer>
        <Icon name={IconEnum.SEARCH} />
      </StyledIconContainer>
    </StyledFilter>
  )
}

const StyledFilter = styled.label`
  position: relative;
  color: var(--text-color);
`

const StyledInput = styled.input`
  background-color: var(--intput-bg-color);
  border: 1px solid var(--input-border-color);
  padding: 8px 36px 8px 16px;
  border-radius: 6px;
  color: var(--input-text-color);

  &::placeholder {
    color: var(--input-placeholder-color);
  }
`
const StyledIconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: var(--input-icon-color);
`
