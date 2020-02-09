import React, { Component, Fragment } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("[ORDERSUMMARY] Will Update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey} : </span>
        {this.props.ingredients[igKey]}
      </li>
    ));

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A Delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout</p>
        <Button btnType="danger" clicked={this.props.cancelButtonPressed}>
          CANCEL
        </Button>
        <Button btnType="success" clicked={this.props.continueButtonPressed}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
