import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart,addItem,removeItem } from "../../redux/cart/cart.actions";
import "./cart-checkout.styles.scss";

const CheckoutItemComponent = ({cartItem, clearItem, removeItem, addItem}) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="productImage" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItemComponent);
