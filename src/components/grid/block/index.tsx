import React from 'react'
import { GRID_INDEX } from 'typings'
import { Container } from './styles'

interface IProps {
  colIndex: GRID_INDEX
  rowIndex: GRID_INDEX
}

const Block: React.FC<IProps> = ({ colIndex, rowIndex }) => {
  return <Container data-cy={`block-${rowIndex}-${colIndex}`} />
}

export default Block
