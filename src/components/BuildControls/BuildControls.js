import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.addIngredientHandler(ctrl.type)}
          removed={() => props.removeIngredientHandler(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      onClick={props.purchaseHandler}
      disabled={!props.purchasable}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
