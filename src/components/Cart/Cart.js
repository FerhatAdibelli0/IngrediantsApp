import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React, { useContext } from "react";
import CartContext from "../../CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const removeItemCartHandler = (id) => {
    CartCtx.removeItem(id);
  };

  const addItemCartHandler = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={removeItemCartHandler.bind(null, item.id)}
          onAdd={addItemCartHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const emptyCart = CartCtx.items.length > 0;
  return (
    <Modal onHidden={props.onHidden}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {CartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHidden}>
          Close
        </button>
        {emptyCart && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
