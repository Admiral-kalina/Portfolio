import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const Provider = GlobalContext.Provider;

export const GlobalProvider = ({ children }) => {
    const [pageSection, setPageSection] = useState("");

    const state = {
        pageSection
    };

    const action = {
        setPageSection
    };

    return <Provider value={{ ...state, ...action }}>{children}</Provider>;
};
