import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)
    const amount= transactions.map(each=>each.amount)
    
    const expense= amount.filter(amount=>amount<0)
                              .reduce((acc,val)=>acc+=val,0).toFixed(2)
    const total =amount.reduce((acc,val)=>acc+=val,0).toFixed(2)                          
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">₹{total-expense}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">₹{Math.abs(expense)}</p>
        </div>
      </div>
    )
}
