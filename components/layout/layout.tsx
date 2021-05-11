import { styled } from 'linaria/react'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return <Content>{children}</Content>
}

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 30px;
  min-height: 100vh;
`
