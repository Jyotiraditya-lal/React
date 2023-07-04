import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense=(props)=>{

    const [addExp,setaddExp]=useState(false)
    const SaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    
    const AddNewExpenseHandler=()=>{
       setaddExp(true)
    }

    const newState=(a)=>{
        setaddExp(a)
    }

    return (
        <div className='new-expense'>
           {!addExp && <button onClick={AddNewExpenseHandler} >Add new Expense</button>}
           {addExp && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onsetState={newState} />}
        </div>
    )
}

export default NewExpense
