import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';

export const AddTransaction = () => {
   const [text,setText]=useState('')
   const [amount,setAmount]=useState('')
   const {addTransaction} = useContext(GlobalContext)
    const onSubmit=(e)=>{
        e.preventDefault();
        const transaction ={
           id:uuid(),
           text,
           amount:+amount
        }
        setText('')
        setAmount('')
        addTransaction(transaction)
    }
    return (
        <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}
