import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props): JSX.Element => {
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container
