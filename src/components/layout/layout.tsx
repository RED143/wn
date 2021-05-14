import { styled } from 'linaria/react'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return <Content>{children}</Content>
}

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 30px;
  gap: 30px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
