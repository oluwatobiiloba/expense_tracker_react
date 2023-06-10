import React, { useState } from "react";
import classes from "./NewExpenseForm.module.css";

const NewExpenseForm = (props) => {
  // const titleInputRef = useRef();
  // const dateInputRef = useRef();
  // const amountInputRef = useRef();

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
    const checkTitle = titleInput.trim().length === 0;
    const checkAmount = +amountInput.trim().length === 0;
    const checkDate = dateInput.trim().length === 0;

    if (checkTitle || checkAmount || checkDate) {
      props.onError(
        `Please provide the${checkTitle ? " Title" : ""} ${
          checkAmount ? " Amount" : ""
        }${checkDate ? " Date" : ""}`,
        true,
        "Input Error"
      );
    }
    const expenseDataObj = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
    };

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
      <div className={classes.new_expense__controls}>
        <div className={classes.new_expense__control}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={titleChangeHandler}
            value={titleInput}
            // ref={titleInputRef}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amountInput}
            // ref={amountInputRef}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={dateInput}
            // ref={dateInputRef}
          />
        </div>
        <div className={classes.new_expense__actions}>
          <button type="reset">Cancel</button>
        </div>
        <div className={classes.new_expense__actions}>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
