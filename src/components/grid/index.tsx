import React from 'react'

const Grid: React.FC = () => {
  return (
    <div data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map(() => (
          <div data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map(() => <div data-cy="block"></div>)
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Grid
