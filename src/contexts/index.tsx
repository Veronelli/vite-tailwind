import React, { useState } from "react";

export type TGlobalContext = {
    count?: number;
    incrementCounter?: () => void;
}

const globalContext = React.createContext<TGlobalContext>({});


const useCounter = (): TGlobalContext => {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
        setCount(count + 1);
    }

    return { count, incrementCounter };
}

function GlobalContextProvider({ children }: any) {
    const { count, incrementCounter }: TGlobalContext = useCounter();

    return (
        <globalContext.Provider value={{ count, incrementCounter }}>
            {children}
        </globalContext.Provider>
    )
}

export { GlobalContextProvider, globalContext };
