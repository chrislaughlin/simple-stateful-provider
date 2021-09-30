import React from 'react'
import { render } from 'react-dom'
import Counter from './counter';
import Person from './person';

import { CounterProvider, PersonProvider } from './providers';

const Demo = () => {

  React.useEffect(() => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }, [])

  return (
    <CounterProvider>
      <PersonProvider>
        <Counter/>
        <Counter/>
        <Person/>
        <Person/>
      </PersonProvider>
    </CounterProvider>
  )
}

render(<Demo />, document.querySelector('#demo'))
