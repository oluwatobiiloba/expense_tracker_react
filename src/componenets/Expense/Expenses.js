import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Wrapper from "../Helpers/Wrapper";

const Expenses = (props) => {
  const expenses = props.expense;
  const currentYear = new Date().getFullYear().toString();
  const [filterValue, setFilteredValue] = useState(currentYear);
  const onSelectExpenseFilterHandler = (selectedFilter) => {
    setFilteredValue(selectedFilter);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <Wrapper>
      <ExpensesFilter
        selected={filterValue}
        onSelectExpenseFilter={onSelectExpenseFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Wrapper>
  );
};
export default Expenses;
