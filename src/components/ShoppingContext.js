import React, { useContext } from "react";
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const dataCartItem = {
        number: 123,
        text: "ABC",
        func: () => {
            alert("Hello!");
        },
    };
    const  valor = () => {return 555}  ;
     
    return (
        <AppContext.Provider
            value={{

                dataCartItem,
                valor,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}


// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }