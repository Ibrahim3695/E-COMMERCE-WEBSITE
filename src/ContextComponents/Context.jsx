import React, { createContext, useReducer } from 'react'

export const Context = createContext();

const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {

        case "AddToCart": {
            const addItems = state.findIndex((e)=> e.id == action.payload.id)

            return [...state,{...action.payload, addItems:addItems}]
        }

    }

}

const initialState = [];

const ContextProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(reducer, initialState)
    console.log(cart)
    return (
        <div>
            <Context.Provider value={{cart, dispatch}}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default ContextProvider