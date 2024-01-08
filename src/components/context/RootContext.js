import React, { useState } from 'react';
import { lenguageContext } from '.';


const RootContext = ({children}) => {
    const [dark , setDark] = useState(false)
    const [language , setLanguage] = useState("en-US")
    return (
        <lenguageContext.Provider value={{
            language,
            setLanguage,
            dark,
            setDark
        }}>
            {children}
        </lenguageContext.Provider>
    );
};

export default RootContext;