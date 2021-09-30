import createProvider from '../../src/index';

const [
    CounterProvider,
    useCounterProvider,
] = createProvider(0, 'counter');

const [
    PersonProvider,
    usePersonProvider,
] = createProvider({ name: 'Larry David', location: 'LA' }, 'person');

export {
    CounterProvider,
    useCounterProvider,
    PersonProvider,
    usePersonProvider,
}