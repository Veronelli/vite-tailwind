import React from "react";

const globalContext = React.createContext({});

function GlobalContextProvider({children}){
    return (
        <globalContext.Provider value={{}}>
            {children}
        </globalContext.Provider>
    )
}

export {GlobalContextProvider};
