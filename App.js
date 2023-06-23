import ExpenseItem from "./Components/Expenses/ExpenseItem";

function App() {
  const expense=[{date:new Date(2023, 5, 21), city:"Pune", title:"Car Expense", price: 300}]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={expense[0].date} city={expense[0].city} title={expense[0].title} price={expense[0].price}></ExpenseItem>
    </div>
  );
}

export default App;
