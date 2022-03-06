import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItemComponent from "../cart-checkout/cart-checkout.component";
import StripeButtonComponent from "../stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutComponent = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>product</span>
      </div>
      <div className="header-block">
        <span>description</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total : $ {cartTotal}</span>
    </div>
    <div className="test-warning">
      <p>Use this credit card for Payment: 
      <br/>No: 5555 5555 5555 4444
      <br/>Exp : future date
      <br/>CVV : 123</p>
    </div>
    <div className="stripe-btn">
      <StripeButtonComponent price={cartTotal} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutComponent);
