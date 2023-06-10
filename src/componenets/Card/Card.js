import classes from "./Card.module.css";
const Card = (props) => {
  const classDefault = `${classes.card} ${props.className}`;
  return <div className={classDefault}>{props.children}</div>;
};

export default Card;
