import { styled } from 'linaria/react'

interface Props {
  children: React.ReactNode
  title: string
}

export const Widget = ({ children, title }: Props) => {
  return (
    <StyledWidget>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledWidget>
  )
}

const StyledWidget = styled.div`
  padding: 20px;
  box-shadow: var(--widget-box-shadow);
  background-color: var(--widget-bg-color);
  border-radius: 6px;
  width: 700px;
  max-height: 600px;
  flex-shrink: 0;
`

const StyledTitle = styled.h3`
  margin-bottom: 1em;
  color: var(--text-color);
  text-transform: capitalize;
`
