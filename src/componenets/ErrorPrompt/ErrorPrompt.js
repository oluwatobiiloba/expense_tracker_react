import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./ErrorPrompt.module.css";

const Backdrop = (props) => {
  return <div className={classes.error_overlay} onClick={props.onClick} />;
};

const Overlay = (props) => {
  const { title, message, onClick } = props;
  return (
    <div className={classes.error_prompt} onClick={onClick}>
      <div className={classes.error_message} onClick={onClick}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        {"⚠️ "}
        {message}
        <footer className={classes.actions}>
          <button className={classes.button} type="submit">
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

const ErrorPrompt = (props) => {
  const onClickHandler = () => {
    props.displayErrorPrompt("", false);
  };
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={onClickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onClick={onClickHandler}
        ></Overlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorPrompt;
