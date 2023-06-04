import React , {createContext , useContext , useReducer} from "react"

//Preparing Data Layer
export const StateContext = createContext()

export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value = {useReducer (reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//Pulling Information from the data layer
export const useStateValue = () => useContext (StateContext);