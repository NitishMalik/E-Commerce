import React from "react";
import "./styles.scss";
import CustomButton from "../customButton";
import CartItem from "../cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelector";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton> GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CartDropdown);
