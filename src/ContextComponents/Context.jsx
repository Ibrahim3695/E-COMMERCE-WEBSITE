import React, { createContext, useReducer } from 'react'

export const Context = createContext();

const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {

        case "AddToCart": {
            const addItems = state.findIndex((e)=> e.id == action.payload.id)

            if(addItems >= 0){
                state[addItems].QTY +=1;

                return [...state]

            }else{
                return [...state,{...action.payload, addItems:addItems, QTY:1}]

            }

        }
        case "IncreaseQTY": {
            const addItems = state.findIndex((e)=> e.id == action.payload.id)

                state[addItems].QTY +=1;

                return [...state]

        }
        case "DecreaseQTY": {
            const updateItems = state.findIndex((i) => i.id === action.payload.id)
            if (state[updateItems].QTY === 1) {
                const removeItems = state.filter((i) => i.id !== action.payload.id)
            return removeItems;

            }else{

                state[updateItems].QTY -= 1;
                return [...state];
            }

        }
        case "removeItem": {
            const removeItems = state.filter((i) => i.id !== action.payload.id)

            return removeItems;

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