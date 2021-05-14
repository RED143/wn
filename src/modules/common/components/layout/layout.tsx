import { styled } from 'linaria/react'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return <Content>{children}</Content>
}

const Content = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  gap: 30px;
`
