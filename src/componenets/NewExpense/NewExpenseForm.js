import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     inputTitle: "",
  //     inputAmount: "",
  //     inputDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   inputDate: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setAmountInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDataObj = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
    };
    console.log(expenseDataObj);

    props.onSaveExpenseData(expenseDataObj, true);

    setAmountInput("");
    setDateInput("");
    setTitleInput("");
  };

  const resetHandler = (event) => {
    event.preventDefault();
    props.onReset(true);
  };
  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={titleInput} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amountInput}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={dateInput}
          />
        </div>
        <div className="new-expense__actions">
          <button type="reset">Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
