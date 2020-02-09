import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  addIngredientHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: priceAddition,
      ingredients: updatedIngredients
    });

    this.updatePriceState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const updatedCount =
      this.state.ingredients[type] === 0 ? 0 : this.state.ingredients[type] - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    const priceRemoval = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      totalPrice: priceRemoval,
      ingredients: updatedIngredients
    });

    this.updatePriceState(updatedIngredients);
  };

  updatePriceState(updatedIngredients) {
    const ingredients = { ...updatedIngredients };
    const sum = Object.values(ingredients).reduce((prev, cur) => prev + cur, 0);
    if (sum === 0) this.setState({ purchasable: false });
    else if (sum > 0) this.setState({ purchasable: true });
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  modalClosed = () => {
    this.setState({ purchasing: false });
  };

  modalContinueButton = () => {
    alert("Alert");
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.modalClosed}>
          <OrderSummary
            ingredients={this.state.ingredients}
            continueButtonPressed={this.modalContinueButton}
            cancelButtonPressed={this.modalClosed}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchaseHandler={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
