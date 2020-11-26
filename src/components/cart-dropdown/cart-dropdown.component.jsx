import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component"
import "./cart-dropdown.styles.scss";
import {selectCartItems} from "../../redux/cart/cart.selector";
import {connect} from "react-redux";

const CartDropdwon = ({cartItems}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state)=>({
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CartDropdwon);