import React, { useState } from "react";
import "./NewExpense.css";

import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  //const addNewExpensebutton = <button type="submit">Add New Expense</button>;
  let addNewExpensebutton = true;
  const [showAddNewExpensebutton, setShowAddNewExpensebutton] =
    useState(addNewExpensebutton);
  const onSaveExpenseDataHandler = (enteredExpenseData, resetButton) => {
    const expenseData = {
      ...enteredExpenseData,
      key: Math.random().toString(),
    };
    setShowAddNewExpensebutton(resetButton);
    props.updateData(expenseData);
  };

  const onResetHandler = (resetButton) => {
    setShowAddNewExpensebutton(resetButton);
  };

  const onErrorHandler = (message, show, title) => {
    props.displayErrorPrompt(message, show, title);
  };

  return (
    <div className="new-expense">
      {showAddNewExpensebutton && (
        <button
          type="submit"
          onClick={() => {
            setShowAddNewExpensebutton(false);
          }}
        >
          Add New Expense
        </button>
      )}
      {!showAddNewExpensebutton && (
        <NewExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onReset={onResetHandler}
          onError={onErrorHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
