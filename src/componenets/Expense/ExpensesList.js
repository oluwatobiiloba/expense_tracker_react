import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const renderExpenses =
    props.items.length === 0 ? (
      <h2 className="expenses-list__fallback">No expenses found.</h2>
    ) : (
      props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.key}
            className="expenses"
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })
    );

  return <ul className="expenses-list">{renderExpenses}</ul>;
};

export default ExpensesList;
