import React, {Component} from 'react'
import {render} from 'react-dom'

import createProvider from '../../src/index';

const [
    DemoProvider,
    useDemoState,
    useDemoSetState
] = createProvider('test');
const [
    DemoSecondProvider,
    useDemoSecondState,
    useDemoSecondSetState
] = createProvider('second');

const ExampleView = () => {
  const state = useDemoState();

  return (
      <p>
        STATE: {JSON.stringify(state)}
      </p>
  )
}

const ExampleSet = () => {
  const state = useDemoState();
  const setState = useDemoSetState();

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

const ExampleSecondView = () => {
    const state = useDemoSecondState();

    return (
        <p>
            SECOND STATE: {JSON.stringify(state)}
        </p>
    )
}

const ExampleSecondSet = () => {
    const state = useDemoSecondState();
    const setState = useDemoSecondSetState();

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
        <DemoProvider>
            <DemoSecondProvider >
              <ExampleView/>
              <ExampleSet/>
              <ExampleSecondView/>
              <ExampleSecondSet/>
            </DemoSecondProvider>
        </DemoProvider>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
