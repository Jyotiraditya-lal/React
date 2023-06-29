import React, { useState} from 'react'
import "./ExpenseForm.css"


const ExpenseForm=()=>{

    const[enteredTitle,setEnteredtitle]=useState('')
    const[enteredDate,setEnteredDate]=useState('')
    const[enteredAmount,setEnteredAmount]=useState('')


    const TitleChangeHandler=(event)=>{
        setEnteredtitle(event.target.value);
    }

    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={TitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={DateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
