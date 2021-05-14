import { styled } from 'linaria/lib/react'

interface Props {
  value: string
  onChange: (newValue: string) => void
}

export const MapFilter = ({ value, onChange }: Props) => {
  return (
    <StyledFilter>
      <StyledInput value={value} onChange={e => onChange(e.target.value)} />
      {value}
    </StyledFilter>
  )
}

const StyledFilter = styled.label`
  position: relative;
`

const StyledInput = styled.input`
  background-color: var(--intput-bg-color);
  border: 1px solid var(--input-border-color);
  padding: 8px 16px;
  border-radius: 6px;
  line-height: 1;

  &:focus {
    outline: 0;
  }
`
