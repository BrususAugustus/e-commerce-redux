import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HvTiRABZKF7gk5UY6dEHdPl2eGKQvVfJDTMmi2lfNxHeIGQBdDyi14DjJ1y5GW8s99cnk8HgqAJdgEYP1i7bYbK00LPwUruQT";
    const onToken = (token)=>{
        console.log(token);
        alert("Payment Successful")
    }
    return(
        <StripeCheckout 
            label="Pay Now"
            name="CRWN CLothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel="Pay Now"
            amount={priceForStripe}
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
};

export default StripeButton;