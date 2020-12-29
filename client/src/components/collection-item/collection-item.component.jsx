import React from "react";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  AddButton,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItemToCart }) => {
  //destructuring our item object into single props
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
