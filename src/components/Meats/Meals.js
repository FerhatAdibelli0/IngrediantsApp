import { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
