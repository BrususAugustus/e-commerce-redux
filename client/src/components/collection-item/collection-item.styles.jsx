import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width:800px){
    &:hover {
    .image {
      opacity: unset;
    }

    button {
      opacity: unset;
    }
  }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const AddButton = styled(CustomButton)`
  position: absolute;
  top: 255px;
  width: 80%;
  opacity: 0.7;
  display: none;
  @media screen and (max-width: 800px){
    display:block;
    min-width: unset;
    opacity:0.9;
    padding:0 10px 0 10px;
  }
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
