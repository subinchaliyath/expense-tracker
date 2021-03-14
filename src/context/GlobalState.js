import React, { createContext, useReducer } from "react";
import Appreducer  from "./AppReducer";
// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Rent", amount: -5000 },
    { id: 2, text: "Salary", amount: 30000 },
    { id: 3, text: "Food", amount: -400 },
    { id: 4, text: "Travel", amount: -800 },
  ],
};



// Create context
export const GlobalContext= createContext(initialState)

// Provider Component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(Appreducer,initialState)

    // Actions
    const deleteTransaction=(id)=>{
        dispatch({
            type:'DELETE',
            payload:id
        })
    }
    const addTransaction=(newTrans)=>{
        dispatch({
            type:'ADD',
            payload:newTrans
        })
    }
    return (
        <GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
