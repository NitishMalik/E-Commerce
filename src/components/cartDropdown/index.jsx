import React from "react";
import "./styles.scss";
import CustomButton from "../customButton";

class CartDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton> GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
}

export default CartDropdown;
