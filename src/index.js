import React, {
    createContext,
    useState,
    useContext
} from 'react';

const createProvider = (initState = null, name = 'useSimpleState') => {
    const SimpleStateContext = createContext();

    const SimpleProvider = ({
        children
    }) => {
        const [state, setState] = useState(initState);
        const simpleSetState = updates => {
            if (typeof initState === 'object') {
                setState(curr => {
                    return { ...curr, ...updates };
                });
            } else {
                setState(updates)
            }
        }
        return (
            <SimpleStateContext.Provider
                value={{ state, setState: simpleSetState }}
            >
                {children}
            </SimpleStateContext.Provider>
        );
    };

    const useSimpleState = () => {
        const context = useContext(SimpleStateContext);

        if (context === undefined) {
            throw new Error(`use${name} must be used within a ${name}Provider`);
        }

        return context;
    };

    return [
        SimpleProvider,
        useSimpleState,
    ];
};

export default createProvider;
