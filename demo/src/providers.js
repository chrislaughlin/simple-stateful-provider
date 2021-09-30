import createProvider from '../../src/index';

const [
    CounterProvider,
    useCounterProvider,
] = createProvider(0);

const [
    PersonProvider,
    usePersonProvider,
] = createProvider({ name: 'Larry David', location: 'LA' });

export {
    CounterProvider,
    useCounterProvider,
    PersonProvider,
    usePersonProvider,
}