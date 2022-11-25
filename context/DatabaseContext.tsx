import React, { createContext, useContext, useState } from 'react';

export const DatabaseContext = createContext(null);

const DatabaseContextProvider = (props: any) => {
    const [celcius, setCelcius] = useState(2.2);
    const [gasConsumption, setGasConsumption] = useState(80000);
    const [electricConsumption, setElectricConsumption] = useState(20000);

    const value: any = {
        celcius, setCelcius, gasConsumption, setGasConsumption,
        electricConsumption, setElectricConsumption
    };
    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseContextProvider;