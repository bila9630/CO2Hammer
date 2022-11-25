import React, { createContext, useContext, useState } from 'react';

export const DatabaseContext = createContext(null);

const DatabaseContextProvider = (props: any) => {
    const [celcius, setCelcius] = useState(0);

    const value: any = { celcius, setCelcius };
    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseContextProvider;