import React from "react";
import { withRouter } from "react-router-dom";

import StripeCheckout from "react-stripe-checkout";

const StripeButtonComponent = ({ price, history }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KaIFASDIeHlmfCt56ImpRlrNvPVGhdsfr4KJEK8lyBjdFgOHCw3v4QaH0HzSNX6kXziLKtkwn39a1Oa5LTruEZB00ADbZUbVp";

  return (
    <StripeCheckout
      label="Pay Now"
      name="CheckMate Cloths Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={() => {history.push("./paymentSuccess")}}
      stripeKey={publishableKey}
    />
  );
};

export default withRouter(StripeButtonComponent);
