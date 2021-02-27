import React, {createContext,useContext,useReducer} from 'react';

//creating a data layer for the required content in console
export const StateContext = createContext();
//children is App in index.js
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//pull the information the data layer
export const useStateValue = () => useContext(StateContext);