import React, { useState } from "react";

import "./App.css";
import Expenses from "./componenets/Expense/Expenses";
import NewExpense from "./componenets/NewExpense/NewExpense";

const dummyExpenses = [
  {
    key: 1,
    date: new Date(2020, 7, 14),
    title: "Liel's Allowance",
    amount: 7000,
  },
  {
    key: 2,
    date: new Date(2021, 2, 12),
    title: "Davids's Allowance",
    amount: 5000,
  },
  {
    key: 3,
    date: new Date(2021, 2, 28),
    title: "Desire's Allowance",
    amount: 12000,
  },
  {
    key: 4,
    date: new Date(2023, 5, 12),
    title: "Asake's Allowance",
    amount: 10000,
  },
  {
    key: 5,
    date: new Date(2021, 5, 12),
    title: "Basit's Allowance",
    amount: 5000,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const updateDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense updateData={updateDataHandler}></NewExpense>
        <Expenses expense={expenses}></Expenses>
      </header>
    </div>
  );
};

export default App;
