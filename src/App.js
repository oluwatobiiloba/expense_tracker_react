import React, { useState } from "react";

import "./App.css";
import Expenses from "./componenets/Expense/Expenses";
import NewExpense from "./componenets/NewExpense/NewExpense";
import ErrorPrompt from "./componenets/ErrorPrompt/ErrorPrompt";
import Wrapper from "./componenets/Helpers/Wrapper";

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
  const [showError, setShowError] = useState({ show: false, message: "" });
  const updateDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const displayErrorPromptHandler = (message, show, title) => {
    setShowError({
      show: show,
      message: message,
      title: title,
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        {showError.show && (
          <ErrorPrompt
            message={showError.message}
            title={showError.title}
            displayErrorPrompt={displayErrorPromptHandler}
          />
        )}
        {showError.show && <div className="blur-effect" />}
        {
          <Wrapper>
            <NewExpense
              updateData={updateDataHandler}
              displayErrorPrompt={displayErrorPromptHandler}
            ></NewExpense>
            <Expenses expense={expenses}></Expenses>
          </Wrapper>
        }
      </header>
    </div>
  );
};

export default App;
