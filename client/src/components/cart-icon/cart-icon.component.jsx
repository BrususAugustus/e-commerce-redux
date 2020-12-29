import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import {selectCartItemsCount} from "../../redux/cart/cart.selector";
import {CartIconContainer, ShoppingIcon, ItemCountSpan} from "./cart-icon.styles"

const CartIcon = ({toggleCartHidden, itemCount})=>(
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})

const mapDispatchToProps = (dispatch)=>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);