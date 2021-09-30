import React from 'react'

import { useCounterProvider } from './providers';

const Counter = () => {
  const { state, setState } = useCounterProvider();

  return (
    <div>
      <div>
        {state}
      </div>
      <div>
        <button
          onClick={() => setState(state + 1)}
        >
          Add 1
        </button>
      </div>
    </div>
  )
}

export default Counter;
