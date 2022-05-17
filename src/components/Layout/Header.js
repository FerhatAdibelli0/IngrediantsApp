import { Fragment } from "react";
import classes from "./Header.module.css";
import Assets from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Adibelli Food Delivery</h2>
        <HeaderCartButton onChange={props.onChange} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Assets} alt="Delicious Food" />
      </div>
    </Fragment>
  );
};

export default Header;
