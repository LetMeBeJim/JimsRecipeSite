import React, { createContext, useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [isAuth, setAuth] = useState(0);

    return (
        <Context.Provider value={{ isAuth, setAuth  }}>
            {children}
        </Context.Provider>
    );
};