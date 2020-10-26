import React from 'react'
import { Container } from './styles'

interface IProps {
  colIndex: number
  rowIndex: number
}

const Block: React.FC<IProps> = ({ colIndex, rowIndex, children }) => {
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>{children}</Container>
  )
}

export default Block
