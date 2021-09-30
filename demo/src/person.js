import React from 'react'

import { usePersonProvider } from './providers';

const Person = () => {
    const { state, setState } = usePersonProvider();

    const { name, location } = state;

    return (
        <ul>
            <li>
                <span>
                    {name}
                </span>
                <input
                    value={name}
                    onChange={event => {
                        setState({ name: event.target.value })}
                    }
                />
            </li>
            <li>
                <span>
                    {location}
                </span>
                <input
                    value={location}
                    onChange={event => setState({ location: event.target.value })}
                />
            </li>
        </ul>
    )
}

export default Person;
