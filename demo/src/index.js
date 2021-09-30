import React from 'react'
import { render } from 'react-dom'
import Counter from './counter';

import { CounterProvider } from './providers';

const Demo = () => {

  React.useEffect(() => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }, [])

  return (
    <CounterProvider>
      <Counter/>
      <Counter/>
    </CounterProvider>
  )
}

render(<Demo />, document.querySelector('#demo'))
