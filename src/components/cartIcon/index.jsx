import React from "react";
import "./styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { selectCartItemCount } from "../../redux/cart/cartSelector";

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
