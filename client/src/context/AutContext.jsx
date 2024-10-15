import React, { createContext, useContext, useState } from 'react';

export const AutContext = createContext();

export const useAuthcontext = () => {
    return useContext(AutContext);
};

export const AutContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
        try {
            const user = localStorage.getItem('user');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
            return null;
        }
    });

    return (
        <AutContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AutContext.Provider>
    );
};
