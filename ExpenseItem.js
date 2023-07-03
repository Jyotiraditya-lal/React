import React,{useState} from 'react';
import "./ExpenseItem.css"
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

function ExpenseItem(props){
  const [filterYear,SetFilterYear]=useState('2023');

  const filterYearHandler=(selectedYear)=>{
    SetFilterYear(selectedYear);
  }

  const filteredYear=props.items.filter(expense=>{
    return (expense.date.getFullYear().toString()===filterYear)
  })
  return (
      <div className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterYearHandler} />
        <ExpenseList items={filteredYear} />
      </div> 
  );
}

export default ExpenseItem;
