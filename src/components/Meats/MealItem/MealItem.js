import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import React, { useContext } from "react";
import CartContext from "../../../CartContext";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const getAmount = (amount) => {
    cartCtx.addItem({ id:props.id,name: props.name, price: props.price, amount:amount });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={getAmount} />
      </div>
    </li>
  );
};

export default MealItem;
