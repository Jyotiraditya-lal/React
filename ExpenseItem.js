import React,{useState} from 'react';
import "./ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";
import ExpenseFilter from './ExpenseFilter';

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
        {filteredYear.length==0 ? <p>Add Expense</p> : filteredYear.map(expense => 
            <ExpenseDetails 
              key={expense.id} 
              title={expense.title} 
              date={expense.date} 
              amount={expense.amount} 
            />
          )
        }

        
      </div> 
  );
}

export default ExpenseItem;
