import React, {Component} from 'react'
import {render} from 'react-dom'

import {
  SimpleProvider,
  useSimpleSetState,
  useSimpleState
} from '../../src'

const ExampleView = () => {
  const state = useSimpleState();

  return (
      <p>
        STATE: {JSON.stringify(state)}
      </p>
  )
}

const ExampleSet = () => {
  const state = useSimpleState();
  const setState = useSimpleSetState();

  return (
      <p>
        <input
            value={state || ''}
            onChange={evt => {
              setState(evt.target.value)
            }}
        />
      </p>
  )
}

class Demo extends Component {
  render() {
    return (
        <SimpleProvider
            initState={'test'}
        >
          <ExampleView/>
          <ExampleSet/>
        </SimpleProvider>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
