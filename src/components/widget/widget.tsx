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
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 10px;
  border-radius: 10px;
`

const StyledTitle = styled.h3`
  color: red;
  margin-bottom: 1em;
`
