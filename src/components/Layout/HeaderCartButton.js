import { useContext, useState, useEffect } from "react";
import CartContext from "../../CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isBtnBump, setisBtnBump] = useState(false);

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setisBtnBump(true);
    const timer = setTimeout(() => {
      setisBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const totalItemAmount = items.reduce((previousNum, item) => {
    return previousNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${isBtnBump ? classes.bump : ""} `;

  return (
    <button className={btnClasses} onClick={props.onChange}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItemAmount}</span>
    </button>
  );
};
export default HeaderCartButton;
