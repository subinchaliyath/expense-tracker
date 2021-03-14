import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(each=>each.amount)
    const total= amount.reduce((acc,val)=>acc+=val, 0).toFixed(2)
  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹ {total}</h1>
    </>
  );
};
