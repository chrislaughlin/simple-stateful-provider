import createProvider from '../../src/index';

const [
    CounterProvider,
    useCounterProvider,
] = createProvider(0);

export {
    CounterProvider,
    useCounterProvider,
}