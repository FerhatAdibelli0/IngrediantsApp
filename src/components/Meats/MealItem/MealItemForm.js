import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import React, { useRef, useState } from "react";

const MealItemForm = (props) => {
  const enteredAmount = useRef();
  const [isAmountValid, setisAmountValid] = useState(true);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredAmountString = enteredAmount.current.value;
    const enteredAmountNumber = +enteredAmountString;

    if (
      enteredAmountString.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setisAmountValid(false);
      return;
    }

    props.onAddItem(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        label="Amount"
        ref={enteredAmount}
        input={{
          id: Math.random(),
          defaultValue: "1",
          max: "5",
          min: "1",
          step: "1",
          type: "number",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>invalid amount(1-5)</p>}
      {isAmountValid && <p></p>}
    </form>
  );
};

export default MealItemForm;
