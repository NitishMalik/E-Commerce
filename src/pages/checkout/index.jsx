import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./styles.scss";
import {
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cartSelector";
import CheckoutItem from "../../components/checkoutItem";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(c => (
      <CheckoutItem key={c.id} item={c} />
    ))}
    <div className="total">Total : {total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckOutPage);
