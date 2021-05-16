import { styled } from 'linaria/lib/react'

export const MapPlaceholder = () => {
  return <StyledPlaceholder />
}

const StyledPlaceholder = styled.div`
  height: 450px;
  border-radius: 6px;
  background-color: var(--map-placeholder-color);
`
