import React,{useState} from 'react';
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const Dummy_Expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expense,setExpense]=useState(Dummy_Expenses)
  const addExpenseHandler=(expenses)=>{
    setExpense(prevExpense => {
      return [expenses,...prevExpense]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItem items={expense} />
    </div>
  );
}

export default App;
