import React, { useState} from 'react'
import "./ExpenseForm.css"


const ExpenseForm=(props)=>{

    const[enteredTitle,setEnteredtitle]=useState('')
    const[enteredAmount,setEnteredAmount]=useState('')
    const[enteredDate,setEnteredDate]=useState('')
    


    const TitleChangeHandler=(event)=>{
        setEnteredtitle(event.target.value);
    }

    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        props.onsetState(false)
        setEnteredtitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const CancelHandler=(event)=>{
        event.preventDefault()
        props.onsetState(false)
    }
    

    return (
        <form onSubmit={submitHandler} onReset={CancelHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value ={enteredAmount} onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="reset">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
