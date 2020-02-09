import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey} : </span>
      {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
      <Button btnType="danger" clicked={props.cancelButtonPressed}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={props.continueButtonPressed}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
