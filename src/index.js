import React, {
    createContext,
    useState,
    useContext
} from 'react';

const createProvider = (initState = null) => {
    const SimpleStateContext = createContext();
    const SimpleSetStateContext = createContext();

    const SimpleProvider = ({
                                children
                            }) => {
        const [state, setState] = useState(initState);

        return (
            <SimpleStateContext.Provider value={state}>
                <SimpleSetStateContext.Provider value={setState}>
                    {children}
                </SimpleSetStateContext.Provider>
            </SimpleStateContext.Provider>
        );
    };

    const useSimpleState = () => {
        const context = useContext(SimpleStateContext);

        if (context === undefined) {
            throw new Error('useSimpleState must be used within a SimpleProvider');
        }

        return context;
    };

    const useSimpleSetState = () => {
        const context = useContext(SimpleSetStateContext);

        if (context === undefined) {
            throw new Error('useSimpleDispatch must be used within a SimpleProvider');
        }

        return context;
    };

    return [
        SimpleProvider,
        useSimpleState,
        useSimpleSetState
    ];
};

export default createProvider;
