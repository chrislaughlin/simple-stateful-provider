# simple-stateful-provider

[![npm package][npm-badge]][npm]

A simple react hook based provider that can be used for storing simple state for you application.

Following from the amazing pattern by [Kent C. Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively), this
package allows you to quickly create new providers with state and set state functions.

## Example

First install the package in your project:

```bash
npm install simple-stateful-provider
``` 

Import the create `createProvider` function where you want to use the provider:

```
import createProvider from 'simple-stateful-provider';
```

Create a new provider using [array destructuring](https://dev.to/sarah_chima/destructuring-assignment---arrays-16f), 
choosing the names for the provider, state hook and set state hook.

```
const [
    DemoProvider,
    useDemoState,
    useDemoSetState
] = createProvider();    
```   
`createProvider` also takes an optional initial state value. 

Then use the Provider as you would any React provider 

```
//app.js

return (
    <DemoProvider>
        <App/>
    </DemoProvider>
)
``` 

### View provider context 

To read the state from the provider you can use the `useDemoState` hook. 

```
const ExampleView = () => {
  const state = useDemoState();

  return (
      <p>
        STATE: {JSON.stringify(state)}
      </p>
  )
}
```

### Set provider context 

To set the state from the provider you can use the `useDemoSetState` hook. 

```
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
```
 
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/simple-stateful-provider

