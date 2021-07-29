import React from "react";
import {
  CartItemContainer,
  ItemDetails,
  NameContainer,
  CartItemImage,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetails>
      <NameContainer>{name}</NameContainer>
      <span>
        {price}x{quantity}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default React.memo(CartItem);
