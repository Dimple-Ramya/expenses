import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
  { id: 'e4', title: 'Laptop', amount: 50000, date: new Date(2024, 2, 17) }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
