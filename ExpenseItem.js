import React,{useState} from 'react';
import "./ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";
import ExpenseFilter from './ExpenseFilter';

function ExpenseItem(props){
  const [filterYear,SetFilterYear]=useState('2020');

  const filterYearHandler=(selectedYear)=>{
    SetFilterYear(selectedYear);
  }

  return (
      <div className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterYearHandler} />
         {props.items.map(expense => <ExpenseDetails key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />)}
      </div> 
    );
}

export default ExpenseItem;
