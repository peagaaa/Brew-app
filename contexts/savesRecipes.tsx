import React, {useContext, useState} from "react";
import { createContext } from "react";

export const RecipeContext = createContext({})

function RecipeProvider({children}){
    return(
        <RecipeContext.Provider value={{idreceita:'23'}}>
            {children}
        </RecipeContext.Provider>
    );
}

export default RecipeProvider;