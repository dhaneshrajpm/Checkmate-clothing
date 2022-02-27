import React from "react";

import "./cart-checkout.styles.scss";

const CheckoutItemComponent = ({
  cartItem: { name, imageUrl, quantity, price },
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="productImage" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10008;</div>
  </div>
);

export default CheckoutItemComponent;
