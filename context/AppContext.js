import { useState } from "react";
import React from "react";

const AppContext =React.createContext();

const AppProvider = ( { children } ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false)
    };

    return <AppContext.Provider value={ {isMenuOpen, openMenu, closeMenu}}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider};