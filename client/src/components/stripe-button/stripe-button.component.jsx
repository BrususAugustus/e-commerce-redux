import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HvTiRABZKF7gk5UY6dEHdPl2eGKQvVfJDTMmi2lfNxHeIGQBdDyi14DjJ1y5GW8s99cnk8HgqAJdgEYP1i7bYbK00LPwUruQT";
    const onToken = (token)=>{
        axios({
            url:"payment",
            method: "post",
            data:{
                amount: priceForStripe,
                token
            }
        }).then(response=>{alert("payment successful")})
        .catch(err => {console.log(err);
        alert("There was an issue with your payment. Please make sure you use the provided credit card schema.")

    })
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